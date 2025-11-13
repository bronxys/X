
const menu = (prefix, NomeDoBot, dayy, jefftopcases, sender, isPremium, H, D, lermais, tempo, adivinha, botoes_, SITE_JEFF_APIS, isXbotOfc, versão) => {
  
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `

╭═══════════════════ ┐
┏│──BEM VINDO(A) AO MENU
┏│
┏│Bot: ${NomeDoBot}
┏│Versão: ${versão}
┏│Tipo: 「 ${isXbotOfc ? `𝙎𝙐𝘽 ${NomeDoBot}` : `${NomeDoBot} 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇`} 」
┏│Usuário: 「 @${sender.split("@")[0]} 」
┏│Usuario VIP?:「 ${isPremium ? "✅" : "❌"} 」
┏│Dispositivo: 「 ${adivinha} 」
┏│Dia:  「 ${dayy} 」
┏│Hora:  「 ${H} ${tempo} 」
┏│Data:  「 ${D} 」
┏│Insta Dono: bit.ly/insta_dono
┏│Apis: ${SITE_JEFF_APIS}
┏│Canal Updates: bit.ly/X-bot_Updates
┏│⤿✧✧✧✧✧
╰══════════┐
${lermais()}
╭═══════════════════ ┐
╰╮
╭┤           [📜]𝗠𝗘𝗡𝗨𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│✞͜͡▹ ${prefix}Menudono
┗▶ Exibe o menu do dono do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Menuadm
┗▶ Exibe o menu para administradores do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Menupremium
┗▶ Mostra comandos exclusivos para usuários premium.
╰╮
┏│
┏│✞͜͡▹ ${prefix}imunes
┗▶ Lista de whatsapp modificados
╰╮
┏│
┏│✞͜͡▹ ${prefix}Efeitosimg
┗▶ Aplica efeitos em imagens.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Logos
┗▶ Cria diversos tipos de logos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Alteradores
┗▶ Comandos para alterar áudios e vozes.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Brincadeiras
┗▶ Comandos para diversão e interações engraçadas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Puxadas
┗▶ Puxa dados pessoais
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fotoshop
┗▶ Edição de imagens com efeitos variados.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Menurpg
┗▶ Comandos voltados para RPG e aventuras.
┏│
╰══════════┤

╭═══════════════════ ┐
╰╮  
╭┤           [👨‍💻]𝗜𝗡𝗙𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│✞͜͡▹ ${prefix}configurar-bot
┗▶ Configurações iniciais do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}add_botgp
┗▶ Adiciona o bot em um grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}grupo_figurinhas
┗▶ Acesso ao grupo oficial de figurinhas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}seguidores-insta
┗▶ Compre Seguidores com meu criador.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infoduelo
┗▶ Informações sobre o sistema de duelos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}botentra
┗▶ Faz o bot entrar no grupo via link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}planos
┗▶ Exibe os planos disponíveis do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}alugar
┗▶ Alugue o bot para seu grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}infoalugar
┗▶ Informações sobre o aluguel do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}lojavip
┗▶ Acesso à loja para usuários VIP.
╰╮
┏│
┏│✞͜͡▹ ${prefix}infovip
┗▶ Informações sobre benefícios VIP.
╰╮
┏│
┏│✞͜͡▹ ${prefix}me
┗▶ Mostra seu perfil no bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}recarregar
┗▶ Recarregue saldo para aluguel
╰╮
┏│
┏│✞͜͡▹ ${prefix}moedas
┗▶ Verifique seu saldo de moedas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}minhaskey
┗▶ Suas chaves de ativação do bot no grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infotransmitir
┗▶ Detalhes sobre o sistema de transmissões.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infoaluguel
┗▶ Informações adicionais sobre aluguel do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoMultiPrefixo
┗▶ Explica o uso de múltiplos prefixos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoBemvindo
┗▶ Informações sobre a função de boas-vindas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infopalavrão
┗▶ Explica a moderação de palavrões.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infolistanegra
┗▶ Detalhes da lista negra de usuários.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infobancarac
┗▶ Informações do sistema ban por textos grandes
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infovotação
┗▶ Informações sobre votações.
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoBanghost
┗▶ Explica a função de banimento de fantasmas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infosorteio
┗▶ Detalhes sobre o sistema de sorteios.
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoAnotação
┗▶ Informações sobre o sistema de anotações.
┏│
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤       [💻]𝟭𝟬 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦
╰╮            𝗠𝗔𝗜𝗦 𝗨𝗦𝗔𝗗𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
${jefftopcases()}
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤           [🧠]𝗖𝗠𝗗'𝗦 / 𝗜𝗔
┃╰══ ✞
╰╦══════════════════ ✞
┏│✞͜͡▹ Jeff (IA)
┗▶ Converse com a IA Jeff diretamente.
╰╮
┏│
┏│✞͜͡▹ ${prefix}doacao
┗▶ Apóie o projeto com uma doação de qual quer valor
╰╮
┏│
┏│✞͜͡▹ ${prefix}apoiar
┗▶ Apóie o projeto com uma doação de qual quer valor
╰╮
┏│
┏│✞͜͡▹ ${prefix}xbot
┗▶ Converse com o bot como se fosse um amigo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gpt
┗▶ Faça perguntas ao ChatGPT em texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gptvoz
┗▶ Resposta do ChatGPT em formato de voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gpt4
┗▶ Utilize o modelo GPT-4 via texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gpt4voz
┗▶ Utilize o GPT-4 com resposta por voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gptblackbox
┗▶ Use o GPT sem filtros
╰╮
┏│
┏│✞͜͡▹ ${prefix}gptbkvoz
┗▶ GPT da Blackbox com resposta em voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}bard
┗▶ Faça perguntas ao Bard (IA do Google).
╰╮
┏│
┏│✞͜͡▹ ${prefix}bardvoz
┗▶ Bard responde com voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fotohd (marca-imagem)
┗▶ Melhore a qualidade de uma imagem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infobot
┗▶ Informações gerais sobre o bot (áudio).
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bug (QUESTIONE)
┗▶ Reporte um bug encontrado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Sugestao (DICA)
┗▶ Envie uma sugestão de comando ou melhoria.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Avalie (O-QUAO-BOM)
┗▶ Avalie com uma nota esse bot
┏│
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤  [🕵️‍♂️]𝗣𝗘𝗦𝗤𝗨𝗜𝗦𝗔𝗦/𝗕𝗔𝗜𝗫𝗔𝗥
┃╰══ ✞
╰╦══════════════════ ✞
┏│✞͜͡▹ ${prefix}Play 
┗▶ Baixe áudio ou vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}Play_audio 
┗▶ Baixe áudio ou vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}Play_audio2 
┗▶ Baixe áudio ou vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_audio3 
┗▶ Baixe áudio ou vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_video 
┗▶ Baixe vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_video2 
┗▶ Baixe vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_video3 
┗▶ Baixe vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}playdoc (NOME)
┗▶ Baixe vídeo do YouTube no formato documento pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}Playmp4 (NOME)
┗▶ Baixe vídeo do YouTube pelo link ou nome
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytsearch (NOME)
┗▶Pesquise no YouTube
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytsearch2 (NOME)
┗▶ Pesquise no YouTube
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytmp4 (LINK)
┗▶ Baixa o vídeo do YouTube em MP4 pelo link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytmp3 (LINK)
┗▶ Baixa o áudio do YouTube em MP3 pelo link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tiktok_audio (LINK)
┗▶ Baixa áudio de vídeos do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tiktok_video (LINK)
┗▶ Baixa vídeo do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tiktok_audio2 (LINK)
┗▶ Baixa áudio alternativo do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tiktok_video2 (LINK)
┗▶ Baixa vídeo alternativo do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Insta_audio (LINK)
┗▶ Baixa áudio de vídeos do Instagram.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Insta_video (LINK)
┗▶ Baixa vídeo do Instagram.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Face_audio (LINK)
┗▶ Baixa áudio de vídeos do Facebook.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Face_video (LINK)
┗▶ Baixa vídeo do Facebook.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Twitter_audio (LINK)
┗▶ Baixa áudio de vídeos do Twitter.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Twitter_video (LINK)
┗▶ Baixa vídeo do Twitter.
╰╮
┏│
┏│✞͜͡▹ ${prefix}soundcloud (LINK)
┗▶ Baixa áudio do SoundCloud.
╰╮
┏│
┏│✞͜͡▹ ${prefix}shazam (MARQUE-AUDIO/VIDEO)
┗▶ Identifica a música de áudio ou vídeo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}audiomeme (nome-meme)
┗▶ Pesquise um audio de um meme
╰╮
┏│
┏│✞͜͡▹ ${prefix}kwai (LINK)
┗▶ Baixa vídeo do Kwai.
╰╮
┏│
┏│✞͜͡▹ ${prefix}aptoide (nome)
┗▶ Pesquisa por apps no Aptoide.
╰╮
┏│
┏│✞͜͡▹ ${prefix}mediafire (link)
┗▶ Baixa arquivos do MediaFire.
╰╮
┏│
┏│✞͜͡▹ ${prefix}mediafire2 (link)
┗▶ Baixa arquivos alternativos do MediaFire.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gitclone (Link-do-repo)
┗▶ Clona repositórios do GitHub.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pinterest (oque quer)
┗▶ Pesquisa imagens no Pinterest.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pinterest2 (oque quer)
┗▶ Pesquisa imagens no Pinterest alternativo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}imagem (oque quer)
┗▶ Pesquisa imagens de acordo com sua solicitação.
╰╮
┏│
┏│✞͜͡▹ ${prefix}imagine (oque quer)
┗▶ Cria imagens baseadas no seu pedido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pesquisar (oque quer)
┗▶ Pesquisa no Google.
╰╮
┏│
┏│✞͜͡▹ ${prefix}playstore (oque quer)
┗▶ Pesquisa apps na Play Store.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Imgpralink (MARCAR)
┗▶ Gera link de imagem a partir de uma imagem mencionando ela.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Videopralink (MARCAR-V)
┗▶ Gera link de vídeo a partir de um video mencionando ele.
┏│
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤     [📝]𝗜𝗡𝗙𝗢𝗥𝗠𝗔ÇÕ𝗘𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│✞͜͡▹ ${prefix}Ping (VELO)
┗▶ Obtenha informações de desempenho do Bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}Atividade
┗▶ Mostra o status de atividades dos membros do grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankativo
┗▶ Exibe o ranking de usuários ativos do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Checkativo (@MARCAR)
┗▶ Exibe informações do usuário
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ranklevel (DE-TODOS)
┗▶ Exibe o ranking de níveis de todos os usuários.
╰╮
┏│
┏│✞͜͡▹ ${prefix}signo
┗▶ Pesquise seu signo
╰╮
┏│
┏│✞͜͡▹ ${prefix}clima (cidade)
┗▶ Exibe o clima atual da cidade informada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}contar (texto)
┗▶ Conta a quantidade de caracteres no texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}transcrever (marque-audio)
┗▶ Transcreve o áudio marcado em texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}validarcpf 13226xxxxxx
┗▶ Verifica se o cpf e válido
╰╮
┏│
┏│✞͜͡▹ ${prefix}infonumero 5532xxxxxx
┗▶ Exibe informações sobre o número informado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}infoproxy (link)
┗▶ Exibe informações sobre o link (proxy).
╰╮
┏│
┏│✞͜͡▹ ${prefix}stalkig (Digite o nome Do insta)
┗▶ Realiza o stalk de uma conta no Instagram.
╰╮
┏│
┏│✞͜͡▹ ${prefix}stalkttk (Digite o nome Do tiktok)
┗▶ Realiza o stalk de uma conta no TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}stalkff (Digite o *ID* de algum usuário do free fire)
┗▶ Realiza o stalk de uma conta do Free Fire
╰╮
┏│
┏│✞͜͡▹ ${prefix}print (url)
┗▶ Tira uma captura de tela de um site.
╰╮
┏│
┏│✞͜͡▹ que horas sao?
┗▶ Informa a hora atual.
┏│
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤           [🎮]𝗝𝗢𝗚𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Jogodavelha (@Marcar)
┗▶ Inicia um jogo da velha com o jogador marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Anagrama (1/0)
┗▶ Inicia ou termina um jogo de anagrama.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Gartic (1/0)
┗▶ Inicia ou termina um jogo de Gartic.
╰╮
┏│
┏│✞͜͡▹ ${prefix}qualmusic (1/0)
┗▶ Inicia ou termina um jogo de "Qual música".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Quizanimal (1/0)
┗▶ Inicia ou termina um quiz sobre animais.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Enigma (1/0)
┗▶ Inicia ou termina um jogo de enigma.
╰╮
┏│
┏│✞͜͡▹ ${prefix}R-forca (Letra)
┗▶ Chuta uma letra no jogo da forca.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Resetforca (Resetar)
┗▶ Reseta o jogo da forca.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Jogodaforca (Iniciar)
┗▶ Inicia um novo jogo da forca.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Vab (Você prefere?)
┗▶ Inicia o jogo "Você prefere?".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Eununca (Eu nunca, eu já)
┗▶ Jogo "Eu nunca, eu já".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ppt (Pedra/Papel/Tesoura)
┗▶ Inicia um jogo de pedra, papel e tesoura.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Cassino
┗▶ Jogo de cassino.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Mina (coordenada(s))
┗▶ Jogo da mina, informe as coordenadas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minado (dificuldade)
┗▶ Inicia um jogo de minado com a dificuldade escolhida.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minareset (resetar)
┗▶ Reseta o jogo da mina.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Mineshelp (info)
┗▶ Exibe informações sobre o jogo da mina.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minatips (dicas)
┗▶ Exibe dicas para o jogo da mina.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Akinator (iniciar jogo)
┗▶ Inicia o jogo do Akinator.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Resetaki (resetar akinator)
┗▶ Reseta o jogo do Akinator.
┏│
┃╰══ ✞
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤      [👻]𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Attp (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp2 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp3 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp4 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp5 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp6 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp7 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp2 (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp3 (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp4 (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}qc (TEXTO)
┗▶ Cria uma figurinha de fakechat
╰╮
┏│
┏│✞͜͡▹ ${prefix}amongus
┗▶ Crie uma figurinha de texto do amongus
╰╮
┏│
┏│✞͜͡▹ ${prefix}buscar_sticker
┗▶ Busca um pack de figurinhas
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fsticker (MARCAR-FOTO)
┗▶ Cria um sticker a partir da foto marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Sticker (MARCAR-FOTO)
┗▶ Cria um sticker a partir da foto marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}stickera (QUANTIDADE)
┗▶ Pega figurinhas aleatórias
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_flork (QUANTIDADE)
┗▶ Envia stickers de flork.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_emoji (QUANTIDADE)
┗▶ Envia stickers de emoji.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_aleatoria (QUANTIDADE)
┗▶ Envia stickers aleatórios.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_memes (QUANTIDADE)
┗▶ Envia stickers de memes.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_anime (QUANTIDADE)
┗▶ Envia stickers de anime.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_coreana (QUANTIDADE)
┗▶ Envia stickers de conteúdo coreano.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_bebe (QUANTIDADE)
┗▶ Envia stickers de bebês.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_desenho (QUANTIDADE)
┗▶ Envia stickers de desenhos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_animais (QUANTIDADE)
┗▶ Envia stickers de animais.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_engracadas (QUANTIDADE)
┗▶ Envia stickers engraçados.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_raiva (QUANTIDADE)
┗▶ Envia stickers de raiva.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_roblox (QUANTIDADE)
┗▶ Envia stickers do jogo Roblox.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_ale (QUANTIDADE)
┗▶ Envia stickers aleatórios.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 😏/whatsapp
┗▶ Envia o emoji do WhatsApp.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/google
┗▶ Envia o emoji do Google.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/apple
┗▶ Envia o emoji da Apple.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/sansung
┗▶ Envia o emoji da Samsung.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/Microsoft
┗▶ Envia o emoji da Microsoft.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/twitter
┗▶ Envia o emoji do Twitter.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/Facebook
┗▶ Envia o emoji do Facebook.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/openmoji
┗▶ Envia o emoji do Openmoji.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emojimix 😉+🙂
┗▶ Cria um emoji misturado entre 😉 e 🙂.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emojimix2 😉+🙂
┗▶ Cria um emoji misturado entre 😉 e 🙂.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Toimg (MARCAR-FIGU)
┗▶ Converte a figura marcada para imagem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Togif (MARCAR-FIGU)
┗▶ Converte a figura marcada para gif.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Roubar (TEXT/TEXT)
┗▶ Mude a descrição da figurinha
╰╮
┏│
┏│✞͜͡▹ ${prefix}take (Figu com sua marca D'agua)
┗▶ Cria uma figura com a sua marca d'água.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rgtake (Resgistra sua Marca D'agua)
┗▶ Registra sua marca d'água para criar figuras.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rntake (Renomeia Sua Marca D'agua)
┗▶ Renomeia sua marca d'água registrada.
┏│
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤  [♨️]𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗝𝗢𝗚𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│ BAIXAR ELES: ${prefix}mediafire link
╰╮
┏│
┏│✞͜͡▹ ${prefix}minecraft
┏│✞͜͡▹ ${prefix}motox3m
┏│✞͜͡▹ ${prefix}zombitsunami
┏│✞͜͡▹ ${prefix}vector1
┏│✞͜͡▹ ${prefix}vector2
┏│✞͜͡▹ ${prefix}subway
┏│✞͜͡▹ ${prefix}jogo1
┏│✞͜͡▹ ${prefix}jogo2
┏│✞͜͡▹ ${prefix}jogo3
┏│✞͜͡▹ ${prefix}jogo4
┏│✞͜͡▹ ${prefix}jogo5
┏│✞͜͡▹ ${prefix}jogo6
┏│✞͜͡▹ ${prefix}jogo7
┏│✞͜͡▹ ${prefix}jogo8
┏│✞͜͡▹ ${prefix}jogo9
┏│✞͜͡▹ ${prefix}jogo10
┏│✞͜͡▹ ${prefix}jogo11
┏│✞͜͡▹ ${prefix}jogo12
┏│✞͜͡▹ ${prefix}jogo13
┏│✞͜͡▹ ${prefix}jogo14
┏│✞͜͡▹ ${prefix}jogo15
┏│✞͜͡▹ ${prefix}jogo16
┏│✞͜͡▹ ${prefix}jogo17
┏│✞͜͡▹ ${prefix}jogo19
┏│✞͜͡▹ ${prefix}jogo20
┏│✞͜͡▹ ${prefix}jogo21
┏│✞͜͡▹ ${prefix}jogo22
┏│✞͜͡▹ ${prefix}jogo23
┏│✞͜͡▹ ${prefix}jogo24
┏│✞͜͡▹ ${prefix}jogo25
┏│✞͜͡▹ ${prefix}jogo26
┏│✞͜͡▹ ${prefix}jogo27
┏│✞͜͡▹ ${prefix}jogo28
┏│✞͜͡▹ ${prefix}jogosamp
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤     [😈]𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪
┃╰══ ✞
╰╦══════════════════ ✞
│
┏│✞͜͡▹ 🔞${prefix}ahegao
┏│✞͜͡▹ 🔞${prefix}ass
┏│✞͜͡▹ 🔞${prefix}bdsm
┏│✞͜͡▹ 🔞${prefix}blowjob
┏│✞͜͡▹ 🔞${prefix}cuckold
┏│✞͜͡▹ 🔞${prefix}cum
┏│✞͜͡▹ 🔞${prefix}femdom
┏│✞͜͡▹ 🔞${prefix}foot
┏│✞͜͡▹ 🔞${prefix}gangbang
┏│✞͜͡▹ 🔞${prefix}glasses
┏│✞͜͡▹ 🔞${prefix}hentai
┏│✞͜͡▹ 🔞${prefix}hentai2
┏│✞͜͡▹ 🔞${prefix}jahy
┏│✞͜͡▹ 🔞${prefix}manga
┏│✞͜͡▹ 🔞${prefix}neko
┏│✞͜͡▹ 🔞${prefix}orgy
┏│✞͜͡▹ 🔞${prefix}panties
┏│✞͜͡▹ 🔞${prefix}pussy
┏│✞͜͡▹ 🔞${prefix}neko2
┏│✞͜͡▹ 🔞${prefix}tentacles
┏│✞͜͡▹ 🔞${prefix}thighs
┏│✞͜͡▹ 🔞${prefix}figurinhas+18 (quantidade)
┏│✞͜͡▹ 🔞${prefix}only1
┏│✞͜͡▹ 🔞${prefix}only2
┏│✞͜͡▹ 🔞${prefix}only3
┏│✞͜͡▹ 🔞${prefix}only4
┏│✞͜͡▹ 🔞${prefix}only5
┏│✞͜͡▹ 🔞${prefix}only6
┏│✞͜͡▹ 🔞${prefix}only7
┏│✞͜͡▹ 🔞${prefix}only8
┏│✞͜͡▹ 🔞${prefix}only9
┏│✞͜͡▹ 🔞${prefix}only10
┏│✞͜͡▹ 🔞${prefix}only11
┏│✞͜͡▹ 🔞${prefix}only12
┏│✞͜͡▹ 🔞${prefix}plaquinha (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha2 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha3 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha4 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha5 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha6 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha7 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha8 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha9 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha10 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha11 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}xvideos (nome/link)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}xnxx (nome/link)
┗▶ Crie uma plaquinha com seu nick
┏│
╰══════════┐

╭═══════════════════ ┐
╰╮  
╭┤    [💻]𝗢𝗨𝗧𝗥𝗢𝗦 𝗖𝗠𝗗'𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Gtts (LINGUAGEM + TEXTO)
┗▶ Converte o texto informado para áudio na linguagem selecionada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}reversetxt (texto)
┗▶ Inverte o texto fornecido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}enquete
┗▶ Cria uma enquete para votação.
╰╮
┏│
┏│✞͜͡▹ ${prefix}qrcode (texto)
┗▶ Gera um código QR a partir do texto fornecido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}lerqr (marca-imagem-QR)
┗▶ Lê o conteúdo de um código QR a partir de uma imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fonte (texto)
┗▶ Gere o texto fornecido para a fonte 
╰╮
┏│
┏│✞͜͡▹ ${prefix}audvizu (marca-audio)
┗▶ Converte um áudio, em visualização única.
╰╮
┏│
┏│✞͜͡▹ ${prefix}covidbr
┗▶ Exibe as estatísticas atuais da COVID-19 no Brasil.
╰╮
┏│
┏│✞͜͡▹ ${prefix}metadinha
┗▶ Gera uma metadinha aleatória.
╰╮
┏│
┏│✞͜͡▹ ${prefix}loli
┗▶ Envia uma imagem aleatória de loli
╰╮
┏│
┏│✞͜͡▹ ${prefix}gethtml
┗▶ Obtém o código HTML de uma página web.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tagme
┗▶ Marca o usuário
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tabela (LETRAS)
┗▶ Exibe tabela
╰╮
┏│
┏│✞͜͡▹ ${prefix}Conselhobiblico
┗▶ Fornece um conselho baseado em textos bíblicos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Simi (FALE-ALGO)
┗▶ Faz o bot responder com algo que você disser.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Perfil
┗▶ Exibe o perfil do usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Calcular 1 + 1
┗▶ Realiza o cálculo matemático solicitado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Traduzir pt/cat
┗▶ Traduz o texto entre os idiomas especificados.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fazernick (NICK)
┗▶ Cria nick com diversos estilos e fontes
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fazernick2 (NICK)
┗▶ Cria nick com diversos estilos e fontes
╰╮
┏│
┏│✞͜͡▹ ${prefix}sn (sim ou nao)
┗▶ Ele responde a pergunta se "sim ou não".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bot
┗▶ Bot Envia um áudio
╰╮
┏│
┏│✞͜͡▹ ${prefix}getbio
┗▶ Pega O recado de um usuário
╰╮
┏│
┏│✞͜͡▹ ${prefix}getperfil
┗▶ Pega a foto do perfil de um usuário
┏│
╰══════════┘

`;
};

