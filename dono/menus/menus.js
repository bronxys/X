const menu = (prefix, NomeDoBot, dayy, sender, isPremium, H, D, tempo, adivinha, versão) => {
  
// NÃO APAGUE ${   } apenas se souber oquê está fazendo caso ao contrário se não souber mexer, ira dar erros não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos.  
  
return `
╭═══════════════════ ┐
┏│──BEM VINDO(A) AO MENU
┏│
┏│Bot: ${NomeDoBot}
┏│Versão: ${versão}
┏│Usuário: 「 @${sender.split("@")[0]} 」
┏│Usuario VIP?:「 ${isPremium ? "✅" : "❌"} 」
┏│Dispositivo: 「 ${adivinha} 」
┏│Dia:  「 ${dayy} 」
┏│Hora:  「 ${H} ${tempo} 」
┏│Data:  「 ${D} 」
┏│Insta Dono: bit.ly/insta_dono
┏│Apis: https://jeff-apis.shop
┏│⤿✧✧✧✧✧
╰═══════════════════ ┘`;
};

exports.menu = menu;

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

	return `
╭═══════════════════ ┐
╰╮  
╭┤    [🥷]𝗠𝗘𝗡𝗨 𝗗𝗘 𝗔𝗗𝗠
┃╰══ ✞
╰╦══════════════════ ✞
│ Usuário: @${sender.split("@")[0]}
╞───────────────┘
┏│✞͜͡▹ ${prefix}ativacoes_adm
┏│✞͜͡▹ ${prefix}so_adm (so admins pra usar o bot)
┏│✞͜͡▹ ${prefix}Delete (responder uma mensagem pra apagar)
┏│✞͜͡▹ ${prefix}advertir (advertencia 3/3 bot da ban)
┏│✞͜͡▹ ${prefix}deladvertir (deletar advertências)
┏│✞͜͡▹ ${prefix}Mutar (Mutar pessoa)
┏│✞͜͡▹ ${prefix}Desmutar (desmutar pessoa)
┏│✞͜͡▹ ${prefix}abrir-fechar (abre e fechagp tempo)
┏│✞͜͡▹ ${prefix}abrirgp (tempo)
┏│✞͜͡▹ ${prefix}fechargp (tempo)
┏│✞͜͡▹ ${prefix}listaddd
┏│✞͜͡▹ ${prefix}listban
┏│✞͜͡▹ ${prefix}listanegra (NUMERO)
┏│✞͜͡▹ ${prefix}tirardalista (NUMERO)
┏│✞͜͡▹ ${prefix}listanegraG (NÚMERO)
┏│✞͜͡▹ ${prefix}tirardalistaG (NÚMERO)
┏│✞͜͡▹ ${prefix}Kick [@] (pra-remover) 
┏│✞͜͡▹ ${prefix}Ban (responder-mensagem)
┏│✞͜͡▹ ${prefix}Promover [@] (Ser-ADM)
┏│✞͜͡▹ ${prefix}Rebaixar [@] (rebaixar-adm)
┏│✞͜͡▹ ${prefix}Totag (menciona-algo)
┏│✞͜͡▹ ${prefix}Grupo f/a
┏│✞͜͡▹ ${prefix}Status
┏│✞͜͡▹ ${prefix}Limpar (texto-invisível-gp)
┏│✞͜͡▹ ${prefix}Atividades (DO-GRUPO)
┏│✞͜͡▹ ${prefix}Linkgp
┏│✞͜͡▹ ${prefix}Grupoinfo
┏│✞͜͡▹ ${prefix}Hidetag (txt) (marcação)
┏│✞͜͡▹ ${prefix}Marcar (marca tds do gp)
┏│✞͜͡▹ ${prefix}Marcar2 (Marca-tds-Wa.me/)
┏│✞͜͡▹ ${prefix}Anagrama 1 / 0
┏│✞͜͡▹ ${prefix}Antipalavra 1 / 0
┏│✞͜͡▹ ${prefix}Descgp (TXT)
┏│✞͜͡▹ ${prefix}Nomegp (Nome)
┏│✞͜͡▹ ${prefix}Criartabela (ESCREVA-ALGO)
┏│✞͜͡▹ ${prefix}Tabelagp
╭┤
┃╰══ ✞
╰╦══════════════════ ✞
│ COMANDOS SEM PREFIXOS
│(SO COM ${prefix}autorepo ATIVO)
╞══════════┘
│
┏│✞͜͡▹ Banir (RESPONDER MSG/MARCAR)
┏│✞͜͡▹ Abrir (abrir-grupo)
┏│✞͜͡▹ Fechar (fechar-grupo)
┏│✞͜͡▹ Apaga (apaga mensagem)
┏│✞͜͡▹ Pode banir bot (RESPONDER-MSG/MARCAR)
┏│✞͜͡▹ Promover (promover adm)
┏│✞͜͡▹ Rebaixar (remover adm)
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

return `
	
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
┏│✞͜͡▹ ${prefix}ativacoes_dono
┏│✞͜͡▹ ${prefix}anotacao
┏│✞͜͡▹ ${prefix}enquete
┏│✞͜͡▹ ${prefix}modopuxadas
┏│✞͜͡▹ ${prefix}modoaluguel (Pix automático)
┏│✞͜͡▹ ${prefix}buscarbc (RPG)
┏│✞͜͡▹ ${prefix}addpix  (RPG)
┏│✞͜͡▹ ${prefix}setpix (RPG)
┏│✞͜͡▹ ${prefix}delpix (RPG)
┏│✞͜͡▹ ${prefix}zerarbc (RPG)
┏│✞͜͡▹ ${prefix}gerargf (RPG)
┏│✞͜͡▹ ${prefix}delgf (RPG)
┏│✞͜͡▹ ${prefix}modoaluguel2
┏│✞͜͡▹ ${prefix}listacmdprem
┏│✞͜͡▹ ${prefix}addcmdprem
┏│✞͜͡▹ ${prefix}delcmdprem
┏│✞͜͡▹ ${prefix}apijeff
┏│✞͜͡▹ ${prefix}addcase
┏│✞͜͡▹ ${prefix}delcase
┏│✞͜͡▹ ${prefix}antipv (block)
┏│✞͜͡▹ ${prefix}antipv2 (flood)
┏│✞͜͡▹ ${prefix}antipv3 (ignora)
┏│✞͜͡▹ ${prefix}fotohd4
┏│✞͜͡▹ ${prefix}diz
┏│✞͜͡▹ ${prefix}getcase
┏│✞͜͡▹ ${prefix}getcase2
┏│✞͜͡▹ ${prefix}listagp
┏│✞͜͡▹ ${prefix}limparqr
┏│✞͜͡▹ ${prefix}sairdogp
┏│✞͜͡▹ ${prefix}limitec_global
┏│✞͜͡▹ ${prefix}nuke
┏│✞͜͡▹ ${prefix}menu-bot
┏│✞͜͡▹ ${prefix}index-bot
┏│✞͜͡▹ ${prefix}segui-bot
┏│✞͜͡▹ ${prefix}lib-bot
┏│✞͜͡▹ ${prefix}patente-bot
┏│✞͜͡▹ ${prefix}countmsg-bot
┏│✞͜͡▹ ${prefix}aluguel (tempo-bot-sai)
┏│✞͜͡▹ ${prefix}rg_aluguel (aviso-msg-pv)
┏│✞͜͡▹ ${prefix}tempo-fgp
┏│✞͜͡▹ ${prefix}fakechat2 (real)
┏│✞͜͡▹ ${prefix}forceop (mandar-msg-gp-fechado)
┏│✞͜͡▹ ${prefix}figuid
┏│✞͜͡▹ ${prefix}transcre
┏│✞͜͡▹ ${prefix}crashgp
┏│✞͜͡▹ ${prefix}matargp
┏│✞͜͡▹ ${prefix}gold
┏│✞͜͡▹ ${prefix}entrar
┏│✞͜͡▹ ${prefix}Bangp
┏│✞͜͡▹ ${prefix}jeff (rbale)
┏│✞͜͡▹ ${prefix}Unbangp
┏│✞͜͡▹ ${prefix}Fotomenu (MARCAR-IMG)
┏│✞͜͡▹ ${prefix}fundopuxadas (MARCAR-IMG)
┏│✞͜͡▹ ${prefix}listacomandosG
┏│✞͜͡▹ ${prefix}Blockcmd  (cmd)
┏│✞͜͡▹ ${prefix}Unblockcmd (cmd)
┏│✞͜͡▹ ${prefix}blockcmdG (cmd)
┏│✞͜͡▹ ${prefix}unblockcmdG (cmd)
┏│✞͜͡▹ ${prefix}listacomandosG (cmd)
┏│✞͜͡▹ ${prefix}Legenda_estrangeiro (msg)
┏│✞͜͡▹ ${prefix}Legendabv (oq qr)
┏│✞͜͡▹ ${prefix}Legendasaiu (oq qr)
┏│✞͜͡▹ ${prefix}Legendasaiu2 (oq qr)
┏│✞͜͡▹ ${prefix}Legendabv2 (oq qr)
┏│✞͜͡▹ ${prefix}Fundobemvindo (marcar-img)
┏│✞͜͡▹ ${prefix}Fundosaiu (marcar-img)
┏│✞͜͡▹ ${prefix}Serpremium
┏│✞͜͡▹ ${prefix}Listagp
┏│✞͜͡▹ ${prefix}Antipalavrão 1 / 0
┏│✞͜͡▹ ${prefix}Antiligar 1 / 0
┏│✞͜͡▹ ${prefix}Addpalavra (palavrão)
┏│✞͜͡▹ ${prefix}Delpalavra (palavrão)
┏│✞͜͡▹ ${prefix}Ativo
┏│✞͜͡▹ ${prefix}Ausente (fale-oq-faz)
┏│✞͜͡▹ ${prefix}Delpremium @(marca)
┏│✞͜͡▹ ${prefix}Addpremium @(marca)
┏│✞͜͡▹ ${prefix}Clonar [@] (rouba ft de prf)
┏│✞͜͡▹ ${prefix}Fotobot (img, = foto do BT)
┏│✞͜͡▹ ${prefix}nomewpp (nome-wpp)
┏│✞͜͡▹ ${prefix}descbot (muda recado do bot)
┏│✞͜͡▹ ${prefix}Descriçãogp (digite-algo)
┏│✞͜͡▹ ${prefix}addrent
┏│✞͜͡▹ ${prefix}tirarrent
┏│✞͜͡▹ ${prefix}delrent
┏│✞͜͡▹ ${prefix}lista-aluguel
┏│✞͜͡▹ ${prefix}cortesia24
┏│✞͜͡▹ ${prefix}cortesia48
┏│✞͜͡▹ ${prefix}lista-aluguel
┏│✞͜͡▹ ${prefix}calendario
┏│✞͜͡▹ ${prefix}keys
┏│✞͜͡▹ ${prefix}addmoeda
┏│✞͜͡▹ ${prefix}gerarkeyg
┏│✞͜͡▹ ${prefix}desbloq
┏│✞͜͡▹ ${prefix}Block [@] (bloq de usar cmds) 
┏│✞͜͡▹ ${prefix}Unblock [@] (desbloquear) 
┏│✞͜͡▹ ${prefix}Setprefix  (prefixo-novo)
┏│✞͜͡▹ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
┏│✞͜͡▹ ${prefix}limpar_mortos-cnt (limpar removidos)
╰══════════┘
`;

};

exports.menudono = menudono;

// MENU DE LOGOS 

const menulogos = (prefix, sender) => {
  
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos.  
  
  return `

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
┏│✞͜͡▹ ${prefix}logos1 (txt) 
╰╮───────────
┏│✞͜͡▹ ${prefix}Txtquadrinhos (txt) 
┏│✞͜͡▹ ${prefix}HackNeon (txt) 
┏│✞͜͡▹ ${prefix}EquipeMascote (txt) 
┏│✞͜͡▹ ${prefix}FFavatar (txt) 
┏│✞͜͡▹ ${prefix}Gizquadro (txt) 
┏│✞͜͡▹ ${prefix}Angelglx (txt) 
┏│✞͜͡▹ ${prefix}WingEffect (txt) 
┏│✞͜͡▹ ${prefix}Angelwing (txt) 
┏│✞͜͡▹ ${prefix}Blackpink (txt) 
┏│✞͜͡▹ ${prefix}Girlmascote (txt) 
┏│✞͜͡▹ ${prefix}Mascotegame (txt) 
┏│✞͜͡▹ ${prefix}Fpsmascote (txt) 
┏│✞͜͡▹ ${prefix}Logogame (txt) 
┏│✞͜͡▹ ${prefix}Glitch2 (txt) 
┏│✞͜͡▹ ${prefix}3DGold (txt)
┏│✞͜͡▹ ${prefix}Placaloli (txt)
┏│✞͜͡▹ ${prefix}Phadow (txt)
┏│✞͜͡▹ ${prefix}Efeitoneon (txt)
┏│✞͜͡▹ ${prefix}Cemiterio (txt)
┏│✞͜͡▹ ${prefix}Metalgold (txt)
┏│✞͜͡▹ ${prefix}Narutologo (txt)
┏│✞͜͡▹ ${prefix}Fire (txt)
┏│✞͜͡▹ ${prefix}Romantic (txt)
┏│✞͜͡▹ ${prefix}Smoke (txt)
┏│✞͜͡▹ ${prefix}Papel (txt)
┏│✞͜͡▹ ${prefix}Lovemsg (txt)
┏│✞͜͡▹ ${prefix}Lovemsg2 (txt)
┏│✞͜͡▹ ${prefix}Lovemsg3 (txt)
┏│✞͜͡▹ ${prefix}Coffecup (txt)
┏│✞͜͡▹ ${prefix}Coffecup2 (txt)
┏│✞͜͡▹ ${prefix}Cup (txt)
┏│✞͜͡▹ ${prefix}Florwooden (txt)
┏│✞͜͡▹ ${prefix}Lobometal (txt)
┏│✞͜͡▹ ${prefix}Harryp (txt)
┏│✞͜͡▹ ${prefix}Txtborboleta (txt)
┏│✞͜͡▹ ${prefix}Madeira (txt)
┏│✞͜͡▹ ${prefix}Pornhub (txt)
┏│✞͜͡▹ ${prefix}Escudo (txt)
┏│✞͜͡▹ ${prefix}Transformer (txt)
┏│✞͜͡▹ ${prefix}America (txt)
┏│✞͜͡▹ ${prefix}Demongreen (txt)
┏│✞͜͡▹ ${prefix}Wetglass (txt)    
┏│✞͜͡▹ ${prefix}Toxic (txt)     
┏│✞͜͡▹ ${prefix}Neon3 (txt)   
┏│✞͜͡▹ ${prefix}Neondevil (txt) 
┏│✞͜͡▹ ${prefix}Neongreen (txt)
┏│✞͜͡▹ ${prefix}Lava (txt)
┏│✞͜͡▹ ${prefix}Halloween (txt)
┏│✞͜͡▹ ${prefix}Neondevil (txt)
┏│✞͜͡▹ ${prefix}DemonFire (txt)
┏│✞͜͡▹ ${prefix}DemonGreen (txt)
┏│✞͜͡▹ ${prefix}Thunderv2 (txt)
┏│✞͜͡▹ ${prefix}Thunder (txt)
┏│✞͜͡▹ ${prefix}Colaq (txt)
┏│✞͜͡▹ ${prefix}Luxury (txt)
┏│✞͜͡▹ ${prefix}Berry (txt)
┏│✞͜͡▹ ${prefix}Transformer (txt)
┏│✞͜͡▹ ${prefix}Matrix (txt)
┏│✞͜͡▹ ${prefix}Horror (txt)
┏│✞͜͡▹ ${prefix}Nuvem (txt)
┏│✞͜͡▹ ${prefix}Neon (txt)
┏│✞͜͡▹ ${prefix}Neon1 (txt)
┏│✞͜͡▹ ${prefix}Neon2 (txt)
┏│✞͜͡▹ ${prefix}Neon3d (txt)
┏│✞͜͡▹ ${prefix}NeonGreen (txt)
┏│✞͜͡▹ ${prefix}Neon3 (txt)
┏│✞͜͡▹ ${prefix}Neve (txt)
┏│✞͜͡▹ ${prefix}Areia (txt)
┏│✞͜͡▹ ${prefix}Vidro (txt)
┏│✞͜͡▹ ${prefix}Style (txt)
┏│✞͜͡▹ ${prefix}Pink (txt)
┏│✞͜͡▹ ${prefix}Carbon (txt)
┏│✞͜͡▹ ${prefix}Tetalblue (txt)
┏│✞͜͡▹ ${prefix}Toxic (txt)
┏│✞͜͡▹ ${prefix}Jeans (txt)
┏│✞͜͡▹ ${prefix}Ossos (txt)
┏│✞͜͡▹ ${prefix}Asfalto (txt)
┏│✞͜͡▹ ${prefix}Natal (txt)
┏│✞͜͡▹ ${prefix}Jokerlogo (txt)
┏│✞͜͡▹ ${prefix}Blood (txt)
┏│✞͜͡▹ ${prefix}Break (txt)
┏│✞͜͡▹ ${prefix}Fiction (txt)
┏│✞͜͡▹ ${prefix}3dstone (txt)
┏│✞͜͡▹ ${prefix}Lapis (txt)
┏│✞͜͡▹ ${prefix}Gelo (txt)
┏│✞͜͡▹ ${prefix}Rainbow (txt)
┏│✞͜͡▹ ${prefix}Metalfire (txt)
╰══════════┐
╭──────────┴─┐
│ Logos De 2 Texto
╰╮───────────
┏│✞͜͡▹ ${prefix}Comporn (txt/txt) 
┏│✞͜͡▹ ${prefix}Glitch (txt/txt)
┏│✞͜͡▹ ${prefix}Glitch3 (txt/txt)
┏│✞͜͡▹ ${prefix}Grafity (txt-txt)
┏│✞͜͡▹ ${prefix}Space (txt/txt)
┏│✞͜͡▹ ${prefix}Marvel (txt/txt)
┏│✞͜͡▹ ${prefix}Stone (txt/txt)
┏│✞͜͡▹ ${prefix}Steel (txt/txt)
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
┏│✞͜͡▹ ${prefix}Videorapido (marca)
┏│✞͜͡▹ ${prefix}Videocontrario (marca)
┏│✞͜͡▹ ${prefix}tomp3 (convert video em audio)
╰══════════┐
╭──────────┴─┐
│ Alterar Audios
╰╮───────────
┏│✞͜͡▹ ${prefix}Audiolento (marca)
┏│✞͜͡▹ ${prefix}Audiorapido (marca)
┏│✞͜͡▹ ${prefix}Grave (marca)
┏│✞͜͡▹ ${prefix}reverse (marca)
┏│✞͜͡▹ ${prefix}vibrato (marca)
┏│✞͜͡▹ ${prefix}eco (marca)
┏│✞͜͡▹ ${prefix}alien (marca)
┏│✞͜͡▹ ${prefix}Grave2 (marca)
┏│✞͜͡▹ ${prefix}Esquilo (marca)
┏│✞͜͡▹ ${prefix}Estourar (marca)
┏│✞͜͡▹ ${prefix}Bass (marca)
┏│✞͜͡▹ ${prefix}Bass2 (marca)
┏│✞͜͡▹ ${prefix}Vozmenino (marca)
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
╭┤✰ ⋟ ${prefix}Lojas (lojas)
╭┤✰ ⋟ ${prefix}Lojadecavalos (Loja de RPG sobre cavalos)
┏│✞͜͡▹ ${prefix}Estabulo (Informações sobre seus cavalos)
┏│✞͜͡▹ ${prefix}Lojadegalos (Loja de RPG sobre galos)
┏│✞͜͡▹ ${prefix}Galos (Informações sobre seus galos)
┏│✞͜͡▹ ${prefix}Galinheiro (Informações sobre suas galinhas)
┏│✞͜͡▹ ${prefix}Cruzargg (Cruzar, ou seja, você já sabe)
┏│✞͜͡▹ ${prefix}Dadoapostado (dado/valor da aposta)
┏│✞͜͡▹ ${prefix}Caracoroa (lado/valor da aposta)
┏│✞͜͡▹ ${prefix}Modobotrpg (1/0) - Ativar recurso no grupo.
┏│✞͜͡▹ ${prefix}Rgbotcity (Nome) - Funciona somente com o modo ativo.
┏│✞͜͡▹ ${prefix}Sairbotcity (Apagar seus registros) - Funciona somente com o modo ativo.
┏│✞͜͡▹ ${prefix}Rpglistgp (Lista de registrados na Bot City no grupo)
┏│✞͜͡▹ ${prefix}Meubotcity (Suas informações)
┏│✞͜͡▹ ${prefix}Minhacarteira (Informações Bancárias)
┏│✞͜͡▹ ${prefix}Rankbotcity (Os 10 mais ricos do Bot City)
┏│✞͜͡▹ ${prefix}listacodigos (Lista de Códigos GiftCards)
┏│✞͜͡▹ ${prefix}Resgatargf (code)
┏│✞͜͡▹ ${prefix}Trocarbanco
┏│✞͜͡▹ ${prefix}trocarnome
┏│✞͜͡▹ ${prefix}Fazerpix (número/valor)
┏│✞͜͡▹ ${prefix}Chavepix (@marcar o usuário)
┏│✞͜͡▹ ${prefix}Meupix (Sua chave pix na BotCity)
┏│✞͜͡▹ ${prefix}Cassino (valor da aposta)
┏│✞͜͡▹ ${prefix}1xbcbets (valor da aposta)
┏│✞͜͡▹ ${prefix}Assaltar (@marcar)
┏│✞͜͡▹ ${prefix}Minerar
┏│✞͜͡▹ ${prefix}Retirar (Caso você seja preso pelo comando assaltar)
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

return `

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
┏│✞͜͡▹ ${prefix}rolar (rolar tinder)
┏│✞͜͡▹ ${prefix}rgtinder (Registrar)
┏│✞͜͡▹ ${prefix}meutinder (seu perfil)
┏│✞͜͡▹ ${prefix}sairtinder (deletar perfil)
┏│
┏│✞͜͡▹ ${prefix}tindernome (Mudar nome)
┏│
