const menu = (prefix, NomeDoBot, dayy, sender, isPremium, H, D, tempo, adivinha, versão) => {
  
// NÃO APAGUE ${   } apenas se souber oquê está fazendo caso ao contrário se não souber mexer, ira dar erros não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos.  
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
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

// NÃO APAGUE ${   } apenas se souber oquê está fazendo, caso ao contrário se não souber mexer, ira dar erros não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos.

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
┏│✞͜͡▹ ${prefix}slowed (narca)
┏│✞͜͡▹ ${prefix}reverb (marca
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
┏│✞͜͡▹ ${prefix}rolar (rolar tinder)
┏│✞͜͡▹ ${prefix}rgtinder (Registrar)
┏│✞͜͡▹ ${prefix}meutinder (seu perfil)
┏│✞͜͡▹ ${prefix}sairtinder (deletar perfil)
┏│
┏│✞͜͡▹ ${prefix}tindernome (Mudar nome)
┏│✞͜͡▹ ${prefix}tinderidade (Mudar idade)
┏│✞͜͡▹ ${prefix}tinderbio (Mudar bio)
┏│✞͜͡▹ ${prefix}setgene (Mudar gênero)
┏│✞͜͡▹ ${prefix}setsex (Mudar sexualidade)
┏│✞͜͡▹ ${prefix}setfiltro (Mudar filtro para busca)
┏│✞͜͡▹ ${prefix}tinderfoto (Mudar foto d perfil)
╰══════════┐

╭═══════════════════ ┐
┏│✞͜͡▹ ${prefix}Gay (marca (@))
┏│✞͜͡▹ ${prefix}Feio (marca (@))
┏│✞͜͡▹ ${prefix}Corno (marca (@))
┏│✞͜͡▹ ${prefix}Vesgo (marca (@))
┏│✞͜͡▹ ${prefix}Bebado (marca (@))
┏│✞͜͡▹ ${prefix}Gostoso (marca (@))
┏│✞͜͡▹ ${prefix}Gostosa (marca (@))
┏│✞͜͡▹ ${prefix}Beijo (marca (@))
┏│✞͜͡▹ ${prefix}Matar (marca (@))
┏│✞͜͡▹ ${prefix}Tapa (marca (@))
┏│✞͜͡▹ ${prefix}Chute (marca (@))
┏│✞͜͡▹ ${prefix}Dogolpe (marca (@))   
┏│✞͜͡▹ ${prefix}Nazista (marca (@))
┏│✞͜͡▹ ${prefix}Chance (fale algo) 
┏│✞͜͡▹ ${prefix}quando (fale algo)
┏│✞͜͡▹ ${prefix}teste
┏│✞͜͡▹ ${prefix}batatinha123
┏│✞͜͡▹ ${prefix}suicídar (ira te remover)
┏│✞͜͡▹ ${prefix}Casal   
┏│✞͜͡▹ ${prefix}Rankgay     
┏│✞͜͡▹ ${prefix}Rankgado
┏│✞͜͡▹ ${prefix}Rankcorno  
┏│✞͜͡▹ ${prefix}Rankgostoso
┏│✞͜͡▹ ${prefix}Rankgostosa
┏│✞͜͡▹ ${prefix}Ranknazista
┏│✞͜͡▹ ${prefix}Rankotakus
┏│✞͜͡▹ ${prefix}Rankpau
┏│✞͜͡▹ ${prefix}roletaban
┏│✞͜͡▹ ${prefix}casar (marca msg ou @)
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
┏│✞͜͡▹ ${prefix}add_botgp
┏│✞͜͡▹ ${prefix}grupo_figurinhas
┏│✞͜͡▹ ${prefix}seguidores-insta
┏│✞͜͡▹ ${prefix}Infoduelo
┏│✞͜͡▹ ${prefix}botentra
┏│✞͜͡▹ ${prefix}planos
┏│✞͜͡▹ ${prefix}alugar
┏│✞͜͡▹ ${prefix}infoalugar
┏│✞͜͡▹ ${prefix}lojavip
┏│✞͜͡▹ ${prefix}infovip
┏│✞͜͡▹ ${prefix}me
┏│✞͜͡▹ ${prefix}recarregar
┏│✞͜͡▹ ${prefix}moedas
┏│✞͜͡▹ ${prefix}minhaskey
┏│✞͜͡▹ ${prefix}Infotransmitir
┏│✞͜͡▹ ${prefix}Infoaluguel
┏│✞͜͡▹ ${prefix}InfoMultiPrefixo
┏│✞͜͡▹ ${prefix}InfoBemvindo
┏│✞͜͡▹ ${prefix}Infopalavrão
┏│✞͜͡▹ ${prefix}Infolistanegra
┏│✞͜͡▹ ${prefix}Infobancarac
┏│✞͜͡▹ ${prefix}Infovotação
┏│✞͜͡▹ ${prefix}InfoBanghost
┏│✞͜͡▹ ${prefix}Infosorteio 
┏│✞͜͡▹ ${prefix}InfoAnotação
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
│ Usuário: @${sender.split("@")[0]}
╰══════════┐
╭──────────┴─┐
┏│✞͜͡▹ ${prefix}Legenda (marcar)-(img)
┏│✞͜͡▹ ${prefix}Legenda2 (marcar)-(img)
┏│✞͜͡▹ ${prefix}fotohd (Marca uma imagem)
┏│✞͜͡▹ ${prefix}fotohd2 (Marca uma imagem)
┏│✞͜͡▹ ${prefix}fotohd3 (Marca uma imagem)
┏│✞͜͡▹ ${prefix}removebg (Marca uma imagem)
┏│✞͜͡▹ ${prefix}fotozombie (marca-imagem)
┏│✞͜͡▹ ${prefix}fotocartoon (marca-imagem
┏│✞͜͡▹ ${prefix}comunismo (marcar)-(img)
┏│✞͜͡▹ ${prefix}kiss (marcar)-(img)
┏│✞͜͡▹ ${prefix}affect (marcar)-(img)
┏│✞͜͡▹ ${prefix}mms (marcar)-(img)
┏│✞͜͡▹ ${prefix}borross (marcar)-(img)
┏│✞͜͡▹ ${prefix}blur (marcar)-(img)
┏│✞͜͡▹ ${prefix}beautiful (marcar)-(img)
┏│✞͜͡▹ ${prefix}circle (marcar)-(img)
┏│✞͜͡▹ ${prefix}deleted (marcar)-(img)
┏│✞͜͡▹ ${prefix}invert (marcar)-(img)
┏│✞͜͡▹ ${prefix}facepalm (marcar)-(img)
┏│✞͜͡▹ ${prefix}jail (marcar)-(img)
┏│✞͜͡▹ ${prefix}rip (marcar)-(img)
┏│✞͜͡▹ ${prefix}wasted (marcar)-(img)
┏│✞͜͡▹ ${prefix}wanted (marcar)-(img)
┏│✞͜͡▹ ${prefix}sepia (marcar)-(img)
┏│✞͜͡▹ ${prefix}pixelate (marcar)-(img)
┏│✞͜͡▹ ${prefix}Procurado (marcar)-(img)
┏│✞͜͡▹ ${prefix}Hitler (marcar)-(img)
┏│✞͜͡▹ ${prefix}Preso (marcar)-(img)
┏│✞͜͡▹ ${prefix}Lixo (marcar)-(img)
┏│✞͜͡▹ ${prefix}Deletem (marcar)-(img)
┏│✞͜͡▹ ${prefix}Morto (marcar)-(img) 
┏│✞͜͡▹ ${prefix}Lgbt (marcar)-(img)
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
┏│✞͜͡▹ Jeff (IA)
┏│✞͜͡▹ ${prefix}doacao (doações)
┏│✞͜͡▹ ${prefix}apoiar
┏│✞͜͡▹ ${prefix}xbot (cvs com bot)
┏│✞͜͡▹ ${prefix}gpt (sua pergunta)
┏│✞͜͡▹ ${prefix}gptvoz (sua pergunta)
┏│✞͜͡▹ ${prefix}gpt4 (sua pergunta)
┏│✞͜͡▹ ${prefix}gpt4voz (sua pergunta)
┏│✞͜͡▹ ${prefix}gptblackbox (sua pergunta)
┏│✞͜͡▹ ${prefix}gptbkvoz (sua pergunta)
┏│✞͜͡▹ ${prefix}bard (sua pergunta)
┏│✞͜͡▹ ${prefix}bardvoz (sua pergunta)
┏│✞͜͡▹ ${prefix}fotohd (marca-imagem)
┏│✞͜͡▹ ${prefix}Infobot (audio-info)
┏│✞͜͡▹ ${prefix}Idiomas (idiomas)
┏│✞͜͡▹ ${prefix}Bug (QUESTIONE) 
┏│✞͜͡▹ ${prefix}Sugestao (DICA) 
┏│✞͜͡▹ ${prefix}Avalie (O-QUAO-BOM) 
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
┏│✞͜͡▹ ${prefix}Play (NOME-LINK)
┏│✞͜͡▹ ${prefix}play2 (NOME-LINK)
┏│✞͜͡▹ ${prefix}play3 (NOME-LINK)
┏│✞͜͡▹ ${prefix}Play_audio (NOME-LINK)
┏│✞͜͡▹ ${prefix}Play_audio2 (NOME-LINK)
┏│✞͜͡▹ ${prefix}play_audio3 (NOME-LINK)
┏│✞͜͡▹ ${prefix}play_video (NOME-LINK)
┏│✞͜͡▹ ${prefix}play_video2 (NOME-LINK)
┏│✞͜͡▹ ${prefix}play_video3 (NOME-LINK)
┏│✞͜͡▹ ${prefix}playdoc (NOME-LINK)
┏│✞͜͡▹ ${prefix}Playmp4 (NOME-LINK)
┏│✞͜͡▹ ${prefix}Ytsearch (NOME)
┏│✞͜͡▹ ${prefix}Ytsearch2 (NOME)
┏│✞͜͡▹ ${prefix}Ytmp4 (NOME-LINK) 
┏│✞͜͡▹ ${prefix}Ytmp3 (NOME-LINK) 
┏│✞͜͡▹ ${prefix}Tiktok_audio (LINK)
┏│✞͜͡▹ ${prefix}Tiktok_video (LINK)
┏│✞͜͡▹ ${prefix}tiktok_audio2 (LINK)
┏│✞͜͡▹ ${prefix}tiktok_video2 (LINK)
┏│✞͜͡▹ ${prefix}Insta_audio (LINK)
┏│✞͜͡▹ ${prefix}Insta_video (LINK)
┏│✞͜͡▹ ${prefix}Face_audio (LINK)
┏│✞͜͡▹ ${prefix}Face_video (LINK)
┏│✞͜͡▹ ${prefix}Twitter_audio (LINK)
┏│✞͜͡▹ ${prefix}Twitter_video (LINK)
┏│✞͜͡▹ ${prefix}soundcloud (LINK)
┏│✞͜͡▹ ${prefix}shazam (MARQUE-AUDIO/VIDEO)
┏│✞͜͡▹ ${prefix}audiomeme (nome-meme)
┏│✞͜͡▹ ${prefix}kwai (LINK)
┏│✞͜͡▹ ${prefix}aptoide (nome)
┏│✞͜͡▹ ${prefix}aptoide2 (nome)
┏│✞͜͡▹ ${prefix}mediafire (link)
┏│✞͜͡▹ ${prefix}mediafire2 (link)
┏│✞͜͡▹ ${prefix}gitclone (Link-do-repo)
┏│✞͜͡▹ ${prefix}pinterest (oque quer)
┏│✞͜͡▹ ${prefix}pinterest2 (oque quer)
┏│✞͜͡▹ ${prefix}imagem (oque quer)
┏│✞͜͡▹ ${prefix}imagine (oque quer)
┏│✞͜͡▹ ${prefix}pesquisar (oque quer)
┏│✞͜͡▹ ${prefix}playstore (oque quer)
┏│✞͜͡▹ ${prefix}Imgpralink (MARCAR)
┏│✞͜͡▹ ${prefix}Videopralink (MARCAR-V)
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
┏│✞͜͡▹ ${prefix}Ping (VELO)
┏│✞͜͡▹ ${prefix}Atividade
┏│✞͜͡▹ ${prefix}Rankativo
┏│✞͜͡▹ ${prefix}Checkativo (@MARCAR)
┏│✞͜͡▹ ${prefix}Ranklevel (DE-TODOS) 
┏│✞͜͡▹ ${prefix}signo
┏│✞͜͡▹ ${prefix}clima (cidade)
┏│✞͜͡▹ ${prefix}contar (texto)
┏│✞͜͡▹ ${prefix}transcrever (marque-audio)
┏│✞͜͡▹ ${prefix}validarcpf 13226xxxxxx
┏│✞͜͡▹ ${prefix}infonumero 5532xxxxxx
┏│✞͜͡▹ ${prefix}infoproxy (link)
┏│✞͜͡▹ ${prefix}stalkig (Digite o nome Do insta)
┏│✞͜͡▹ ${prefix}stalkttk (Digite o nome Do tiktok)
┏│✞͜͡▹ ${prefix}print (url)
┏│✞͜͡▹ que horas sao?
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
┏│✞͜͡▹ ${prefix}Jogodavelha (@Marcar) 
┏│✞͜͡▹ ${prefix}Anagrama (1/0)
┏│✞͜͡▹ ${prefix}Gartic (1/0)
┏│✞͜͡▹ ${prefix}qualmusic (1/0)
┏│✞͜͡▹ ${prefix}Quizanimal (1/0)
┏│✞͜͡▹ ${prefix}Enigma (1/0)
┏│✞͜͡▹ ${prefix}R-forca (Letra)
┏│✞͜͡▹ ${prefix}Resetforca (Resetar)
┏│✞͜͡▹ ${prefix}Jogodaforca (Iniciar)
┏│✞͜͡▹ ${prefix}Vab (Você prefere?)
┏│✞͜͡▹ ${prefix}Eununca (Eu nunca, eu já)
┏│✞͜͡▹ ${prefix}Ppt (Pedra/Papel/Tesoura) 
┏│✞͜͡▹ ${prefix}Cassino
┏│✞͜͡▹ ${prefix}Mina (coordenada(s))
┏│✞͜͡▹ ${prefix}Minado (dificuldade)
┏│✞͜͡▹ ${prefix}Minareset (resetar)
┏│✞͜͡▹ ${prefix}Mineshelp (info)
┏│✞͜͡▹ ${prefix}Minatips (dicas)
┏│✞͜͡▹ ${prefix}Akinator (iniciar jogo)
┏│✞͜͡▹ ${prefix}Resetaki (resetar akinator)
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
┏│✞͜͡▹ ${prefix}Attp (TEXTO)
┏│✞͜͡▹ ${prefix}Attp2 (TEXTO)
┏│✞͜͡▹ ${prefix}Attp3 (TEXTO)
┏│✞͜͡▹ ${prefix}Ttp (TEXTO)
┏│✞͜͡▹ ${prefix}Ttp2 (TEXTO)
┏│✞͜͡▹ ${prefix}Ttp3 (TEXTO)
┏│✞͜͡▹ ${prefix}Ttp4 (TEXTO)
┏│✞͜͡▹ ${prefix}qc (TEXTO)
┏│✞͜͡▹ ${prefix}amongus
┏│✞͜͡▹ ${prefix}buscar_sticker
┏│✞͜͡▹ ${prefix}telegram_figu (link do pack)
┏│✞͜͡▹ ${prefix}Fsticker (MARCAR-FOTO)
┏│✞͜͡▹ ${prefix}Sticker (MARCAR-FOTO)
┏│✞͜͡▹ ${prefix}stickera (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_flork (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_emoji (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_aleatoria (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_memes (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_anime (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_coreana (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_bebe (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_desenho (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_animais (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_engracadas (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_raiva (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_roblox (QUANTIDADE)
┏│✞͜͡▹ ${prefix}figu_ale (QUANTIDADE)
┏│✞͜͡▹ ${prefix}Emoji 😏/whatsapp
┏│✞͜͡▹ ${prefix}Emoji 🙂/google
┏│✞͜͡▹ ${prefix}Emoji 🙂/apple
┏│✞͜͡▹ ${prefix}Emoji 🙂/sansung
┏│✞͜͡▹ ${prefix}Emoji 🙂/Microsoft
┏│✞͜͡▹ ${prefix}Emoji 🙂/twitter
┏│✞͜͡▹ ${prefix}Emoji 🙂/Facebook
┏│✞͜͡▹ ${prefix}Emoji 😏/joypixels
┏│✞͜͡▹ ${prefix}Emoji 🙂/openmoji
┏│✞͜͡▹ ${prefix}Emoji 🙂/htc
┏│✞͜͡▹ ${prefix}Emojimix 😉+🙂
┏│✞͜͡▹ ${prefix}Emojimix2 😉+🙂
┏│✞͜͡▹ ${prefix}Toimg (MARCAR-FIGU)
┏│✞͜͡▹ ${prefix}Togif (MARCAR-FIGU)
┏│✞͜͡▹ ${prefix}Roubar (TEXT/TEXT)
┏│✞͜͡▹ ${prefix}take (Figu com sua marca D'agua)
┏│✞͜͡▹ ${prefix}rgtake (Resgistra sua Marca D'agua)
┏│✞͜͡▹ ${prefix}rntake (Renomeia Sua Marca D'agua)
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
┏│✞͜͡▹ 🔞${prefix}plaquinha2 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha3 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha4 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha5 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha6 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha7 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha8 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha9 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha10 (seu nome)
┏│✞͜͡▹ 🔞${prefix}plaquinha11 (seu nome))
┏│✞͜͡▹ 🔞${prefix}xvideos (nome/link)
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
┏│✞͜͡▹ ${prefix}Gtts (LINGUAGEM + TEXTO)
┏│✞͜͡▹ ${prefix}reversetxt (texto)
┏│✞͜͡▹ ${prefix}enquete
┏│✞͜͡▹ ${prefix}qrcode (texto)
┏│✞͜͡▹ ${prefix}lerqr (marca-imagem-QR)
┏│✞͜͡▹ ${prefix}fonte (texto)
┏│✞͜͡▹ ${prefix}audvizu (marca-audio)
┏│✞͜͡▹ ${prefix}covidbr
┏│✞͜͡▹ ${prefix}metadinha
┏│✞͜͡▹ ${prefix}loli
┏│✞͜͡▹ ${prefix}gethtml
┏│✞͜͡▹ ${prefix}Tagme 
┏│✞͜͡▹ ${prefix}Tabela (LETRAS) 
┏│✞͜͡▹ ${prefix}Conselhobiblico
┏│✞͜͡▹ ${prefix}Simi (FALE-ALGO)  
┏│✞͜͡▹ ${prefix}Perfil
┏│✞͜͡▹ ${prefix}Calcular 1 + 1
┏│✞͜͡▹ ${prefix}Traduzir pt/cat
┏│✞͜͡▹ ${prefix}Fazernick (NICK)
┏│✞͜͡▹ ${prefix}Fazernick2 (NICK)
┏│✞͜͡▹ ${prefix}sn (sim ou nao)
┏│✞͜͡▹ ${prefix}Bot
┏│✞͜͡▹ ${prefix}tempemail (gera email temporário)
╰══════════┘
`;
};

exports.outroscmds = outroscmds;


const puxadas = (prefix, sender) => {

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json e de outros arquivos. 

return `

╭═══════════════════ ┐
╰╮  
╭┤        [🕵️‍♂️]𝗣𝗨𝗫𝗔𝗗𝗔𝗦
┃╰══ ✞
╰╦══════════════════ ✞
┏│✞͜͡▹ ${prefix}nome
┏│✞͜͡▹ ${prefix}nome2  
┏│✞͜͡▹ ${prefix}nome3  
┏│✞͜͡▹ ${prefix}nome4
┏│✞͜͡▹ ${prefix}cpf
┏│✞͜͡▹ ${prefix}cpf1  
┏│✞͜͡▹ ${prefix}cpf2  
┏│✞͜͡▹ ${prefix}cpf3  
┏│✞͜͡▹ ${prefix}cpf4  
┏│✞͜͡▹ ${prefix}cpf5  
┏│✞͜͡▹ ${prefix}tel1  
┏│✞͜͡▹ ${prefix}tel2  
┏│✞͜͡▹ ${prefix}fotorj 12736105710
┏│✞͜͡▹ ${prefix}telefonefixo  
┏│✞͜͡▹ ${prefix}placa1  
┏│✞͜͡▹ ${prefix}placa2  
┏│✞͜͡▹ ${prefix}bin  
┏│✞͜͡▹ ${prefix}site  
┏│✞͜͡▹ ${prefix}ip  
┏│✞͜͡▹ ${prefix}cep  
┏│✞͜͡▹ ${prefix}cep2
┏│✞͜͡▹ ${prefix}vizinhos  
┏│✞͜͡▹ ${prefix}cnpj  
┏│✞͜͡▹ ${prefix}score  
┏│✞͜͡▹ ${prefix}titulo  
┏│✞͜͡▹ ${prefix}email  
┏│✞͜͡▹ ${prefix}vacina  
┏│✞͜͡▹ ${prefix}parentes  
┏│✞͜͡▹ ${prefix}rg  
┏│✞͜͡▹ ${prefix}rg2  
┏│✞͜͡▹ ${prefix}senha  
┏│✞͜͡▹ ${prefix}mae  
┏│✞͜͡▹ ${prefix}pai  
┏│✞͜͡▹ ${prefix}chassi  
┏│✞͜͡▹ ${prefix}motor  
┏│✞͜͡▹ ${prefix}bemeficios  
┏│✞͜͡▹ ${prefix}impostos  
┏│✞͜͡▹ ${prefix}nascimento  
┏│✞͜͡▹ ${prefix}pix  
┏│✞͜͡▹ ${prefix}cns  
┏│✞͜͡▹ ${prefix}cns2  
┏│✞͜͡▹ ${prefix}correios  
┏│✞͜͡▹ ${prefix}dominio  
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

///////  FIM DOS MENUS  \\\\\\\\\






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

1️⃣⧽ R$ 5.00 (15 dias)
2️⃣⧽ R$ 10.00 (30 dias)
3️⃣⧽ R$ 18.00 (60 dias)
4️⃣⧽ R$ 27.00 (90 dias)
5️⃣⧽ R$ 35.00 (120 dias)
`;
};


//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 1


// TITULO
const TituloAluguel1 = (prefix, sender) => {return `1️⃣⧽ R$ 5.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel1 = (prefix, sender) => {return `
> (+bônus R$ 0.50)`;
};

// PREÇO
const preço1 = (prefix, sender) => {return `5.5`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO

//╰╦══════════════════ ✞





//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 2


// TITULO
const TituloAluguel2 = (prefix, sender) => {return `2️⃣⧽ R$ 10.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel2 = (prefix, sender) => {return `
> (+bônus R$ 1.00)`;
};

// PREÇO
const preço2 = (prefix, sender) => {return `11`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞






//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 3


// TITULO
const TituloAluguel3 = (prefix, sender) => {return `3️⃣⧽ R$ 20.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel3 = (prefix, sender) => {return `
> (+bônus R$ 2.00)`;
};

// PREÇO
const preço3 = (prefix, sender) => {return `22`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞








//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 4


// TITULO
const TituloAluguel4 = (prefix, sender) => {return `4️⃣⧽ R$ 30.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel4 = (prefix, sender) => {return `
> (+bônus R$ 3.00)`;
};

// PREÇO
const preço4 = (prefix, sender) => {return `33`;
};

// MINI EXPLICAÇÃO DOS VALORES, POE O VALOR DEPOIS UM PONTO E O VALOR DO BONUS EXEMPLO: 5.5  PREÇO SERA 5 REAIS E O BONUS 5 

//CASO O VALOR SEJA MAIOR QUE 10 REAIS, EXEMPLO: VOCE QUER POR O VALOR DE 10 REAIS VOCE SOMA O VALOR + O BONUS IRIA FICAR 11 REAIS COM 1 REAL DE BONUS ESPERO QUE TENHA ENTENDIDO


//╰╦══════════════════ ✞





//╭═══════════════════ ┐

//      PRODUTO ALUGUEL 5


// TITULO
const TituloAluguel5 = (prefix, sender) => {return `5️⃣⧽ R$ 40.00 Reais`;
};

// SUBTITULO
const SubtituloAluguel5 = (prefix, sender) => {return `
> (+bônus R$ 4.00)`;
};

// PREÇO
const preço5 = (prefix, sender) => {return `44`;
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