exports.menu = menu;

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.


// ABAIXO E O MENU DA LISTA DE MENUS (BOTAO)
const menubotao = (prefix, NomeDoBot, dayy, jefftopcases, isPremium, H, D, tempo, adivinha, versão, botoes_, SITE_JEFF_APIS, isXbotOfc, sender) => {
  
// NÃO APAGUE ${   } apenas se souber oquê está fazendo caso ao contrário se não souber mexer, ira dar erros não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos.  
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭═══════════════════ ┐
┏│──BEM VINDO(A) AO MENU
┏│
┏│Bot: ${NomeDoBot}
┏│Versão: ${versão}
┏│Tipo: 「 ${isXbotOfc ? `𝙎𝙐𝘽 ${NomeDoBot}` : `${NomeDoBot} 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇`} 」
┏│Usuário: 「 @${sender.split("@")[0]} 」
┏│Usuario VIP?:「 ${isPremium ? "✅" : "❌"} 」
┏│Dispositivo: 「 ${adivinha} 」
┏│Dia:  「 ${dayy} 」
┏│Hora:  「 ${H} ${tempo} 」
┏│Data:  「 ${D} 」
┏│Insta Dono: bit.ly/insta_dono
┏│Apis: ${SITE_JEFF_APIS}
┏│Canal Updates: bit.ly/X-bot_Updates
┏│⤿✧✧✧✧✧
╰═══════════════════ ┘`;
};

exports.menubotao = menubotao;

// NÃO APAGUE ${   } apenas se souber oquê está fazendo caso ao contrário se não souber mexer, ira dar erros não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos.

const infotransmitir = (prefix, pushname) => {
return`
Olá ${pushname}, irei explicar como funciona os seguintes comando:

${prefix}rgtm

${prefix}tirardatm

${prefix}fazertm

${prefix}listatm

O comando rgtm, você entra no grupo ou privado de alguém que deseja que ele receba transmissão, digita ${prefix}rgtm

E caso queira tirar o grupo da transmissão, entra nele e digita 

${prefix}tirardatm ou se já saiu dele, procura o id dele no comando ${prefix}listatm

E caso queira fazer a transmissão para todos os grupos que foi registrado para transmissão, digita 

${prefix}fazertm e digita o que quer enviar para todos os grupos que foi registrado ou marque uma imagem já com legenda, ou envie uma imagem com legenda, ou documento, ou vídeo, ou texto, então é isso..
`;
};

exports.infotransmitir = infotransmitir;


const anotacao = (prefix) => {
return `

Olá. Se você está lendo isso, provavelmente está curioso sobre o comando anotação. 

Existe os seguintes comando:

1 ${prefix}anotações

2 ${prefix}anotar

3 ${prefix}tirar_nota

4 ${prefix}nota titulo


O primeiro ele mostra todas as anotações do grupo, criada. 

O segundo, ele é usado para criar a nota, tipo um bloco de notas, exemplo: ${prefix}anotar ABC|ABC são 3 letras do alfabeto, utilizada bastante

Isso foi um exemplo, mas pode ser utilizado da fórma que quiser, mas lembre que antes do | é o título, depois é a anotação.

Ja o terceiro, é pra tirar a nota, Exemplo como expliquei, ${prefix}tirar_nota ABC 

Com isso a anotação que estava criada foi apagada. 

Já o terceiro, ele é pra buscar a anotação que deseja, pelo título, exemplo: ${prefix}nota ABC

É isso... 

Boa sorte. 
`;
};

exports.anotacao = anotacao;

// MENU DE ADMINISTRADORES 

const adms = (prefix, sender) => { 
 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

	return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭═══════════════════ ┐
╰╮  
╭┤    [🥷]𝗠𝗘𝗡𝗨 𝗗𝗘 𝗔𝗗𝗠
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╞───────────────┘
╰╮
┏│
┏│✞͜͡▹ ${prefix}ativacoes_adm
┗▶ Mostra as ativações e proteções de grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}so_adm
┗▶ Restringe o uso do bot apenas para administradores usar.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Delete
┗▶ Apaga uma mensagem específica respondida.
╰╮
┏│
┏│✞͜͡▹ ${prefix}advertir
┗▶ Dá uma advertência a um membro; ao atingir 3, o bot bane.
╰╮
┏│
┏│✞͜͡▹ ${prefix}deladvertir
┗▶ Remove as advertências de um usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Mutar
┗▶ Impede um usuário de enviar mensagens no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Desmutar
┗▶ Libera o envio de mensagens para um usuário mutado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}abrir-fechar
┗▶ Alterna entre abrir ou fechar o grupo por um tempo específico.
╰╮
┏│
┏│✞͜͡▹ ${prefix}abrirgp
┗▶ Abre o grupo para mensagens por tempo determinado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fechargp
┗▶ Fecha o grupo para mensagens por tempo determinado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}listaddd
┗▶ Mostra a lista de membros com o ddd informado
╰╮
┏│
┏│✞͜͡▹ ${prefix}listban
┗▶ Mostra a lista de usuários banidos pelo bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}listanegra
┗▶ Adiciona o número à lista negra do grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}tirardalista
┗▶ Remove o número da lista negra do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}listanegraG (NÚMERO)
┗▶ Adiciona número à lista negra global.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tirardalistaG (NÚMERO)
┗▶ Remove número da lista negra global.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Kick [@] (pra-remover)
┗▶ Remove o membro do grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ban (responder-mensagem)
┗▶ Bane o usuário da mensagem respondida.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Promover [@] (Ser-ADM)
┗▶ Promove o membro marcado a administrador.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rebaixar [@] (rebaixar-adm)
┗▶ Rebaixa o administrador marcado a membro comum.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Totag (menciona-algo)
┗▶ Menciona todos com a mensagem personalizada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Grupo f/a
┗▶ Altera o grupo entre "fechado" e "aberto".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Status
┗▶ Mostra o status das ativações no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Limpar (texto-invisível-gp)
┗▶ Limpa o chat com texto invisível.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Atividades (DO-GRUPO)
┗▶ Mostra as atividades dos membros
╰╮
┏│
┏│✞͜͡▹ ${prefix}Linkgp
┗▶ Envia o link do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Grupoinfo
┗▶ Mostra informações detalhadas do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Hidetag (txt) (marcação)
┗▶ Envia uma mensagem com menção oculta a todos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Marcar (marca tds do gp)
┗▶ Menciona todos os membros do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Marcar2 (Marca-tds-Wa.me/)
┗▶ Menciona todos com link direto para o WhatsApp.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Anagrama 1 / 0
┗▶ Ativa ou desativa o jogo de anagrama no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Antipalavra 1 / 0
┗▶ Ativa ou desativa o anti palavras
╰╮
┏│
┏│✞͜͡▹ ${prefix}Descgp (TXT)
┗▶ Altera a descrição do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Nomegp (Nome)
┗▶ Altera o nome do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Criartabela (ESCREVA-ALGO)
┗▶ Cria uma tabela estilizada com o texto fornecido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tabelagp
┗▶ Exibe uma tabela personalizada do grupo.
╰╮
┏│✞͜͡▹ ${prefix}Resetaativo
┗▶ Reseta a contagem de mensagens e parentes do grupo.
╭┤
┃╰══ ✞
╰╦══════════════════ ✞
╭┤
│ COMANDOS SEM PREFIXOS
│ (SOMENTE COM ${prefix}autoadm ATIVO)
╞══════════┘
│
┏│✞͜͡▹ Banir (RESPONDER MSG/MARCAR)  
┗▶ Bane o usuário mencionado ou @  
╰╮
┏│
┏│✞͜͡▹ Abrir (abrir-grupo)  
┗▶ Abre o grupo para todos os membros enviarem mensagens.  
╰╮
┏│
┏│✞͜͡▹ Fechar (fechar-grupo)  
┗▶ Fecha o grupo permitindo apenas admins falarem.  
╰╮
┏│
┏│✞͜͡▹ Apaga (apaga mensagem)  
┗▶ Apaga mensagem 
╰╮
┏│
┏│✞͜͡▹ Pode banir bot (RESPONDER-MSG/MARCAR)  
┗▶ bane o usuário do grupo
╰╮
┏│
┏│✞͜͡▹ Promover (promover adm)  
┗▶ Promove o membro marcado a administrador.  
╰╮
┏│
┏│✞͜͡▹ Rebaixar (remover adm)  
┗▶ Remove o cargo de administrador do usuário marcado.  
╰╮
┏│
┏│✞͜͡▹ Aceitar (aceita as solicitações do grupo)  
┗▶ Aprova os pedidos de entrada no grupo.  
╰╮
┏│
┏│✞͜͡▹ Recusar (recusa as solicitações do grupo)  
┗▶ Rejeita os pedidos de entrada no grupo.
┏│
╰══════════┘
`;
};

