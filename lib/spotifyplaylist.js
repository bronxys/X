// FEITO POR @jefferson_ddos e muito ☕ 
// Whats: +55 32 9924-0466

const path = require('path');
const fs = require('fs');
const AdmZip = require('adm-zip');
const fetch = require('node-fetch');
const { SITE_JEFF_APIS } = require("../DADOS/Dono/nescessario.json");
const { API_KEY_JEFF } = require('../iniciar.js');
var { NomeDoBot } = require("../DADOS/Dono/settings.json");

async function fetchJson(url) {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    const text = await response.text();
    throw new Error(`erro`);
  }
}

async function searchYouTubeVideos(trackName) {
  try {
    
    const response = await fetchJson(`${SITE_JEFF_APIS}/api/ytsrc/videos?q=${encodeURIComponent(trackName)}&apikey=${API_KEY_JEFF}`);
    if (response.resultado.length > 0) {
      
      return response.resultado[0].url;
    } else {
      console.warn(`Nenhum vídeo encontrado para ${trackName}`);
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar vídeo:', error.message);
    throw new Error('Falha tente novamente mais tarde! 😔');
  }
}

async function downloadMusicFromSpotifyApi(spotifyUrl, outputPath) {
  try {
    
    const apiUrl = `${SITE_JEFF_APIS}/api/spotifydow?link=${encodeURIComponent(spotifyUrl)}&apikey=${API_KEY_JEFF}`;
    const response = await fetchJson(apiUrl);
    if (!response || !response.resultado) {
      throw new Error('Link de download não encontrado na resposta');
    }
    const downloadUrl = response.resultado;
    const musicResponse = await fetch(downloadUrl);
    if (!musicResponse.ok) {
      throw new Error(`Falha ao buscar o arquivo da música. Status: ${musicResponse.status}`);
    }
    const writer = fs.createWriteStream(outputPath);
    await new Promise((resolve, reject) => {
      musicResponse.body.pipe(writer);
      writer.on('finish', () => resolve());
      writer.on('error', (err) => reject(err));
    });
    
  } catch (error) {
    console.error('Falha no download da música:', error.message);
    throw new Error('Falha no download da música');
  }
}

async function downloadMusicWithAPI(videoUrl, outputPath) {
  try {
    
    const response = await fetch(`${SITE_JEFF_APIS}/api/dl/ytaudio2/func?url=${encodeURIComponent(videoUrl)}&apikey=${API_KEY_JEFF}`);
    const writer = fs.createWriteStream(outputPath);
    await new Promise((resolve, reject) => {
      response.body.pipe(writer);
      writer.on('finish', () => resolve());
      writer.on('error', (err) => reject(err));
    });
    
  } catch (error) {
    console.error('Falha no download do vídeo:', error.message);
    throw new Error('Falha no download do vídeo');
  }
}

function createZip(sourceDir, outputZipPath) {
  
  const zip = new AdmZip();
  const files = fs.readdirSync(sourceDir);
  files.forEach(file => zip.addLocalFile(path.join(sourceDir, file)));
  zip.writeZip(outputZipPath);
  
  return outputZipPath;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Substituindo a função de obter as faixas da playlist para usar a nova API
async function getSpotifyPlaylistTracks(playlistUrl) {
  try {
    
    const apiUrl = `${SITE_JEFF_APIS}/api/spotify-playlist?url=${encodeURIComponent(playlistUrl)}&apikey=${API_KEY_JEFF}`;
    const response = await fetchJson(apiUrl);

    if (!response.status) {
      throw new Error('Falha ao obter playlist');
    }

    const playlistName = response.resultado.nomeDaPlaylist;
    const tracks = response.resultado.faixas.map(item => ({
      name: item.nome,
      artist: item.artista,
      spotifyUrl: item.url
    }));

    
    return { playlistName, tracks };
  } catch (error) {
    console.error('Erro ao obter as faixas da playlist:', error.message);
    throw new Error('Falha ao obter faixas da playlist');
  }
}

async function processSpotifyPlaylist(playlistUrl, conn, from) {
  const playlistId = extractPlaylistId(playlistUrl);
  if (!playlistId) {
    throw new Error('Link de playlist inválido');
  }

  try {
    
    const { playlistName, tracks } = await getSpotifyPlaylistTracks(playlistUrl);
    if (!tracks || tracks.length === 0) {
      throw new Error('Nenhuma faixa encontrada na playlist');
    }

    const userDir = path.join(__dirname, 'temp_music', from);
    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir, { recursive: true });
    }

    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      const outputPath = path.join(userDir, `${track.artist} - ${track.name}.mp3`);
      try {
        
        await downloadMusicFromSpotifyApi(track.spotifyUrl, outputPath);
      } catch {
       
        const videoUrl = await searchYouTubeVideos(`${track.name} ${track.artist}`);
        if (videoUrl) {
          await downloadMusicWithAPI(videoUrl, outputPath);
        }
      }
    }

    const zipPath = path.join(__dirname, `${playlistName}.zip`);
    await retryCreateZip(userDir, zipPath);
    fs.rmSync(userDir, { recursive: true });

    return { zipPath, playlistName, trackCount: tracks.length };
  } catch (error) {
    console.error('Erro ao processar a playlist:', error.message);
    throw new Error('Erro ao processar a playlist');
  }
}

async function retryCreateZip(sourceDir, outputZipPath, attempts = 3) {
  let success = false;
  for (let i = 0; i < attempts; i++) {
    try {
      createZip(sourceDir, outputZipPath);
      success = true;
      break;
    } catch (error) {
      console.error(`Tentativa ${i + 1} de zipping falhou:`, error.message);
    
    }
  }
  if (!success) {
    throw new Error('Falha ao criar o arquivo zip após várias tentativas');
  }
}

function extractPlaylistId(playlistUrl) {
  const regex = /playlist\/([a-zA-Z0-9]+)/;
  const match = playlistUrl.match(regex);
  return match ? match[1] : null;
}

async function handleSpotifyPlaylist(q, conn, from, enviar, info) {
  try {
    const { zipPath, playlistName, trackCount } = await processSpotifyPlaylist(q, conn, from);
    await conn.sendMessage(from, {
      document: { url: zipPath },
      mimetype: 'application/zip',
      fileName: `${playlistName}.zip`,
      caption: `Aqui está a playlist com ${trackCount} músicas! By: ${NomeDoBot}`
    }, { quoted: info });
    fs.unlinkSync(zipPath);
  } catch (error) {
    console.error('Erro ao processar a playlist Spotify:', error.message);
    conn.sendMessage(from, { react: { text: '❌', key: info.key } });
    conn.sendMessage(from, { text: 'Erro ao processar a playlist do Spotify. Tente novamente mais tarde.' });
  }
}

module.exports = { handleSpotifyPlaylist };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update ${__filename}`);
  delete require.cache[file];
  require(file);
});