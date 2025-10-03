# Venom Scraper - YouTube

## Descrição

Este projeto utiliza a biblioteca `venom-scraper` para realizar buscas no YouTube. Você pode realizar pesquisas no YouTube e obter resultados de vídeos, áudios e outros conteúdos relacionados ao termo fornecido.

## Funcionalidade

O código realiza três tipos de pesquisa:

1. **Pesquisa Geral**: Pesquisa por vídeos, playlists, e canais.
2. **Pesquisa de Áudio**: Pesquisa por áudios (em formato MP3).
3. **Pesquisa de Vídeo**: Pesquisa por vídeos (em formato MP4).

## Como Usar

### Passos de Instalação

1. Instale as dependências:

```bash
npm i venom-scraper
```

Para realizar a pesquisa, crie um arquivo, por exemplo, `app.js`, e adicione o seguinte código:

Adicione essa definição no seu arquivo

```javascript
const { VenomScrapers } = require("venom-scraper/YouTube");
```
### Código Scraper Pesquisa 

```javascript 
(async () => {
  console.log("\n🔎 Pesquisando...");
  const pesquisaResult = await VenomScrapers.getPesquisa("alívio");
  console.log(pesquisaResult);
})();
```

### Retorno

```JSON
  [
    {
      status_req: 'funcionando',
      criador_scraper: 'Venom Mods',
      titulo: 'Jessé Aguiar | Alívio [Clipe Oficial]',
      descricao: 'O meu combustível, pra continuar, Jesus é a calmaria, o aconchego dos meus dias O meu alicerce, pra não desistir, não tá sendo...',
      videoId: 'JgLFoArntlI',
      url: 'https://youtube.com/watch?v=JgLFoArntlI',
      thumbnail: 'https://i.ytimg.com/vi/JgLFoArntlI/hq720.jpg',
      duracao: '5:07',
      visualizacoes: 248696560,
      canal: {
        nome: 'Todah Music',
        url: 'https://youtube.com/channel/UCpf5YXmzGHC4m5uLCdlrrfA'
      }
    },
    {
      status_req: 'funcionando',
      criador_scraper: 'Venom Mods',
      titulo: 'Jessé Aguiar | Alívio [Clipe Oficial]',
      descricao: 'O meu combustível, pra continuar, Jesus é a calmaria, o aconchego dos meus dias O meu alicerce, pra não desistir, não tá sendo...',
      videoId: 'dN2CxhClt-o',
      url: 'https://youtube.com/watch?v=dN2CxhClt-o',
      thumbnail: 'https://i.ytimg.com/vi/dN2CxhClt-o/hq720.jpg',
      duracao: '5:07',
      visualizacoes: 144406327,
      canal: {
        nome: 'raíSys Music',
        url: 'https://youtube.com/c/Ra%C3%ADsysMusic'
      }
    }
  ]
```
### Código Scraper Áudio 

```javascript
(async () => {
  console.log("\n🎵 Pesquisando Áudio...");
  const audioResult = await VenomScrapers.getMp3("alívio");
  console.log(audioResult);
})();
```  
### Retorno

```JSON 
  [
    {
      status_req: 'funcionando',
      criador_scraper: 'Venom Mods',
      titulo: 'Jessé Aguiar | Alívio [Clipe Oficial]',
      descricao: 'O meu combustível, pra continuar, Jesus é a calmaria, o aconchego dos meus dias O meu alicerce, pra não desistir, não tá sendo...',
      videoId: 'JgLFoArntlI',
      url: 'https://youtube.com/watch?v=JgLFoArntlI',
      thumbnail: 'https://i.ytimg.com/vi/JgLFoArntlI/hq720.jpg',
      duracao: '5:07',
      visualizacoes: 248696560,
      canal: {
        nome: 'Todah Music',
        url: 'https://youtube.com/channel/UCpf5YXmzGHC4m5uLCdlrrfA'
      }
    },
    {
      status_req: 'funcionando',
      criador_scraper: 'Venom Mods',
      titulo: 'Jessé Aguiar | Alívio [Clipe Oficial]',
      descricao: 'O meu combustível, pra continuar, Jesus é a calmaria, o aconchego dos meus dias O meu alicerce, pra não desistir, não tá sendo...',
      videoId: 'dN2CxhClt-o',
      url: 'https://youtube.com/watch?v=dN2CxhClt-o',
      thumbnail: 'https://i.ytimg.com/vi/dN2CxhClt-o/hq720.jpg',
      duracao: '5:07',
      visualizacoes: 144406327,
      canal: {
        nome: 'raíSys Music',
        url: 'https://youtube.com/c/Ra%C3%ADsysMusic'
      }
    }
  ]
```
### Código Scraper Vídeo

```javascript
(async () => {
  console.log("\n🎥 Pesquisando Vídeo...");
  const videoResult = await VenomScrapers.getMp4("alívio");
  console.log(videoResult);
})();
```

### Retorno

```JSON
  [
    {
      status_req: 'funcionando',
      criador_scraper: 'Venom Mods',
      titulo: 'Jessé Aguiar | Alívio [Clipe Oficial]',
      descricao: 'O meu combustível, pra continuar, Jesus é a calmaria, o aconchego dos meus dias O meu alicerce, pra não desistir, não tá sendo...',
      videoId: 'JgLFoArntlI',
      url: 'https://youtube.com/watch?v=JgLFoArntlI',
      thumbnail: 'https://i.ytimg.com/vi/JgLFoArntlI/hq720.jpg',
      duracao: '5:07',
      visualizacoes: 248696560,
      canal: {
        nome: 'Todah Music',
        url: 'https://youtube.com/channel/UCpf5YXmzGHC4m5uLCdlrrfA'
      }
    },
    {
      status_req: 'funcionando',
      criador_scraper: 'Venom Mods',
      titulo: 'Jessé Aguiar | Alívio [Clipe Oficial]',
      descricao: 'O meu combustível, pra continuar, Jesus é a calmaria, o aconchego dos meus dias O meu alicerce, pra não desistir, não tá sendo...',
      videoId: 'dN2CxhClt-o',
      url: 'https://youtube.com/watch?v=dN2CxhClt-o',
      thumbnail: 'https://i.ytimg.com/vi/dN2CxhClt-o/hq720.jpg',
      duracao: '5:07',
      visualizacoes: 144406327,
      canal: {
        nome: 'raíSys Music',
        url: 'https://youtube.com/c/Ra%C3%ADsysMusic'
      }
    }
  ]
```

## Contate-me

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white)](https://wa.me/559784388524)  
[![Telegram](https://img.shields.io/badge/Telegram-0088CC?style=flat&logo=telegram&logoColor=white)](https://t.me/VenomDsn)  
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://instagram.com/venom_mods_ofc)  
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/@VenomModsss)