exports.adms = adms;

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 


const infoaluguel = (prefix, pushname) => {
return`
Olá ${pushname} Irei explicar como utilizar o comando 
   
        MODO ALUGUEL

EXPLICAÇÃO: 

Esse modo aluguel e automático, com pix automático, tempo sair do grupo automático 
basta configurar seu token do mercado pago no bot para funcionar!
caso nao saiba configurar o pix automático para poder ultilizar, lojavip, lojaaluguel 
digite: ${prefix}infotokenpix


para ativar o modo aluguel 

comando: ${prefix}modoaluguel 1



___________________________________

      MODO ALUGUEL V2
      

Para ativar o modo aluguel2

comando: ${prefix}modoaluguel2 1           
${prefix}rg_aluguel

O exemplo é: ${prefix}rg_aluguel 01/01|coloca o número do dono aqui

Você coloca o mês que vai expirar, ae ele vai enviar uma mensagem no seu privado no dia que expirar, e vai renovar sozinho pro próximo mês, na mesma data, só não coloque pro mês 12, pois senão ele vai renovar pro mês 13 kkkk, mas só tirar o registro do aluguel..

Comando de tirar um aluguel do registro..

${prefix}rm_aluguel iddogrupo 

Em iddogrupo você tem que pegar o id do grupo, que está registrado o aluguel, use o comando ${prefix}iddogrupo 

E contem também o comando ${prefix}lista_aluguel2 que visualiza todos aluguel já registrado... 

Lá você pode pegar o id do grupo também, pra tirar do registro kkkk

Boa sorte..
`;
};

exports.infoaluguel = infoaluguel;

// MENU DE DONO

const menudono = (prefix, sender) => {
	
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
	
╭═══════════════════ ┐
╰╮  
╭┤   [🧙‍♂️]𝗠𝗘𝗡𝗨 𝗗𝗘 𝗗𝗢𝗡𝗢
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╭┤
┃╰══ ✞
╰╦══════════════════ ✞┐
│ Config: ${prefix}Configurar-bot
╞───────────────┘
╰╮
┏│
┏│✞͜͡▹ ${prefix}ativacoes_dono
┗▶ Mostra as ativações de dono
╰╮
┏│
┏│✞͜͡▹ ${prefix}lista_donos_gp
┗▶ Exibe os permitidos a alteração de cargo admin
╰╮
┏│
┏│✞͜͡▹ ${prefix}add_dono_gp
┗▶ Adiciona um novo admin permitido a alterar cargo admin
╰╮
┏│
┏│✞͜͡▹ ${prefix}del_dono_gp
┗▶ Remove um adimin permitido a alterar cargo admin
╰╮
┏│
┏│✞͜͡▹ ${prefix}listaaudios
┗▶ Lista todos os áudios salvos no bot para auto resposta
╰╮
┏│
┏│✞͜͡▹ ${prefix}addaudio
┗▶ Adiciona um novo áudio ao bot para auto resposta
╰╮
┏│
┏│✞͜͡▹ ${prefix}delaudio
┗▶ Remove um áudio salvo no bot. do auto resposta
╰╮
┏│
┏│✞͜͡▹ ${prefix}listastickers
┗▶ Lista todos os stickers salvos no bot para auto resposta
╰╮
┏│
┏│✞͜͡▹ ${prefix}addsticker
┗▶ Adiciona um novo sticker no bot para auto resposta
╰╮
┏│
┏│✞͜͡▹ ${prefix}delsticker
┗▶ Remove um sticker salvos no bot do auto resposta
╰╮
┏│
┏│✞͜͡▹ ${prefix}anotacao
┗▶ Cria ou consulta anotações rápidas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}enquete
┗▶ Cria uma enquete no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}modopuxadas
┗▶ Ativa modo de puxadas no grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}modoaluguel
┗▶ Ativa o modo aluguel via pagamento automático.
╰╮
┏│
┏│✞͜͡▹ ${prefix}buscarbc (RPG)
┗▶ Busca saldo bancário no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}addpix (RPG)
┗▶ Adiciona saldo Pix no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}setpix (RPG)
┗▶ Puxa o pix de alguém no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}delpix (RPG)
┗▶ Remove saldo Pix no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}zerarbc (RPG)
┗▶ Zera o saldo bancário no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gerargf (RPG)
┗▶ Gera um gift card no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}delgf (RPG)
┗▶ Remove um Gift card no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}modoaluguel2
┗▶ Ativa o modo aluguel alternativo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}listacmdprem
┗▶ Lista comandos premium.
╰╮
┏│
┏│✞͜͡▹ ${prefix}addcmdprem
┗▶ Adiciona comando como premium.
╰╮
┏│
┏│✞͜͡▹ ${prefix}delcmdprem
┗▶ Remove comando premium.
╰╮
┏│
┏│✞͜͡▹ ${prefix}apijeff
┗▶ Consulta API do Jeff.
╰╮
┏│
┏│✞͜͡▹ ${prefix}addcase
┗▶ Adiciona nova case ao bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}delcase
┗▶ Remove uma case existente.
╰╮
┏│
┏│✞͜͡▹ ${prefix}antipv (block)
┗▶ Ativa anti-PV bloqueando quem chamar no privado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}antipv2 (flood)
┗▶ Ativa anti-PV mandando flood para quem chamar no privado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}antipv3 (ignora)
┗▶ Ativa anti-PV ignorando mensagens no privado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}diz
┗▶ O bot repete o que você disser.
╰╮
┏│
┏│✞͜͡▹ ${prefix}getcase
┗▶ Pega uma case existente no bot 
╰╮
┏│
┏│✞͜͡▹ ${prefix}getcase2
┗▶ Pega uma case existente no bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}listagp
┗▶ Lista todos os grupos que o bot participa.
╰╮
┏│
┏│✞͜͡▹ ${prefix}limparqr
┗▶ Limpa sessão da conexão do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}sairdogp
┗▶ Faz o bot sair em um grupo específico
╰╮
┏│
┏│✞͜͡▹ ${prefix}sairgp
┗▶ Faz o bot sair fo grupo atual
╰╮
┏│
┏│✞͜͡▹ ${prefix}limitec_global
┗▶ Define o números de caractere global
╰╮
┏│
┏│✞͜͡▹ ${prefix}nuke
┗▶ Remove todos do grupo (cuidado)
╰╮
┏│
┏│✞͜͡▹ ${prefix}desbanwa
┗▶ desbloqueia usuario no whatsapp do bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}block
┗▶ bloqueia usuario no whatsapp do bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}desban
┗▶ desbloqueia usuairo banido permanente do sistema de AntiSpam 
╰╮
┏│
┏│✞͜͡▹ ${prefix}menu-bot
┗▶ Substituição do menus.js
╰╮
┏│
┏│✞͜͡▹ ${prefix}index-bot
┗▶ Substituição do Index.js
╰╮
┏│
┏│✞͜͡▹ ${prefix}rg_aluguel (aviso-msg-pv)
┗▶ Configura aviso de aluguel no PV.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tempo-fgp
┗▶ Fecha o grupo em um tempo determinado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fakechat2 (real)
┗▶ Cria um chat falso realista.
╰╮
┏│
┏│✞͜͡▹ ${prefix}forceop (mandar-msg-gp-fechado)
┗▶ Força envio de mensagem em grupo fechado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figuid
┗▶ Pega o ID do sticker.
╰╮
┏│
┏│✞͜͡▹ ${prefix}transcre
┗▶ Transcreve áudios para texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}crashgp
┗▶ Comando para travar grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}matargp
┗▶ Mata o grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}gold
┗▶ Mineração de gold
╰╮
┏│
┏│✞͜͡▹ ${prefix}sistemgold
┗▶ Ativa o sistem gold
╰╮
┏│
┏│✞͜͡▹ ${prefix}entrar
┗▶ Entra em um grupo via link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bangp
┗▶ Bane o grupo pra ninguém usar o bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}jeff (rbale)
┗▶ Comando especial Jeff (RBale).
╰╮
┏│
┏│✞͜͡▹ ${prefix}Unbangp
┗▶ Desbane o grupo pra todos usar o bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fotomenu (MARCAR-IMG)
┗▶ Define imagem de fundo do menu do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fundopuxadas (MARCAR-IMG)
┗▶ Define fundo do menu de puxadas
╰╮
┏│
┏│✞͜͡▹ ${prefix}listacomandosG
┗▶ Lista comandos bloqueados global (todos)
╰╮
┏│
┏│✞͜͡▹ ${prefix}Blockcmd (cmd)
┗▶ Bloqueia o uso de um comando no grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}Unblockcmd (cmd)
┗▶ Desbloqueia o uso de um comando no grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}blockcmdG (cmd)
┗▶ Bloqueia comando globalmente.
╰╮
┏│
┏│✞͜͡▹ ${prefix}unblockcmdG (cmd)
┗▶ Desbloqueia comando globalmente.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Legenda_estrangeiro (msg)
┗▶ Cria legenda para mensagem estrangeira.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Legendabv (oq qr)
┗▶ Define legenda de boas-vindas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Legendasaiu (oq qr)
┗▶ Define legenda de saída.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Legendasaiu2 (oq qr)
┗▶ Defina legenda de saida 2°
╰╮
┏│
┏│✞͜͡▹ ${prefix}Legendabv2 (oq qr)
┗▶ Segunda legenda de boas-vindas 2°
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fundobemvindo (marcar-img)
┗▶ Define fundo de boas-vindas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fundosaiu (marcar-img)
┗▶ Define fundo de saída.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Serpremium
┗▶ O dono se torna Premium no bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}Antipalavrão 1 / 0
┗▶ Ativa ou desativa anti-palavrão no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Antiligar 1 / 0
┗▶ Bloquear quem fizer ligações para o bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Addpalavra (palavrão)
┗▶ Adiciona palavra proibida.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Delpalavra (palavrão)
┗▶ Remove palavra da lista de proibidas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ativo
┗▶ Define seu status de saida como ativo(a) quando te marcarem
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ausente (fale-oq-faz)
┗▶ Defina seu status de saida como ausente quando te marcarem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Delpremium @(marca)
┗▶ Remove premium de alguém.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Addpremium @(marca)
┗▶ Dá premium para alguém.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Clonar [@] (rouba ft de prf)
┗▶ Clona foto de perfil de alguém.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fotobot (img)
┗▶ Troca foto de perfil do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}nomewpp (nome-wpp)
┗▶ Troca nome do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}descbot (muda recado do bot)
┗▶ Muda a descrição/status do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Descriçãogp (digite-algo)
┗▶ Muda descrição do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}addrent
┗▶ Adiciona novo aluguel.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tirarrent
┗▶ Remove aluguel ativo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}delrent
┗▶ Deleta dados de aluguel.
╰╮
┏│
┏│✞͜͡▹ ${prefix}lista-aluguel
┗▶ Lista grupos alugados.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cortesia24
┗▶ Dá cortesia de 24h de aluguel.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cortesia48
┗▶ Dá cortesia de 48h de aluguel.
╰╮
┏│
┏│✞͜͡▹ ${prefix}calendario
┗▶ Mostra calendário de expiração aluguel
╰╮
┏│
┏│✞͜͡▹ ${prefix}keys
┗▶ Gerencia keys de ativação de aluguel
╰╮
┏│
┏│✞͜͡▹ ${prefix}addmoeda
┗▶ Adiciona moedas virtuais
╰╮
┏│
┏│✞͜͡▹ ${prefix}gerarkeyg
┗▶ Gera uma key de ativação do aluguel
╰╮
┏│
┏│✞͜͡▹ ${prefix}desbloq
┗▶ Desbloqueia usuários (wpp)
╰╮
┏│
┏│✞͜͡▹ ${prefix}Block [@]
┗▶ Bloqueia usuário de usar comandos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Unblock [@]
┗▶ Desbloqueia usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Setprefix (prefixo-novo)
┗▶ Troca o prefixo dos comandos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
┗▶ Faz transmissão para todos os membros.
╰╮
┏│
┏│✞͜͡▹ ${prefix}limpar_mortos-cnt
┗▶ Limpa contatos removidos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}resetaativog
┗▶ Reseta a contagem de mensagens e patentes de todos os grupos.
╰╮
┏│
╰══════════┘
`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos.  
  
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭═══════════════════ ┐
╰╮  
╭┤   [🌆]𝗠𝗘𝗡𝗨 𝗗𝗘 𝗟𝗢𝗚𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╰══════════┐
╭──────────┴─┐
│ Logos De 1 Texto
╰╮───────────
┏│
│✞͜͡▹ ${prefix}Txtquadrinhos (txt) 
┗▶ Cria uma logo no estilo quadrinhos.
┏│
│✞͜͡▹ ${prefix}HackNeon (txt) 
┗▶ Gera um logo de hack neon.
┏│
│✞͜͡▹ ${prefix}EquipeMascote (txt) 
┗▶ Cria uma logo com mascote de equipe.
┏│
│✞͜͡▹ ${prefix}FFavatar (txt) 
┗▶ Gera um avatar estilo Free Fire.
┏│
│✞͜͡▹ ${prefix}Gizquadro (txt) 
┗▶ gera uma logo em um quadro de giz.
┏│
│✞͜͡▹ ${prefix}Angelglx (txt) 
┗▶ Cria um efeito de anjo galáxia no texto.
┏│
│✞͜͡▹ ${prefix}WingEffect (txt) 
┗▶ Gera texto com efeito de asas.
┏│
│✞͜͡▹ ${prefix}Angelwing (txt) 
┗▶ Cria texto com asas de anjo.
┏│
│✞͜͡▹ ${prefix}Blackpink (txt) 
┗▶ Estiliza o texto no tema Blackpink.
┏│
│✞͜͡▹ ${prefix}Girlmascote (txt) 
┗▶ Cria logo com mascote feminina.
┏│
│✞͜͡▹ ${prefix}Mascotegame (txt) 
┗▶ Cria logo de mascote gamer.
┏│
│✞͜͡▹ ${prefix}Fpsmascote (txt) 
┗▶ Gera logo com tema FPS.
┏│
│✞͜͡▹ ${prefix}Logogame (txt) 
┗▶ Cria um logo de jogo personalizado.
┏│
│✞͜͡▹ ${prefix}Glitch2 (txt) 
┗▶ Adiciona efeito glitch no texto.
┏│
│✞͜͡▹ ${prefix}3DGold (txt)
┗▶ Gera texto em ouro 3D.
┏│
│✞͜͡▹ ${prefix}Placaloli (txt)
┗▶ Cria uma placa estilo loli.
┏│
│✞͜͡▹ ${prefix}Phadow (txt)
┗▶ Efeito de sombra estilosa no texto.
┏│
│✞͜͡▹ ${prefix}Efeitoneon (txt)
┗▶ Aplica efeito neon no texto.
┏│
│✞͜͡▹ ${prefix}Cemiterio (txt)
┗▶ Texto com tema de cemitério.
┏│
│✞͜͡▹ ${prefix}Metalgold (txt)
┗▶ Estiliza o texto em ouro metálico.
┏│
│✞͜͡▹ ${prefix}Narutologo (txt)
┗▶ Cria logo inspirado no Naruto.
┏│
│✞͜͡▹ ${prefix}Fire (txt)
┗▶ Texto com efeito de fogo.
┏│
│✞͜͡▹ ${prefix}Romantic (txt)
┗▶ Cria um texto romântico.
┏│
│✞͜͡▹ ${prefix}Smoke (txt)
┗▶ Aplica efeito de fumaça no texto.
┏│
│✞͜͡▹ ${prefix}Papel (txt)
┗▶ Escreve em efeito de papel.
┏│
│✞͜͡▹ ${prefix}Lovemsg (txt)
┗▶ Gera uma mensagem de amor.
┏│
│✞͜͡▹ ${prefix}Lovemsg2 (txt)
┗▶ Cria outra variação de mensagem amorosa.
┏│
│✞͜͡▹ ${prefix}Lovemsg3 (txt)
┗▶ Cria uma terceira versão de mensagem de amor.
┏│
│✞͜͡▹ ${prefix}Coffecup (txt)
┗▶ Texto em caneca de café.
┏│
│✞͜͡▹ ${prefix}Coffecup2 (txt)
┗▶ Outra versão de texto na caneca.
┏│
│✞͜͡▹ ${prefix}Cup (txt)
┗▶ Logo em copo estilizado.
┏│
│✞͜͡▹ ${prefix}Florwooden (txt)
┗▶ Texto em madeira com flores.
┏│
│✞͜͡▹ ${prefix}Lobometal (txt)
┗▶ Logo de lobo metálico.
┏│
│✞͜͡▹ ${prefix}Harryp (txt)
┗▶ Logo estilo Harry Potter.
┏│
│✞͜͡▹ ${prefix}Txtborboleta (txt)
┗▶ Texto com efeito de borboletas.
┏│
│✞͜͡▹ ${prefix}Madeira (txt)
┗▶ Texto em estilo madeira.
┏│
│✞͜͡▹ ${prefix}Pornhub (txt)
┗▶ Cria logo inspirado no Pornhub.
┏│
│✞͜͡▹ ${prefix}Escudo (txt)
┗▶ Cria texto dentro de um escudo.
┏│
│✞͜͡▹ ${prefix}Transformer (txt)
┗▶ Logo inspirado em Transformers.
┏│
│✞͜͡▹ ${prefix}America (txt)
┗▶ Logo com tema americano.
┏│
│✞͜͡▹ ${prefix}Demongreen (txt)
┗▶ Estilo demônio verde.
┏│
│✞͜͡▹ ${prefix}Wetglass (txt)    
┗▶ Efeito vidro molhado no texto.
┏│
│✞͜͡▹ ${prefix}Toxic (txt)     
┗▶ Logo com tema tóxico.
┏│
│✞͜͡▹ ${prefix}Neon3 (txt)   
┗▶ Terceira versão de neon.
┏│
│✞͜͡▹ ${prefix}Neondevil (txt) 
┗▶ Texto neon com tema demoníaco.
┏│
│✞͜͡▹ ${prefix}Neongreen (txt)
┗▶ Neon verde brilhante.
┏│
│✞͜͡▹ ${prefix}Lava (txt)
┗▶ Texto com efeito de lava.
┏│
│✞͜͡▹ ${prefix}Halloween (txt)
┗▶ Estilo especial de Halloween.
┏│
│✞͜͡▹ ${prefix}DemonFire (txt)
┗▶ Logo fogo demoníaco.
┏│
│✞͜͡▹ ${prefix}DemonGreen (txt)
┗▶ Demônio verde neon.
┏│
│✞͜͡▹ ${prefix}Thunderv2 (txt)
┗▶ Segunda versão de logo trovão.
┏│
│✞͜͡▹ ${prefix}Thunder (txt)
┗▶ Efeito de trovão no texto.
┏│
│✞͜͡▹ ${prefix}Colaq (txt)
┗▶ Estilo logo Coca-Cola.
┏│
│✞͜͡▹ ${prefix}Luxury (txt)
┗▶ Texto em estilo de luxo.
┏│
│✞͜͡▹ ${prefix}Berry (txt)
┗▶ Estilo frutas vermelhas.
┏│
│✞͜͡▹ ${prefix}Matrix (txt)
┗▶ Logo no estilo Matrix.
┏│
│✞͜͡▹ ${prefix}Horror (txt)
┗▶ Texto com efeito de horror.
┏│
│✞͜͡▹ ${prefix}Nuvem (txt)
┗▶ Escreve com efeito de nuvem.
┏│
│✞͜͡▹ ${prefix}Neon (txt)
┗▶ Efeito neon no texto.
┏│
│✞͜͡▹ ${prefix}Neon1 (txt)
┗▶ Primeira versão de neon.
┏│
│✞͜͡▹ ${prefix}Neon2 (txt)
┗▶ Segunda versão de neon.
┏│
│✞͜͡▹ ${prefix}Neon3d (txt)
┗▶ Neon 3D estilizado.
┏│
│✞͜͡▹ ${prefix}NeonGreen (txt)
┗▶ Neon verde fosforescente.
┏│
│✞͜͡▹ ${prefix}Neve (txt)
┗▶ Texto com efeito de neve.
┏│
│✞͜͡▹ ${prefix}Areia (txt)
┗▶ Texto estilo areia.
┏│
│✞͜͡▹ ${prefix}Vidro (txt)
┗▶ Efeito de vidro quebrado.
┏│
│✞͜͡▹ ${prefix}Style (txt)
┗▶ Estilo de texto personalizado.
┏│
│✞͜͡▹ ${prefix}Pink (txt)
┗▶ Tema rosa pink.
┏│
│✞͜͡▹ ${prefix}Carbon (txt)
┗▶ Efeito fibra de carbono.
┏│
│✞͜͡▹ ${prefix}Tetalblue (txt)
┗▶ Estilo azul metálico.
┏│
│✞͜͡▹ ${prefix}Jeans (txt)
┗▶ Estilo jeans no texto.
┏│
│✞͜͡▹ ${prefix}Ossos (txt)
┗▶ Efeito de ossos no texto.
┏│
│✞͜͡▹ ${prefix}Asfalto (txt)
┗▶ Estilo asfalto rachado.
┏│
│✞͜͡▹ ${prefix}Natal (txt)
┗▶ Efeito natalino no texto.
┏│
│✞͜͡▹ ${prefix}Jokerlogo (txt)
┗▶ Logo inspirado no Coringa.
┏│
│✞͜͡▹ ${prefix}Blood (txt)
┗▶ Efeito de sangue.
┏│
│✞͜͡▹ ${prefix}Break (txt)
┗▶ Texto quebrado.
┏│
│✞͜͡▹ ${prefix}Fiction (txt)
┗▶ Estilo de ficção científica.
┏│
│✞͜͡▹ ${prefix}3dstone (txt)
┗▶ Texto em pedra 3D.
┏│
│✞͜͡▹ ${prefix}Lapis (txt)
┗▶ Texto estilo lápis.
┏│
│✞͜͡▹ ${prefix}Gelo (txt)
┗▶ Texto com efeito de gelo.
┏│
│✞͜͡▹ ${prefix}Rainbow (txt)
┗▶ Efeito arco-íris no texto.
┏│
│✞͜͡▹ ${prefix}Metalfire (txt)
┗▶ Fogo metálico no texto.
┏│
╰══════════┐
╭──────────┴─┐
│ Logos De 2 Texto
╰╮───────────
┏│✞͜͡▹ ${prefix}Comporn (txt/txt)
┗▶ Cria uma imagem de texto estilizado usando o efeito "Comporn".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Glitch (txt/txt)
┗▶ Gera uma arte de texto com efeito "Glitch" digital.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Glitch3 (txt/txt)
┗▶ Produz um texto gráfico com um terceiro estilo de "Glitch".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Grafity (txt-txt)
┗▶ Cria um texto com estilo grafite de rua.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Space (txt/txt)
┗▶ Gera um texto com tema espacial e galáxias.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Marvel (txt/txt)
┗▶ Cria um texto inspirado no estilo dos filmes da Marvel.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Stone (txt/txt)
┗▶ Gera um texto com efeito de pedra esculpida.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Steel (txt/txt)
┗▶ Produz um texto com visual metálico de aço.
┏│
│
╰══════════┘
`;
};

exports.menulogos = menulogos;

// MENU DE ALTERAR ÁUDIOS E VÍDEOS

const alteradores = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return`
╭═══════════════════ ┐
╰╮   [🌆]𝗔𝗟𝗧𝗘𝗥𝗔𝗗𝗢𝗥𝗘𝗦
╭┤     𝗔𝗨𝗗𝗜𝗢 / 𝗩𝗜𝗗𝗘𝗢
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╰══════════┐
╭──────────┴─┐
│ Alterar Videos
╰╮───────────
┏│✞͜͡▹ ${prefix}Videolento (marca)
┗▶ Deixa o vídeo marcado em câmera lenta.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Videorapido (marca)
┗▶ Acelera o vídeo marcado, deixando ele mais rápido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Videocontrario (marca)
┗▶ Reverte o vídeo marcado, fazendo ele rodar ao contrário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tomp3 (convert video em audio)
┗▶ Converte o vídeo enviado ou marcado em um arquivo de áudio (MP3).
┏│
╰══════════┐
╭──────────┴─┐
│ Alterar Audios
╰╮───────────
╰╮
┏│
┏│✞͜͡▹ ${prefix}Audiolento (marca)
┗▶ Deixa o áudio marcado em velocidade mais lenta.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Audiorapido (marca)
┗▶ Aumenta a velocidade do áudio marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Grave (marca)
┗▶ Deixa o áudio com voz mais grossa (efeito grave).
╰╮
┏│
┏│✞͜͡▹ ${prefix}reverse (marca)
┗▶ Reverte o áudio marcado, tocando-o de trás para frente.
╰╮
┏│
┏│✞͜͡▹ ${prefix}vibrato (marca)
┗▶ Aplica um efeito de vibrato no áudio (voz tremida).
╰╮
┏│
┏│✞͜͡▹ ${prefix}eco (marca)
┗▶ Adiciona efeito de eco no áudio marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}alien (marca)
┗▶ Transforma a voz do áudio em estilo "alienígena".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Grave2 (marca)
┗▶ Efeito grave ainda mais pesado no áudio.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Esquilo (marca)
┗▶ Deixa a voz fina e rápida, estilo esquilo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Estourar (marca)
┗▶ Aumenta muito o volume, deixando o áudio "estourado".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bass (marca)
┗▶ Adiciona um grave potente no áudio.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bass2 (marca)
┗▶ Outra variação de grave forte para o áudio.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Vozmenino (marca)
┗▶ Deixa a voz no áudio com efeito de criança/menino.
╰╮
┏│
┏│✞͜͡▹ ${prefix}slowed (marca)
┗▶ Diminui a velocidade do áudio (efeito slowed).
╰╮
┏│
┏│✞͜͡▹ ${prefix}reverb (marca)
┗▶ Adiciona um efeito de reverberação no áudio.
╰╮
┏│
┏│✞͜͡▹ ${prefix}reverb + slowed (marca)
┗▶ Aplica efeito de reverberação e depois deixa o áudio mais lento.
╰╮
┏│
┏│✞͜͡▹ ${prefix}slowed + reverb (marca)
┗▶ Deixa o áudio mais lento primeiro e depois aplica reverberação.
┏│
╰══════════┘
`;
};

exports.alteradores = alteradores;

// MENU RPG DA SABCITY

const rpgmenu = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `
╭╭═══════════════════ ┐
╰╮                       ᴿᴾᴳ
╭┤           [🌇]𝗕𝗢𝗧 𝗖𝗜𝗧𝗬
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╰══════════┐
┏│
┏│✞͜͡▹ ${prefix}Lojadegalos (Loja de RPG sobre galos)
┗▶ Loja de cavalos (Loja de RPG sobre cavalos)
╰╮
┏│
┏│✞͜͡▹ ${prefix}Lojadegalos (Loja de RPG sobre galos)
┗▶ Todas lojas do RPG
╰╮
┏│
┏│✞͜͡▹ ${prefix}Estabulo (Informações sobre seus cavalos)
┗▶ Exibe detalhes sobre seus cavalos no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Lojadegalos (Loja de RPG sobre galos)
┗▶ Loja de itens e recursos relacionados aos galos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Galos (Informações sobre seus galos)
┗▶ Exibe informações sobre seus galos no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Galinheiro (Informações sobre suas galinhas)
┗▶ Exibe informações sobre suas galinhas no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Cruzargg (Cruzar, ou seja, você já sabe)
┗▶ Realiza o cruzamento entre galos ou cavalos, dependendo do contexto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Dadoapostado (dado/valor da aposta)
┗▶ Aposte um valor em um dado e tente a sorte!
╰╮
┏│
┏│✞͜͡▹ ${prefix}Caracoroa (lado/valor da aposta)
┗▶ Faça uma aposta entre cara ou coroa para testar sua sorte.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Modobotrpg (1/0) - Ativar recurso no grupo.
┗▶ Ativa ou desativa o modo de RPG automatizado no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rgbotcity (Nome) - Funciona somente com o modo ativo.
┗▶ Registra seu nome no Bot City, funciona somente se o modo estiver ativado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Sairbotcity (Apagar seus registros) - Funciona somente com o modo ativo.
┗▶ Apaga todos os registros relacionados à Bot City do seu usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rpglistgp (Lista de registrados na Bot City no grupo)
┗▶ Mostra a lista de todos os participantes registrados na Bot City.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Meubotcity (Suas informações)
┗▶ Exibe suas informações e progresso no Bot City.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minhacarteira (Informações Bancárias)
┗▶ Mostra o saldo e detalhes bancários do seu personagem no jogo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankbotcity (Os 10 mais ricos do Bot City)
┗▶ Exibe o ranking dos 10 jogadores mais ricos do Bot City.
╰╮
┏│
┏│✞͜͡▹ ${prefix}listacodigos (Lista de Códigos GiftCards)
┗▶ Mostra todos os códigos de GiftCards disponíveis para resgate.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Resgatargf (code)
┗▶ Resgata um código de GiftCard, fornecendo o código correto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Trocarbanco
┗▶ Permite trocar a conta bancária registrada no Bot City.
╰╮
┏│
┏│✞͜͡▹ ${prefix}trocarnome
┗▶ Altera o nome registrado na Bot City.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fazerpix (número/valor)
┗▶ Realiza um pagamento via Pix para outro jogador.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Chavepix (@marcar o usuário)
┗▶ Exibe a chave Pix do jogador marcado para realizar transferências.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Meupix (Sua chave pix na BotCity)
┗▶ Mostra sua chave Pix registrada na BotCity.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Cassino (valor da aposta)
┗▶ Aposta no cassino, tenta a sorte para ganhar prêmios.
╰╮
┏│
┏│✞͜͡▹ ${prefix}1xbcbets (valor da aposta)
┗▶ Realiza apostas esportivas dentro do Bot City.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Assaltar (@marcar)
┗▶ Tente assaltar o jogador marcado no RPG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minerar
┗▶ Comece a minerar e ganhar recursos para seu personagem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Retirar (Caso você seja preso pelo comando assaltar)
┗▶ Retire-se de uma prisão caso tenha sido preso após um assalto.
┏│
┃╰══ ✞
╰═══════════════════ ✞`
}

exports.rpgmenu = rpgmenu;

// MENU PREMIUM 

const menuprem = (prefix, sender, cmdsp) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `
╭═══════════════════ ┐
╰╮   
╭┤   [🎗]𝗠𝗘𝗡𝗨 𝗣𝗥𝗘𝗠𝗜𝗨𝗠
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╰══════════┐
╭═══════════════════ ┐
╰╮ _𝙴𝚜𝚝𝚎 𝚎́ 𝚘 𝙼𝚎𝚗𝚞 𝙴𝚡𝚌𝚕𝚞𝚜𝚒𝚟𝚘 𝙿𝚊𝚛𝚊 
  │𝚞sua𝚛𝚒𝚘𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖_
  │ 𝗖𝗼𝗺𝗽𝗿𝗮𝗿:  ${prefix}lojavip
╭┤
┃╰══ ✞
╰╦══════════════════ ✞
╭──────────┴─┐
${cmdsP.trim()}
━━━━━━━━❪🎗❫━━━━━━━━
ㅤㅤㅤ   𝐕𝐀𝐍𝐓𝐀𝐆𝐄𝐍𝐒
━━━━━━━━❪🎗❫━━━━━━━━
➣ A𝖼𝖾𝗌𝗌𝗈 𝖺 comandos 𝖽𝖾 T𝖾𝗌𝗍𝖾𝗌
➣ Acesso as puxadas Pv / grupos
➣ suporte 24h acesso ao pv do bot
╰══════════┘
`;
};

exports.menuprem = menuprem;

// MENU DE BRINCADEIRAS.. 

const brincadeiras = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭═══════════════════ ┐
╰╮   
╭┤ [🧸]𝗠𝗘𝗡𝗨 𝗕𝗥𝗜𝗡𝗖𝗔𝗗𝗘𝗜𝗥𝗔𝗦
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╰══════════┐
╭═══════════════════ ┐
╰╮  
╭┤           [👩‍❤️‍👨]𝗧𝗜𝗡𝗗𝗘𝗥
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}rolar (rolar tinder)
┗▶ Rola o Tinder para encontrar novos matches.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rgtinder (Registrar)
┗▶ Registra um perfil no Tinder dentro do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}meutinder (seu perfil)
┗▶ Exibe seu perfil atual no Tinder.
╰╮
┏│
┏│✞͜͡▹ ${prefix}sairtinder (deletar perfil)
┗▶ Deleta seu perfil do Tinder dentro do bot.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tindernome (Mudar nome)
┗▶ Permite mudar o nome no seu perfil do Tinder.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tinderidade (Mudar idade)
┗▶ Permite mudar a idade no seu perfil do Tinder.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tinderbio (Mudar bio)
┗▶ Atualiza a bio do seu perfil no Tinder.
╰╮
┏│
┏│✞͜͡▹ ${prefix}setgene (Mudar gênero)
┗▶ Altera o gênero do seu perfil no Tinder.
╰╮
┏│
┏│✞͜͡▹ ${prefix}setsex (Mudar sexualidade)
┗▶ Altera a sexualidade do seu perfil no Tinder.
╰╮
┏│
┏│✞͜͡▹ ${prefix}setfiltro (Mudar filtro para busca)
┗▶ Modifica os filtros de busca no Tinder, como idade e gênero.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tinderfoto (Mudar foto de perfil)
┗▶ Permite alterar a foto do seu perfil no Tinder.
┏│
╰══════════┐

╭═══════════════════ ┐
╰╮
┏│
┏│✞͜͡▹ ${prefix}Gay (marca (@))
┗▶ Aplica o título de "gay" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Feio (marca (@))
┗▶ Aplica o título de "feio" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Corno (marca (@))
┗▶ Aplica o título de "corno" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Vesgo (marca (@))
┗▶ Aplica o título de "vesgo" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bebado (marca (@))
┗▶ Aplica o título de "bêbado" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Gostoso (marca (@))
┗▶ Aplica o título de "gostoso" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Gostosa (marca (@))
┗▶ Aplica o título de "gostosa" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Beijo (marca (@))
┗▶ Dá um beijo ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Matar (marca (@))
┗▶ Aplica o título de "morto" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tapa (marca (@))
┗▶ Aplica um tapa no usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Chute (marca (@))
┗▶ Aplica um chute no usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Dogolpe (marca (@))
┗▶ Aplica um golpe de cachorro ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Nazista (marca (@))
┗▶ Aplica o título de "nazista" ao usuário marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Chance (fale algo)
┗▶ Exibe a chance de um evento acontecer.
╰╮
┏│
┏│✞͜͡▹ ${prefix}quando (fale algo)
┗▶ Pergunta sobre quando algo vai acontecer.
╰╮
┏│
┏│✞͜͡▹ ${prefix}teste
┗▶ Realiza um teste qualquer.
╰╮
┏│
┏│✞͜͡▹ ${prefix}batatinha123
┗▶ Realiza uma ação secreta.
╰╮
┏│
┏│✞͜͡▹ ${prefix}suicídar (ira te remover)
┗▶ Comando que irá remover o usuário de uma lista.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Casal
┗▶ Declara um casal entre dois usuários.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankgay
┗▶ Mostra o rank dos mais "gays" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankgado
┗▶ Mostra o rank dos mais "gados" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankcorno
┗▶ Mostra o rank dos mais "cornos" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankgostoso
┗▶ Mostra o rank dos mais "gostosos" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankgostosa
┗▶ Mostra o rank das mais "gostosas" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ranknazista
┗▶ Mostra o rank dos mais "nazistas" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankotakus
┗▶ Mostra o rank dos "otakus" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankpau
┗▶ Mostra o rank dos mais "pau" no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}roletaban
┗▶ Aplica a roleta da ban, removendo usuários.
╰╮
┏│
┏│✞͜͡▹ ${prefix}casar (marca msg ou @)
┗▶ Realiza um casamento entre usuários.
┏│
╰══════════┘
`;
};

exports.brincadeiras = brincadeiras;

// MENU DE EFEITOS DE IMAGEM, MONTAGEM Tops Kkk

const menuinfos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮   
╭┤ [❓]𝗠𝗘𝗡𝗨 𝗜𝗡𝗙𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╰╦══════════
┏│
┏│✞͜͡▹ ${prefix}add_botgp
┗▶ Adiciona o bot ao grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}grupo_figurinhas
┗▶ Acesse o grupo de figurinhas OFC
╰╮
┏│
┏│✞͜͡▹ ${prefix}seguidores-insta
┗▶ Compre seguidores com meu criador
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infoduelo
┗▶ Exibe informações sobre o duelo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}botentra
┗▶ Faz o bot entrar no grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}planos
┗▶ Exibe planos disponíveis para contratação.
╰╮
┏│
┏│✞͜͡▹ ${prefix}alugar
┗▶ Realiza um aluguel do bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}infoalugar
┗▶ Exibe informações sobre como alugar o bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}lojavip
┗▶ Acessa a loja VIP do sistema.
╰╮
┏│
┏│✞͜͡▹ ${prefix}infovip
┗▶ Exibe informações sobre o status VIP do usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}me
┗▶ Exibe informações do usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}recarregar
┗▶ Recarrega moedas para aluguel
╰╮
┏│
┏│✞͜͡▹ ${prefix}moedas
┗▶ Exibe o saldo de moedas do usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}minhaskey
┗▶ Exibe a chave do usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infotransmitir
┗▶ Exibe informações sobre transmissões.
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoMultiPrefixo
┗▶ Exibe informações sobre múltiplos prefixos no sistema.
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoBemvindo
┗▶ Exibe informações sobre as mensagens de boas-vindas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infopalavrão
┗▶ Exibe informações sobre palavras bloqueadas no sistema.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infolistanegra
┗▶ Exibe informações sobre usuários na lista negra.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infobancarac
┗▶ Exibe informações sobre ban por excesso de caracteres
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infovotação
┗▶ Exibe informações sobre votação
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoBanghost
┗▶ Exibe informações sobre Banir inativos
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infosorteio
┗▶ Exibe informações sobre sistema de sorteio
╰╮
┏│
┏│✞͜͡▹ ${prefix}InfoAnotação
┗▶ Exibe informações sobre anotações
┏│
╰══════════┘
`;
};

exports.menuinfos = menuinfos;



const efeitos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭═══════════════════ ┐
╰╮   
╭┤    [🪄]𝗠𝗘𝗡𝗨 𝗘𝗙𝗘𝗜𝗧𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Legenda (marcar)-(img)
┗▶ Adiciona uma legenda à imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Legenda2 (marcar)-(img)
┗▶ Adiciona uma segunda variação de legenda à imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fotohd (Marca uma imagem)
┗▶ Melhora a qualidade da imagem marcada para HD.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fotohd2 (Marca uma imagem)
┗▶ Segunda opção para melhorar imagem marcada para HD.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fotohd3 (Marca uma imagem)
┗▶ Terceira opção para melhorar imagem marcada para HD.
╰╮
┏│
┏│✞͜͡▹ ${prefix}videohd (Marca video)
┗▶ Melhora a qualidade do vídeo marcado para HD.
╰╮
┏│
┏│✞͜͡▹ ${prefix}videohd2 (Marca video)
┗▶ Segunda opção para melhorar a qualidade do vídeo marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}removebg (Marca uma imagem)
┗▶ Remove o fundo da imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fotozombie (marca-imagem)
┗▶ Transforma a imagem marcada em estilo zumbi.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fotocartoon (marca-imagem)
┗▶ Aplica efeito de desenho animado na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}affect (marca-imagem)
┗▶ Aplica efeito "affect" na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}comunismo (marca-imagem)
┗▶ Adiciona efeito temático de comunismo na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}mms (marca-imagem)
┗▶ Aplica efeito de mensagem MMS na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}bobross (marca-imagem)
┗▶ Coloca a imagem marcada em uma pintura do Bob Ross.
╰╮
┏│
┏│✞͜͡▹ ${prefix}bolsonaro (marca-imagem)
┗▶ Adiciona efeito temático relacionado ao Bolsonaro na imagem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}blur (marca-imagem)
┗▶ Aplica efeito de desfoque (blur) na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}beautiful (marca-imagem)
┗▶ Aplica efeito de "beautiful" na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}circle (marca-imagem)
┗▶ Recorta a imagem marcada em formato circular.
╰╮
┏│
┏│✞͜͡▹ ${prefix}del (marca-imagem)
┗▶ Aplica efeito de exclusão (delete) na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}invert (marca-imagem)
┗▶ Inverte as cores da imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}facepalm (marca-imagem)
┗▶ Adiciona efeito de facepalm à imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}jail (marca-imagem)
┗▶ Adiciona efeito de "preso" (jail) na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rip (marca-imagem)
┗▶ Cria um efeito de homenagem RIP para a imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}wasted (marca-imagem)
┗▶ Aplica o efeito "Wasted" clássico dos games na imagem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}wanted (marca-imagem)
┗▶ Cria um cartaz de procurado ("Wanted") com a imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}trash (marca-imagem)
┗▶ Aplica efeito de "lixo" (trash) na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}sepia (marca-imagem)
┗▶ Aplica filtro sépia (tom envelhecido) na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pixelate (marca-imagem)
┗▶ Aplica efeito pixelado (pixelate) na imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}lgbt (marca-imagem)
┗▶ Aplica bandeira LGBT sobre a imagem marcada.
┏│
│
╰══════════┘
`;
};

exports.efeitos = efeitos;


const menuia = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤           [🧠]𝗖𝗠𝗗'𝗦 / 𝗜𝗔
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ Jeff (IA)
┗▶ Converse com a IA Jeff diretamente.
╰╮
┏│
┏│✞͜͡▹ ${prefix}doacao
┗▶ Apóie o projeto com uma doação de qual quer valor
╰╮
┏│
┏│✞͜͡▹ ${prefix}apoiar
┗▶ Apóie o projeto com uma doação de qual quer valor
╰╮
┏│
┏│✞͜͡▹ ${prefix}xbot
┗▶ Converse com o bot como se fosse um amigo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gpt
┗▶ Faça perguntas ao ChatGPT em texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gptvoz
┗▶ Resposta do ChatGPT em formato de voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gpt4
┗▶ Utilize o modelo GPT-4 via texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gpt4voz
┗▶ Utilize o GPT-4 com resposta por voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gptblackbox
┗▶ Use o GPT sem filtros
╰╮
┏│
┏│✞͜͡▹ ${prefix}gptbkvoz
┗▶ GPT da Blackbox com resposta em voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}bard
┗▶ Faça perguntas ao Bard (IA do Google).
╰╮
┏│
┏│✞͜͡▹ ${prefix}bardvoz
┗▶ Bard responde com voz.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fotohd (marca-imagem)
┗▶ Melhore a qualidade de uma imagem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Infobot
┗▶ Informações gerais sobre o bot (áudio).
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bug (QUESTIONE)
┗▶ Reporte um bug encontrado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Sugestao (DICA)
┗▶ Envie uma sugestão de comando ou melhoria.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Avalie (O-QUAO-BOM)
┗▶ Avalie com uma nota esse bot
┏│
╰══════════┘
`;
};

exports.menuia = menuia;


const menudownloads = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤  [🕵️‍♂️]𝗣𝗘𝗦𝗤𝗨𝗜𝗦𝗔𝗦/𝗕𝗔𝗜𝗫𝗔𝗥
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Play
┗▶ Baixa e envia áudio/vídeo pesquisando pelo nome ou link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}play2
┗▶ Alternativa para baixar áudio/vídeo de nome ou link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}play3
┗▶ Outra opção de busca e download de áudio/vídeo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Play_audio 
┗▶ Faz download apenas do áudio pelo nome ou link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Play_audio2 
┗▶ Alternativa para baixar somente o áudio.
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_audio3 
┗▶ Terceira opção para download de áudio.
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_video 
┗▶ Baixa e envia o vídeo completo pelo nome ou link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_video2 
┗▶ Alternativa para baixar vídeo pelo nome ou link.
╰╮
┏│
┏│✞͜͡▹ ${prefix}play_video3 
┗▶ Terceira opção de download de vídeo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}playdoc 
┗▶ Baixa o áudio/vídeo e envia como documento.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Playmp4 
┗▶ Baixa e envia vídeo em formato MP4.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytsearch (NOME)
┗▶ Pesquisa vídeos no YouTube pelo nome.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytsearch2 (NOME)
┗▶ Alternativa para pesquisar vídeos no YouTube.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytmp4 
┗▶ Baixa vídeo do YouTube em MP4.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ytmp3 
┗▶ Baixa áudio do YouTube em MP3.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tiktok_audio (LINK)
┗▶ Baixa apenas o áudio de vídeos do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tiktok_video (LINK)
┗▶ Baixa vídeo do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tiktok_audio2 (LINK)
┗▶ Alternativa para baixar áudio do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tiktok_video2 (LINK)
┗▶ Alternativa para baixar vídeo do TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Insta_audio (LINK)
┗▶ Baixa apenas o áudio de postagens do Instagram.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Insta_video (LINK)
┗▶ Baixa vídeos do Instagram.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Face_audio (LINK)
┗▶ Baixa apenas o áudio de vídeos do Facebook.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Face_video (LINK)
┗▶ Baixa vídeos do Facebook.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Twitter_audio (LINK)
┗▶ Baixa apenas o áudio de posts do Twitter.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Twitter_video (LINK)
┗▶ Baixa vídeos do Twitter.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Spotifyplaylist (baixa playlist do Spotify)
┗▶ Baixa playlists completas do Spotify.
╰╮
┏│
┏│✞͜͡▹ ${prefix}soundcloud (LINK)
┗▶ Baixa músicas do SoundCloud.
╰╮
┏│
┏│✞͜͡▹ ${prefix}shazam (MARQUE-AUDIO/VIDEO)
┗▶ Reconhece música de um áudio ou vídeo marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}audiomeme (nome-meme)
┗▶ Envia áudio de meme pelo nome.
╰╮
┏│
┏│✞͜͡▹ ${prefix}kwai (LINK)
┗▶ Baixa vídeos do Kwai.
╰╮
┏│
┏│✞͜͡▹ ${prefix}aptoide (nome)
┗▶ Pesquisa e baixa apps do Aptoide.
╰╮
┏│
┏│✞͜͡▹ ${prefix}aptoide2 (nome)
┗▶ Alternativa para baixar apps do Aptoide.
╰╮
┏│
┏│✞͜͡▹ ${prefix}mediafire (link)
┗▶ Baixa arquivos do Mediafire.
╰╮
┏│
┏│✞͜͡▹ ${prefix}mediafire2 (link)
┗▶ Alternativa para baixar do Mediafire.
╰╮
┏│
┏│✞͜͡▹ ${prefix}gitclone (Link-do-repo)
┗▶ Faz clone de um repositório do GitHub.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pinterest (oque quer)
┗▶ Pesquisa imagens no Pinterest.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pinterest2 (oque quer)
┗▶ Alternativa para pesquisar imagens no Pinterest.
╰╮
┏│
┏│✞͜͡▹ ${prefix}imagem (oque quer)
┗▶ Pesquisa imagens relacionadas ao que foi pedido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}imagine (oque quer)
┗▶ Outra opção para buscar imagens.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pesquisar (oque quer)
┗▶ Pesquisa geral sobre o que for solicitado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}playstore (oque quer)
┗▶ Pesquisa aplicativos na Play Store.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Imgpralink (MARCAR)
┗▶ Gera um link direto da imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Videopralink (MARCAR-V)
┗▶ Gera um link direto do vídeo marcado.
┏│
╰══════════┘
`;
};

exports.menudownloads = menudownloads;


const informacoes = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤     [📝]𝗜𝗡𝗙𝗢𝗥𝗠𝗔ÇÕ𝗘𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Ping (VELO)
┗▶ Obtenha informações de desempenho do Bot
╰╮
┏│
┏│✞͜͡▹ ${prefix}Atividade
┗▶ Mostra o status de atividades dos membros do grupo
╰╮
┏│
┏│✞͜͡▹ ${prefix}Rankativo
┗▶ Exibe o ranking de usuários ativos do grupo.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Checkativo (@MARCAR)
┗▶ Exibe informações do usuário
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ranklevel (DE-TODOS)
┗▶ Exibe o ranking de níveis de todos os usuários.
╰╮
┏│
┏│✞͜͡▹ ${prefix}signo
┗▶ Pesquise seu signo
╰╮
┏│
┏│✞͜͡▹ ${prefix}clima (cidade)
┗▶ Exibe o clima atual da cidade informada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}contar (texto)
┗▶ Conta a quantidade de caracteres no texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}transcrever (marque-audio)
┗▶ Transcreve o áudio marcado em texto.
╰╮
┏│
┏│✞͜͡▹ ${prefix}validarcpf 13226xxxxxx
┗▶ Verifica se o cpf e válido
╰╮
┏│
┏│✞͜͡▹ ${prefix}infonumero 5532xxxxxx
┗▶ Exibe informações sobre o número informado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}infoproxy (link)
┗▶ Exibe informações sobre o link (proxy).
╰╮
┏│
┏│✞͜͡▹ ${prefix}stalkig (Digite o nome Do insta)
┗▶ Realiza o stalk de uma conta no Instagram.
╰╮
┏│
┏│✞͜͡▹ ${prefix}stalkttk (Digite o nome Do tiktok)
┗▶ Realiza o stalk de uma conta no TikTok.
╰╮
┏│
┏│✞͜͡▹ ${prefix}print (url)
┗▶ Tira uma captura de tela de um site.
╰╮
┏│
┏│✞͜͡▹ que horas sao?
┗▶ Informa a hora atual.
┏│
╰══════════┘
`;
};

exports.informacoes = informacoes;



const menujogos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤           [🎮]𝗠𝗘𝗡𝗨 𝗝𝗢𝗚𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Jogodavelha (@Marcar)
┗▶ Inicia um jogo da velha com o jogador marcado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Anagrama (1/0)
┗▶ Inicia ou termina um jogo de anagrama.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Gartic (1/0)
┗▶ Inicia ou termina um jogo de Gartic.
╰╮
┏│
┏│✞͜͡▹ ${prefix}qualmusic (1/0)
┗▶ Inicia ou termina um jogo de "Qual música".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Quizanimal (1/0)
┗▶ Inicia ou termina um quiz sobre animais.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Enigma (1/0)
┗▶ Inicia ou termina um jogo de enigma.
╰╮
┏│
┏│✞͜͡▹ ${prefix}R-forca (Letra)
┗▶ Chuta uma letra no jogo da forca.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Resetforca (Resetar)
┗▶ Reseta o jogo da forca.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Jogodaforca (Iniciar)
┗▶ Inicia um novo jogo da forca.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Vab (Você prefere?)
┗▶ Inicia o jogo "Você prefere?".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Eununca (Eu nunca, eu já)
┗▶ Jogo "Eu nunca, eu já".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ppt (Pedra/Papel/Tesoura)
┗▶ Inicia um jogo de pedra, papel e tesoura.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Cassino
┗▶ Jogo de cassino.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Mina (coordenada(s))
┗▶ Jogo da mina, informe as coordenadas.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minado (dificuldade)
┗▶ Inicia um jogo de minado com a dificuldade escolhida.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minareset (resetar)
┗▶ Reseta o jogo da mina.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Mineshelp (info)
┗▶ Exibe informações sobre o jogo da mina.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Minatips (dicas)
┗▶ Exibe dicas para o jogo da mina.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Akinator (iniciar jogo)
┗▶ Inicia o jogo do Akinator.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Resetaki (resetar akinator)
┗▶ Reseta o jogo do Akinator.
┏│
┃╰══ ✞
╰══════════┘
`;
};

exports.menujogos = menujogos;


const menufigurinhas = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤      [👻]𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Attp (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp2 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp3 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp4 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp5 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp6 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Attp7 (TEXTO)
┗▶ Cria uma figurinha animada de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp2 (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp3 (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}Ttp4 (TEXTO)
┗▶ Cria uma figurinha de texto
╰╮
┏│
┏│✞͜͡▹ ${prefix}qc (TEXTO)
┗▶ Cria uma figurinha de fakechat
╰╮
┏│
┏│✞͜͡▹ ${prefix}amongus
┗▶ Crie uma figurinha de texto do amongus
╰╮
┏│
┏│✞͜͡▹ ${prefix}buscar_sticker
┗▶ Busca um pack de figurinhas
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fsticker (MARCAR-FOTO)
┗▶ Cria um sticker a partir da foto marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Sticker (MARCAR-FOTO)
┗▶ Cria um sticker a partir da foto marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}stickera (QUANTIDADE)
┗▶ Pega figurinhas aleatórias
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_flork (QUANTIDADE)
┗▶ Envia stickers de flork.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_emoji (QUANTIDADE)
┗▶ Envia stickers de emoji.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_aleatoria (QUANTIDADE)
┗▶ Envia stickers aleatórios.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_memes (QUANTIDADE)
┗▶ Envia stickers de memes.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_anime (QUANTIDADE)
┗▶ Envia stickers de anime.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_coreana (QUANTIDADE)
┗▶ Envia stickers de conteúdo coreano.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_bebe (QUANTIDADE)
┗▶ Envia stickers de bebês.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_desenho (QUANTIDADE)
┗▶ Envia stickers de desenhos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_animais (QUANTIDADE)
┗▶ Envia stickers de animais.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_engracadas (QUANTIDADE)
┗▶ Envia stickers engraçados.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_raiva (QUANTIDADE)
┗▶ Envia stickers de raiva.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_roblox (QUANTIDADE)
┗▶ Envia stickers do jogo Roblox.
╰╮
┏│
┏│✞͜͡▹ ${prefix}figu_ale (QUANTIDADE)
┗▶ Envia stickers aleatórios.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 😏/whatsapp
┗▶ Envia o emoji do WhatsApp.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/google
┗▶ Envia o emoji do Google.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/apple
┗▶ Envia o emoji da Apple.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/sansung
┗▶ Envia o emoji da Samsung.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/Microsoft
┗▶ Envia o emoji da Microsoft.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/twitter
┗▶ Envia o emoji do Twitter.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/Facebook
┗▶ Envia o emoji do Facebook.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 😏/joypixels
┗▶ Envia o emoji do Joypixels.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/openmoji
┗▶ Envia o emoji do Openmoji.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emoji 🙂/htc
┗▶ Envia o emoji da HTC.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emojimix 😉+🙂
┗▶ Cria um emoji misturado entre 😉 e 🙂.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Emojimix2 😉+🙂
┗▶ Cria um emoji misturado entre 😉 e 🙂.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Toimg (MARCAR-FIGU)
┗▶ Converte a figura marcada para imagem.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Togif (MARCAR-FIGU)
┗▶ Converte a figura marcada para gif.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Roubar (TEXT/TEXT)
┗▶ Mude a descrição da figurinha
╰╮
┏│
┏│✞͜͡▹ ${prefix}take (Figu com sua marca D'agua)
┗▶ Cria uma figura com a sua marca d'água.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rgtake (Resgistra sua Marca D'agua)
┗▶ Registra sua marca d'água para criar figuras.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rntake (Renomeia Sua Marca D'agua)
┗▶ Renomeia sua marca d'água registrada.
┏│
╰══════════┘
`;
};

exports.menufigurinhas = menufigurinhas;


const downloadjogos = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤  [♨️]𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗝𝗢𝗚𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│ BAIXAR ELES: ${prefix}mediafire link
╰╮
┏│
┏│✞͜͡▹ ${prefix}minecraft
┏│✞͜͡▹ ${prefix}motox3m
┏│✞͜͡▹ ${prefix}zombitsunami
┏│✞͜͡▹ ${prefix}vector1
┏│✞͜͡▹ ${prefix}vector2
┏│✞͜͡▹ ${prefix}subway
┏│✞͜͡▹ ${prefix}jogo1
┏│✞͜͡▹ ${prefix}jogo2
┏│✞͜͡▹ ${prefix}jogo3
┏│✞͜͡▹ ${prefix}jogo4
┏│✞͜͡▹ ${prefix}jogo5
┏│✞͜͡▹ ${prefix}jogo6
┏│✞͜͡▹ ${prefix}jogo7
┏│✞͜͡▹ ${prefix}jogo8
┏│✞͜͡▹ ${prefix}jogo9
┏│✞͜͡▹ ${prefix}jogo10
┏│✞͜͡▹ ${prefix}jogo11
┏│✞͜͡▹ ${prefix}jogo12
┏│✞͜͡▹ ${prefix}jogo13
┏│✞͜͡▹ ${prefix}jogo14
┏│✞͜͡▹ ${prefix}jogo15
┏│✞͜͡▹ ${prefix}jogo16
┏│✞͜͡▹ ${prefix}jogo17
┏│✞͜͡▹ ${prefix}jogo19
┏│✞͜͡▹ ${prefix}jogo20
┏│✞͜͡▹ ${prefix}jogo21
┏│✞͜͡▹ ${prefix}jogo22
┏│✞͜͡▹ ${prefix}jogo23
┏│✞͜͡▹ ${prefix}jogo24
┏│✞͜͡▹ ${prefix}jogo25
┏│✞͜͡▹ ${prefix}jogo26
┏│✞͜͡▹ ${prefix}jogo27
┏│✞͜͡▹ ${prefix}jogo28
┏│✞͜͡▹ ${prefix}jogosamp
╰══════════┘
`;
};

exports.downloadjogos = downloadjogos;



const menunsfw = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤     [😈]𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪
┃╰══ ✞
╰╦══════════════════ ✞
│
┏│✞͜͡▹ 🔞${prefix}ahegao
┏│✞͜͡▹ 🔞${prefix}ass
┏│✞͜͡▹ 🔞${prefix}bdsm
┏│✞͜͡▹ 🔞${prefix}blowjob
┏│✞͜͡▹ 🔞${prefix}cuckold
┏│✞͜͡▹ 🔞${prefix}cum
┏│✞͜͡▹ 🔞${prefix}femdom
┏│✞͜͡▹ 🔞${prefix}foot
┏│✞͜͡▹ 🔞${prefix}gangbang
┏│✞͜͡▹ 🔞${prefix}glasses
┏│✞͜͡▹ 🔞${prefix}hentai
┏│✞͜͡▹ 🔞${prefix}hentai2
┏│✞͜͡▹ 🔞${prefix}jahy
┏│✞͜͡▹ 🔞${prefix}manga
┏│✞͜͡▹ 🔞${prefix}neko
┏│✞͜͡▹ 🔞${prefix}orgy
┏│✞͜͡▹ 🔞${prefix}panties
┏│✞͜͡▹ 🔞${prefix}pussy
┏│✞͜͡▹ 🔞${prefix}neko2
┏│✞͜͡▹ 🔞${prefix}tentacles
┏│✞͜͡▹ 🔞${prefix}thighs
┏│✞͜͡▹ 🔞${prefix}figurinhas+18 (quantidade)
┏│✞͜͡▹ 🔞${prefix}only1
┏│✞͜͡▹ 🔞${prefix}only2
┏│✞͜͡▹ 🔞${prefix}only3
┏│✞͜͡▹ 🔞${prefix}only4
┏│✞͜͡▹ 🔞${prefix}only5
┏│✞͜͡▹ 🔞${prefix}only6
┏│✞͜͡▹ 🔞${prefix}only7
┏│✞͜͡▹ 🔞${prefix}only8
┏│✞͜͡▹ 🔞${prefix}only9
┏│✞͜͡▹ 🔞${prefix}only10
┏│✞͜͡▹ 🔞${prefix}only11
┏│✞͜͡▹ 🔞${prefix}only12
┏│✞͜͡▹ 🔞${prefix}plaquinha (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha2 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha3 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha4 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha5 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha6 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha7 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha8 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha9 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha10 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}plaquinha11 (seu nome)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}xvideos (nome/link)
┗▶ Crie uma plaquinha com seu nick
╰╮
┏│
┏│✞͜͡▹ 🔞${prefix}xnxx (nome/link)
┗▶ Crie uma plaquinha com seu nick
┏│
╰══════════┘
`;
};

exports.menunsfw = menunsfw;


const outroscmds = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤    [💻]𝗖𝗠𝗗'𝗦 𝗗𝗘 𝗠𝗘𝗠𝗕𝗥𝗢𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}Gtts (LINGUAGEM + TEXTO)
┗▶ Converte o texto informado para áudio na linguagem selecionada. ex ${prefix}gtts pt ola jeff
╰╮
┏│
┏│✞͜͡▹ ${prefix}reversetxt (texto)
┗▶ Inverte o texto fornecido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}enquete
┗▶ Cria uma enquete para votação.
╰╮
┏│
┏│✞͜͡▹ ${prefix}qrcode (texto)
┗▶ Gera um código QR a partir do texto fornecido.
╰╮
┏│
┏│✞͜͡▹ ${prefix}lerqr (marca-imagem-QR)
┗▶ Lê o conteúdo de um código QR a partir de uma imagem marcada.
╰╮
┏│
┏│✞͜͡▹ ${prefix}fonte (texto)
┗▶ Gere o texto fornecido para a fonte 
╰╮
┏│
┏│✞͜͡▹ ${prefix}audvizu (marca-audio)
┗▶ Converte um áudio, em visualização única.
╰╮
┏│
┏│✞͜͡▹ ${prefix}covidbr
┗▶ Exibe as estatísticas atuais da COVID-19 no Brasil.
╰╮
┏│
┏│✞͜͡▹ ${prefix}metadinha
┗▶ Gera uma metadinha aleatória.
╰╮
┏│
┏│✞͜͡▹ ${prefix}loli
┗▶ Envia uma imagem aleatória de loli
╰╮
┏│
┏│✞͜͡▹ ${prefix}gethtml
┗▶ Obtém o código HTML de uma página web.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tagme
┗▶ Marca o usuário
╰╮
┏│
┏│✞͜͡▹ ${prefix}Tabela (LETRAS)
┗▶ Exibe tabela
╰╮
┏│
┏│✞͜͡▹ ${prefix}Conselhobiblico
┗▶ Fornece um conselho baseado em textos bíblicos.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Simi (FALE-ALGO)
┗▶ Faz o bot responder com algo que você disser.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Perfil
┗▶ Exibe o perfil do usuário.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Calcular 1 + 1
┗▶ Realiza o cálculo matemático solicitado.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Traduzir pt/cat
┗▶ Traduz o texto entre os idiomas especificados.
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fazernick (NICK)
┗▶ Cria nick com diversos estilos e fontes
╰╮
┏│
┏│✞͜͡▹ ${prefix}Fazernick2 (NICK)
┗▶ Cria nick com diversos estilos e fontes
╰╮
┏│
┏│✞͜͡▹ ${prefix}sn (sim ou nao)
┗▶ Ele responde a pergunta se "sim ou não".
╰╮
┏│
┏│✞͜͡▹ ${prefix}Bot
┗▶ Bot Envia um áudio
╰╮
┏│
┏│✞͜͡▹ ${prefix}getbio
┗▶ Pega O recado de um usuário
╰╮
┏│
┏│✞͜͡▹ ${prefix}getperfil
┗▶ Pega a foto do perfil de um usuário
┏│
╰══════════┘
`;
};

exports.outroscmds = outroscmds;


const puxadas = async (prefix, getStatus, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 
//[${await getStatus('nome')}]
return `

╭═══════════════════ ┐
╰╮  
╭┤        [🕵️‍♂️]𝗣𝗨𝗫𝗔𝗗𝗔𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ ${prefix}nome
┗▶ Consulta dados pelo nome.
╰╮
┏│
┏│✞͜͡▹ ${prefix}nome2  
┗▶ Consulta alternativa pelo nome.
╰╮
┏│
┏│✞͜͡▹ ${prefix}nome3  
┗▶ Mais uma consulta por nome.
╰╮
┏│
┏│✞͜͡▹ ${prefix}nome4
┗▶ Outra opção de consulta por nome.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf
┗▶ Consulta dados pelo CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf2
┗▶ Consulta alternativa de CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf3
┗▶ Outra busca por CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf4
┗▶ Mais uma opção de consulta CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf5
┗▶ Consulta extra de CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf6
┗▶ Mais métodos para consultar CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf7
┗▶ Alternativa de pesquisa CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf8
┗▶ Busca detalhada por CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf9
┗▶ Consulta rápida de CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cpf10
┗▶ Outra forma de buscar CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}tel1  
┗▶ Consulta de telefone (base 1).
╰╮
┏│
┏│✞͜͡▹ ${prefix}tel2
┗▶ Consulta de telefone (base 2).
╰╮
┏│
┏│✞͜͡▹ ${prefix}placa1  
┗▶ Consulta de veículo pela placa (1).
╰╮
┏│
┏│✞͜͡▹ ${prefix}placa2 
┗▶ Consulta de veículo pela placa (2).
╰╮
┏│
┏│✞͜͡▹ ${prefix}ip  
┗▶ Consulta dados de um IP.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cep  
┗▶ Consulta informações de um CEP.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cnh  
┗▶ Consulta informações de uma CNH
╰╮
┏│
┏│✞͜͡▹ ${prefix}cep2
┗▶ Segunda opção de consulta CEP.
╰╮
┏│
┏│✞͜͡▹ ${prefix}cnpj  
┗▶ Consulta dados de CNPJ de empresa.
╰╮
┏│
┏│✞͜͡▹ ${prefix}score
┗▶ Verificação de score de CPF.
╰╮
┏│
┏│✞͜͡▹ ${prefix}email  
┗▶ Consulta dados pelo email.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rg  
┗▶ Consulta dados pelo RG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}rg2  
┗▶ Segunda opção de consulta RG.
╰╮
┏│
┏│✞͜͡▹ ${prefix}chassi
┗▶ Consulta veículo pelo chassi.
╰╮
┏│
┏│✞͜͡▹ ${prefix}pix
┗▶ Consulta pela chave PIX..
╰╮
┏│
┏│✞͜͡▹ ${prefix}processos
┗▶ Consulta processos de um CPF
╰╮
┏│
┏│✞͜͡▹ ${prefix}processos_jusbr
┗▶ Consulta procesos de um CPF
╰╮
┏│
┏│✞͜͡▹ ${prefix}processo_numero
┗▶ Consulta Processo pelo número do processo
╰╮
┏│
┏│✞͜͡▹ ${prefix}processos_cnpj
┗▶ Consulta Processo de um CNPJ
╰╮
┏│
┏│✞͜͡▹ ${prefix}processos_nome
┗▶ Consulta processos pelo nome do advogado
╰╮
┏│
┏│✞͜͡▹ ${prefix}foto-rj
┗▶ Consulta foto de um CPF do RJ
╰╮
┏│
┏│✞͜͡▹ ${prefix}foto-sp
┗▶ Consulta foto de um CPF DE SP
╰╮
┏│
┏│✞͜͡▹ ${prefix}foto-ce
┗▶ Consulta foto de um CPF do CEARÁ
╰╮
┏│
┏│✞͜͡▹ ${prefix}foto-ma
┗▶ Consulta foto de um CPF do Maranhão
╰╮
┏│
┏│✞͜͡▹ ${prefix}foto-ro
┗▶ Consulta foto de um CPF do Rondônia
╰╮
┏│
┗━━━━━━━━━━┛
`;
};

exports.puxadas = puxadas;


// EDITAR BOTÕES DO MENU PRINCIPAL\\

// MUDE SOMENTE DENTRO DAS ` `


// BOTÃO DA LISTA DE MENUS
const botao_menu = (prefix, sender) => {return `Menu De Lista`;
};


// BOTAO SUB MENU
const sub_menu = (prefix, sender) => {return `Click no botão abaixo para escolher.`;
};




// BOTOES 

const comandos_de_membros = (prefix, sender) => {return `👤 COMANDOS DE MEMBROS 👤`;
};

const menu_dono = (prefix, sender) => {return `🥷 MENU DONO 🥷`;
};

const ativacoes_dono = (prefix, sender) => {return `🥷 ATIVAÇÕES DE DONO 🥷`;
};

const menu_adm = (prefix, sender) => {return `😎 MENU ADM 😎`;
};

const ativacoes_adm = (prefix, sender) => {return `😎 ATIVAÇÕES DE ADM 😎`;
};

const menu_premium = (prefix, sender) => {return `🎗️ MENU VIP 🎗️`;
};

const menu_efeitos = (prefix, sender) => {return `🌀 MENU EFEITOS 🌀`;
};

const menu_logos = (prefix, sender) => {return `🖼️ MENU LOGOS 🖼️`;
};

const efeitos_audio_videos = (prefix, sender) => {return `🎤 EFEITOS AUDIO/VIDEOS 🎤`;
};

const menu_brincadeiras = (prefix, sender) => {return `🥳 MENU BRINCADEIRAS 🥳`;
};

const menu_fotoshop = (prefix, sender) => {return `📸 MENU FOTOSHOP 📸`;
};

const menu_rpg = (prefix, sender) => {return `🌃 MENU RPG 🌃`;
};

const menu_infos = (prefix, sender) => {return `🗨️ MENU INFOS 🗨️`;
};

const inteligencia_artificial = (prefix, sender) => {return `🧠 INTELIGÊNCIA ARTIFICIAL 🧠`;
};

const menu_downloads = (prefix, sender) => {return `📥 MENU DOWNLOADS 📥`;
};

const menu_informacoes = (prefix, sender) => {return `📝 INFORMAÇÕES 📝`;
};

const menu_jogos = (prefix, sender) => {return `🎮 MENU JOGOS 🎮`;
};

const menu_figurinhas = (prefix, sender) => {return `👻 MENU FIGURINHAS 👻`;
};

const jogos_apks = (prefix, sender) => {return `♨️ JOGOS APK'S ♨️`;
};

const menu_nsfw = (prefix, sender) => {return `🔞 MENU NSFW 🔞`;
};

const menu_puxadas = (prefix, sender) => {return `🔎 MENU PUXADAS 🔍`;
};

const ping = (prefix, sender) => {return `⚡ PING ⚡`;
};

const dono = (prefix, sender) => {return `🥷 DONO 🥷`;
};

// BOTÃO `CRIADOR` NÃO INCLUÍDO, PARA EVITAR KIB


const avalie = (prefix, sender) => {return `💫 AVALIE O QUÃO BOM 💫`;
};

///////  FIM DOS MENUS DE BOTOES \\\\\\\\\


// MENU ATIVAÇÕES DONO


const ativacoesdono = (prefix, isAnticall, isAntilinkgp, isVisualizar, isConsole, isAntiPv, isAntiPv2, isAntiPv3, isAudioMenu, isVerificado, isBotoff, isPuxadas, ismodoaluga, ismodoaluga2,  grupo, botoes_, isAntirequestPaymentMessage, cafe, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤       [⚙️ ATIVAÇÕES DONO
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ [${!botoes_ ? `❌`: `✅`}] ${prefix}botões
┏│✞͜͡▹ [${!isAnticall ? `❌`: `✅`}] ${prefix}antiligar
┏│✞͜͡▹ [${!isVisualizar ? `❌`: `✅`}] ${prefix}visualizarmsg
┏│✞͜͡▹ [${!isConsole ? `❌`: `✅`}] ${prefix}console
┏│✞͜͡▹ [${!isAntiPv ? `❌`: `✅`}] ${prefix}antipv
┏│✞͜͡▹ [${!isAntiPv2 ? `❌`: `✅`}] ${prefix}antipv2
┏│✞͜͡▹ [${!isAntiPv3 ? `❌`: `✅`}] ${prefix}antipv3
┏│✞͜͡▹ [${!isAudioMenu ? `❌`: `✅`}] ${prefix}audio-menu
┏│✞͜͡▹ [${!isVerificado ? `❌`: `✅`}] ${prefix}verificado-global
┏│✞͜͡▹ [${!isBotoff ? `❌`: `✅`}] ${prefix}botoff
┏│✞͜͡▹ [${!isPuxadas ? `❌`: `✅`}] ${prefix}modopuxadas 1/0
┏│✞͜͡▹ [${!ismodoaluga ? `❌`: `✅`}] ${prefix}modoaluguel 1/0
┏│✞͜͡▹ [${!ismodoaluga2 ? `❌`: `✅`}] ${prefix}modoaluguel2 1/0
┏│✞͜͡▹ [${!grupo.protecaoAtivada ? `❌`: `✅`}] ${prefix}alterar_protecao 1/0
┏│✞͜͡▹ [${!cafe.status ? `❌`: `✅`}] ${prefix}modoaluguelG 1/0

┗━━━━━━━━━━┛
`;
};

exports.ativacoesdono = ativacoesdono;




// ATIVACOES ADM SEM BOTAO


const ativacoesadm = (prefix, isAntiLinkHard, isAntiNotas, isAntiFlood, isAntifake, isAnticatalogo, Antiloc, isx9, isX9VisuUnica, isModobn, isAntilinkgp, isWelkom, isWelkom2, isAntiVid, isAntiImg, isAntiAudio, isAntiCtt, isAntiSticker, isAutofigu, isSimi, isSimi2, isAutorepo, isAutoText, isAutobaixar, Antidoc, isAntiPorn, isAntiGore, isPalavrao, isNsfw, isBotCity, isAdmSemprefixo, isAntirequestPaymentMessage, isx9entradamembro, isAntidelete, isAntistatus, isAnticanal, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤    [⚙️ ATIVAÇÕES ADM
┃╰══ ✞
╰╦══════════════════ ✞
┏│
┏│✞͜͡▹ [${!isAntiLinkHard ? `❌`: `✅`}] ${prefix}antilink 1/0
┏│✞͜͡▹ [${!isAntiNotas ? `❌`: `✅`}] ${prefix}antinotas 1/0
┏│✞͜͡▹ [${!isAntiFlood ? `❌`: `✅`}] ${prefix}limitecaracteres 1/0
┏│✞͜͡▹ [${!isAntifake ? `❌`: `✅`}] ${prefix}antifake 1/0
┏│✞͜͡▹ [${!isAnticatalogo ? `❌`: `✅`}] ${prefix}anticatalogo 1/0
┏│✞͜͡▹ [${!Antiloc ? `❌`: `✅`}] ${prefix}antiloc 1/0
┏│✞͜͡▹ [${!isx9 ? `❌`: `✅`}] ${prefix}x9 1/0
┏│✞͜͡▹ [${!isX9VisuUnica ? `❌`: `✅`}] ${prefix}x9visuunica 1/0
┏│✞͜͡▹ [${!isx9entradamembro ? `❌`: `✅`}] ${prefix}x9membro 1/0
┏│✞͜͡▹ [${!isModobn ? `❌`: `✅`}] ${prefix}modobrincadeira 1/0
┏│✞͜͡▹ [${!isAntilinkgp ? `❌`: `✅`}] ${prefix}antilinkgp 1/0
┏│✞͜͡▹ [${!isWelkom ? `❌`: `✅`}] ${prefix}bemvindo 1/0
┏│✞͜͡▹ [${!isWelkom2 ? `❌`: `✅`}] ${prefix}bemvindo2 1/0
┏│✞͜͡▹ [${!isAntiVid ? `❌`: `✅`}] ${prefix}antivideo 1/0
┏│✞͜͡▹ [${!isAntiImg ? `❌`: `✅`}] ${prefix}antiimg 1/0
┏│✞͜͡▹ [${!isAntiAudio ? `❌`: `✅`}] ${prefix}antiaudio 1/0
┏│✞͜͡▹ [${!isAntiCtt ? `❌`: `✅`}] ${prefix}anticontato 1/0
┏│✞͜͡▹ [${!isAntiSticker ? `❌`: `✅`}] ${prefix}antisticker 1/0
┏│✞͜͡▹ [${!isAutofigu ? `❌`: `✅`}] ${prefix}autofigu 1/0
┏│✞͜͡▹ [${!isSimi ? `❌`: `✅`}] ${prefix}simih 1/0
┏│✞͜͡▹ [${!isSimi2 ? `❌`: `✅`}] ${prefix}simih2 1/0
┏│✞͜͡▹ [${!isAutorepo ? `❌`: `✅`}] ${prefix}autorepo 1/0
┏│✞͜͡▹ [${!isAutoText ? `❌`: `✅`}] ${prefix}autotext 1/0
┏│✞͜͡▹ [${!isAutobaixar ? `❌`: `✅`}] ${prefix}autobaixar 1/0
┏│✞͜͡▹ [${!Antidoc ? `❌`: `✅`}] ${prefix}antidoc 1/0
┏│✞͜͡▹ [${!isAntiPorn ? `❌`: `✅`}] ${prefix}antigore 1/0
┏│✞͜͡▹ [${!isAntiGore ? `❌`: `✅`}] ${prefix}antiporno 1/0
┏│✞͜͡▹ [${!isPalavrao ? `❌`: `✅`}] ${prefix}antipalavrao 1/0
┏│✞͜͡▹ [${!isNsfw ? `❌`: `✅`}] ${prefix}modonsfw 1/0
┏│✞͜͡▹ [${!isBotCity ? `❌`: `✅`}] ${prefix}modorpg 1/0
┏│✞͜͡▹ [${!isAdmSemprefixo ? `❌`: `✅`}] ${prefix}autoadm 1/0
┏│✞͜͡▹ [${!isAdmSemprefixo ? `❌`: `✅`}] ${prefix}autoadm 1/0
┏│✞͜͡▹ [${!isAntidelete ? `❌`: `✅`}] ${prefix}antidelete 1/0
┏│✞͜͡▹ [${!isAntistatus ? `❌`: `✅`}] ${prefix}antistatus 1/0
┏│✞͜͡▹ [${!isAnticanal ? `❌`: `✅`}] ${prefix}anticanal 1/0
┗━━━━━━━━━━┛
`;
};

exports.ativacoesadm = ativacoesadm;














/////////  BOTÃO LOJA VIP   \\\\\\\\\\\



//╭═══════════════════ ┐

//        PRODUTO VIP 1

//TEXTO
const tituloproduto1 = (prefix, sender) => {return `🌚 1 Dia = R$ 2,00 Reais`;
};
//SUBTITULO
const SubtituloProduto1 = (prefix, sender) => {return `
> Tera 1 Dia de Premium/Vip`;
};


//PREÇO
const PreçoProduto1 = (prefix, sender) => {return `2`;
};
//╰╦══════════════════ ✞










//╭═══════════════════ ┐

//        PRODUTO VIP 2

//TEXTO
const tituloproduto2 = (prefix, sender) => {return `🤡 5 Dias = R$ 4,00 Reais`;
};

//SUBTITULO
const SubtituloProduto2 = (prefix, sender) => {return `
> Tera 5 Dias de Premium/Vip`;
};



//PREÇO
const PreçoProduto2 = (prefix, command, sender) => {return `4`;
};

//╰╦══════════════════ ✞









//╭═══════════════════ ┐

//        PRODUTO VIP 3

//TEXTO
const tituloproduto3 = (prefix, sender) => {return `🤓 7 Dias = R$ 6,00 Reais`;
};
//SUBTITULO
const SubtituloProduto3 = (prefix, sender) => {return `
> Tera 7 Dias de Premium/Vip`;
};



//PREÇO
const PreçoProduto3 = (prefix, sender) => {return `6`;
};

//╰╦══════════════════ ✞








//╭═══════════════════ ┐

//        PRODUTO VIP 4

//TEXTO
const tituloproduto4 = (prefix, sender) => {return `😏 14 Dias = R$ 10,00 Reais`;
};
//SUBTITULO
const SubtituloProduto4 = (prefix, sender) => {return `
> Tera 14 Dias de Premium/Vip`;
};



//PREÇO
const PreçoProduto4 = (prefix, sender) => {return `10`;
};

//╰╦══════════════════ ✞










//╭═══════════════════ ┐

//        PRODUTO VIP 5

//TEXTO
const tituloproduto5 = (prefix, sender) => {return `😎 1 Mês = R$ 20,00 Reais`;
};
//SUBTITULO
const SubtituloProduto5 = (prefix, sender) => {return `
> Tera 1 Mês de Premium/Vip`;
};



//PREÇO
const PreçoProduto5 = (prefix, sender) => {return `20`;
};
//╰╦══════════════════ ✞










//╭═══════════════════ ┐

//        PRODUTO VIP 6

//TEXTO
const tituloproduto6 = (prefix, command, sender) => {return `💅🏽 2 Meses = R$ 40,00 Reais`;
};
//SUBTITULO
const SubtituloProduto6 = (prefix, sender) => {return `
> Tera 2 Mês de Premium/Vip`;
};



//PREÇO
const PreçoProduto6 = (prefix, sender) => {return `40`;
};
//╰╦══════════════════ ✞








//╭═══════════════════ ┐

//        PRODUTO VIP 7

//TEXTO
const tituloproduto7 = (prefix, sender) => {return `😍 3 Meses = R$ 60,00 Reais`;
};
//SUBTITULO
const SubtituloProduto7 = (prefix, command, sender) => {return `
> Tera 3 Mês de Premium/Vip`;
};



//PREÇO
const PreçoProduto7 = (prefix, sender) => {return `60`;
};

//╰╦══════════════════ ✞








//╭═══════════════════ ┐

//        PRODUTO VIP 8

//TEXTO
const tituloproduto8 = (prefix, sender) => {return `🧙‍♂️ Permanente = R$ 120,00 Reais`;
};
//SUBTITULO
const SubtituloProduto8 = (prefix, sender) => {return `
> Tera Premium/Vip Permanente!`;
};


//PREÇO
const PreçoProduto8 = (prefix, sender) => {return `120`;
};
//╰╦══════════════════ ✞



/////// FIM DA LOJA VIP \\\\\\\\








////// [ LOJA ALUGUEL ] \\\\\\\


//     TABELA ALUGUEL
                    
const TabelaAluguel = (prefix, sender) => {return `*_»⟩Tabela de preços para alugar o bot ⟨«_*

1️⃣⧽ R$ 10.00 (15 dias)
2️⃣⧽ R$ 20.00 (1 mês)
3️⃣⧽ R$ 45.00 (60 dias)
4️⃣⧽ R$ 75.00 (90 dias)
5️⃣⧽ R$ 100.00 (120 dias)
`;
};


//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 1


// TITULO
const TituloAluguel1 = (prefix, sender) => {return `1️⃣⧽ R$ 10.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel1 = (prefix, sender) => {return `
> (+bônus R$ 0.50)`;
};

// PREÇO
const preço1 = (prefix, sender) => {return `10`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO

//╰╦══════════════════ ✞





//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 2


// TITULO
const TituloAluguel2 = (prefix, sender) => {return `2️⃣⧽ R$ 20.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel2 = (prefix, sender) => {return `
> (+bônus R$ 1.00)`;
};

// PREÇO
const preço2 = (prefix, sender) => {return `21`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞






//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 3


// TITULO
const TituloAluguel3 = (prefix, sender) => {return `3️⃣⧽ R$ 45.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel3 = (prefix, sender) => {return `
> (+bônus R$ 2.00)`;
};

// PREÇO
const preço3 = (prefix, sender) => {return `45`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞








//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 4


// TITULO
const TituloAluguel4 = (prefix, sender) => {return `4️⃣⧽ R$ 75.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel4 = (prefix, sender) => {return `
> (+bônus R$ 3.00)`;
};

// PREÇO
const preço4 = (prefix, sender) => {return `75`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞





//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 5


// TITULO
const TituloAluguel5 = (prefix, sender) => {return `5️⃣⧽ R$ 100.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel5 = (prefix, sender) => {return `
> (+bônus R$ 4.00)`;
};

// PREÇO
const preço5 = (prefix, sender) => {return `100`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞







//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 6


// TITULO
const TituloAluguel6 = (prefix, sender) => {return `6️⃣⧽ R$ 50.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel6 = (prefix, sender) => {return `
> (+bônus R$ 5.00)`;
};

// PREÇO
const preço6 = (prefix, sender) => {return `55`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞























/* ⚠️NÃO MEXA AQUI EM BAIXO ⚠️*/


exports.TabelaAluguel = TabelaAluguel;
exports.TituloAluguel1 = TituloAluguel1;
exports.SubtituloAluguel1  = SubtituloAluguel1;
exports.TituloAluguel2 = TituloAluguel2;
exports.SubtituloAluguel2  = SubtituloAluguel2;
exports.TituloAluguel3 = TituloAluguel3;
exports.SubtituloAluguel3  = SubtituloAluguel3;
exports.TituloAluguel4 = TituloAluguel4;
exports.SubtituloAluguel4 = SubtituloAluguel4;
exports.TituloAluguel5 = TituloAluguel5;
exports.SubtituloAluguel5 = SubtituloAluguel5;
exports.TituloAluguel6 = TituloAluguel6;
exports.SubtituloAluguel6 = SubtituloAluguel6;
exports.preço1 = preço1;
exports.preço2 = preço2;
exports.preço3 = preço3;
exports.preço4 = preço4;
exports.preço5 = preço5;
exports.preço6 = preço6;
exports.tituloproduto1 = tituloproduto1;
exports.SubtituloProduto1 = SubtituloProduto1;
exports.tituloproduto2 = tituloproduto2;
exports.SubtituloProduto2 = SubtituloProduto2;
exports.tituloproduto3 = tituloproduto3;
exports.SubtituloProduto3 = SubtituloProduto3;
exports.tituloproduto4 = tituloproduto4;
exports.SubtituloProduto4 = SubtituloProduto4;
exports.tituloproduto5 = tituloproduto5;
exports.SubtituloProduto5 = SubtituloProduto5;
exports.tituloproduto6 = tituloproduto6;
exports.SubtituloProduto6 = SubtituloProduto6;
exports.tituloproduto7 = tituloproduto7;
exports.SubtituloProduto7 = SubtituloProduto7;
exports.tituloproduto8 = tituloproduto8;
exports.SubtituloProduto8 = SubtituloProduto8;
exports.PreçoProduto1 = PreçoProduto1;
exports.PreçoProduto2 = PreçoProduto2;
exports.PreçoProduto3 = PreçoProduto3;
exports.PreçoProduto4 = PreçoProduto4;
exports.PreçoProduto5 = PreçoProduto5;
exports.PreçoProduto6 = PreçoProduto6;
exports.PreçoProduto7 = PreçoProduto7;
exports.PreçoProduto8 = PreçoProduto8;
exports.botao_menu = botao_menu;
exports.sub_menu = sub_menu;
exports.comandos_de_membros = comandos_de_membros;
exports.menu_dono = menu_dono;
exports.ativacoes_dono = ativacoes_dono;
exports.menu_adm = menu_adm;
exports.ativacoes_adm = ativacoes_adm;
exports.menu_premium = menu_premium;
exports.menu_efeitos = menu_efeitos;
exports.menu_logos = menu_logos;
exports.efeitos_audio_videos = efeitos_audio_videos;
exports.menu_brincadeiras = menu_brincadeiras;
exports.menu_fotoshop = menu_fotoshop;
exports.menu_rpg = menu_rpg;
exports.menu_infos = menu_infos;
exports.inteligencia_artificial = inteligencia_artificial;
exports.menu_downloads = menu_downloads;
exports.menu_informacoes = menu_informacoes;
exports.menu_jogos = menu_jogos;
exports.menu_figurinhas = menu_figurinhas;
exports.jogos_apks = jogos_apks;
exports.menu_nsfw = menu_nsfw;
exports.menu_puxadas = menu_puxadas;
exports.ping = ping;
exports.dono = dono;
exports.avalie = avalie;