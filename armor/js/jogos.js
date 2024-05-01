const fs = require('fs')

exports.palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'jefferson',
embaralhada: 'nosreffej',
dica: 'Meu Papai ^-^'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'CIMENTO',
embaralhada: 'OMCNITE',
dica: 'CONSTRUÇÕES'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'HRROAOCC',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'XBOT',
embaralhada: 'BXOT',
dica: 'Filho do Jeff ^-^'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'ALEATORY',
embaralhada: 'YRTALOEA',
dica: 'NOME'
},
{  
original: 'CAFIN',
embaralhada: 'NFCIA',
dica: 'TIPO DE GAY'
},
{    
original: 'KONEKO',
embaralhada: 'NOEKKO',
dica: 'NOME'
},
{
original: 'RAPOSA',
embaralhada: 'APRSAO',
dica: 'ANIMAL'
},
{
original: 'INFERNO',
embaralhada: 'RNOFNIE',
dica: 'LUGAR'
},
{   
original: 'RINOCERONTE',
embaralhada: 'NTERRECNIOO',
dica: 'ANIMAL'
},
{ 
original: 'PASTOR',
embaralhada: 'STRPAO',
dica: 'BATIZADO'
},
{
original: 'BONITO',
embaralhada: 'NTBIOO',
dica: 'COMENTÁRIO'
},
{       
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]	


exports.showdomilhao = [
{
original: 'AMEIXA',
foto: 'https://telegra.ph/file/84928021bd4e6dfe8ff8c.jpg'
}, 
{
original: '100',
foto: 'https://telegra.ph/file/1530a82843034f1ede5d5.jpg'
}
]	

exports.quizanimais = [
{
original: 'PORQUINHO DA ÍNDIA',
foto: 'https://telegra.ph/file/617e247a4fbb63d299198.jpg'
},
{
original: 'HAMSTER',
foto: 'https://telegra.ph/file/a478979f342ac1746a645.jpg'
},
{
original: 'ROTTWEILER',
foto: 'https://telegra.ph/file/a10ad7df6ab6a2312a1f9.jpg'
},
{
original: 'FLOPPA',
foto: 'https://telegra.ph/file/7633abcd83b8a587f418d.jpg'
},
{
original: 'GUAXINIM',
foto: 'https://telegra.ph/file/3800c7048d04a1c3dbc4e.jpg'
},
{
original: 'ZEBRA',
foto: 'https://telegra.ph/file/a08e224344e34aa916972.jpg'
},
{
original: 'CARNEIRO',
foto: 'https://telegra.ph/file/096342c8c7815ba9d83be.jpg'
},
{
original: 'BODE',
foto: 'https://telegra.ph/file/ff574a82178089f453444.jpg'
},
{
original: 'MAMUTE',
foto: 'https://telegra.ph/file/00e445dde6c036a0c0df5.jpg'
},
{
original: 'ALPACA',
foto: 'https://telegra.ph/file/a201b23b179392f1cdd7f.jpg'
},
{
original: 'PORCO ESPINHO',
foto: 'https://telegra.ph/file/7b180efc77c8ab6e9a24a.jpg'
},
{
original: 'QUOKKA',
foto: 'https://telegra.ph/file/3042e66a22c6d0fb6e0cd.jpg'
},
{
original: 'PANDA VERMELHO',
foto: 'https://telegra.ph/file/a6517debde47b846073cc.jpg'
},
{
original: 'PEIXE GOTA',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'PEIXE MANDARIM',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'DRAGÃO DE KOMODO',
foto: 'https://telegra.ph/file/d4c36b449f4c781533f3c.jpg'
},
{
original: 'LEOPARDO',
foto: 'https://telegra.ph/file/0016017b9d28a3b6d027a.jpg'
},
{
original: 'FURÃO',
foto: 'https://telegra.ph/file/e352b4831db11c20a3c62.jpg'
},
{
original: 'LEOPARDO',
foto: 'https://telegra.ph/file/71f5f532ced0fddc08f5b.jpg'
},
{
original: 'LEBRE',
foto: 'https://telegra.ph/file/89f9a46ce660261279477.jpg'
},
{
original: 'MARRECO',
foto: 'https://telegra.ph/file/aa41bde6c4c350ec9d0d4.jpg'
},
{
original: 'GANSO',
foto: 'https://telegra.ph/file/9ab69884414feefc9c109.jpg'
},
{
original: 'CAVALO MARINHO',
foto: 'https://telegra.ph/file/e4cee57d5b731dfffa5d8.jpg'
},
{
original: 'CROCODILO',
foto: 'https://telegra.ph/file/b4483f9a7077fd29a137f.jpg'
},
{
original: 'ORNITORRINCO',
foto: 'https://telegra.ph/file/8ffdd62da1834433112be.jpg'
},
{
original: 'HUSKY SIBERIANO',
foto: 'https://telegra.ph/file/07b98023259637951ba8f.jpg'
},
{
original: 'CAPIVARA',
foto: 'https://telegra.ph/file/54f20cbd80737fe45a284.jpg'
}
]

exports.enigmaArchive = [
{
numero: "ENIGMA 1",
respostaEne: "O FÓSFORO",
charada: "Imagine que você está em uma sala escura ao lado de Sherlock. Nela há um fósforo, uma lâmpada de querosene, uma vela e uma lareira. O que você acenderia primeiro?"
},
{
numero: "ENIGMA 2",
respostaEne: "SEGREDO",
charada: "O detetive Sherlock encontrou um bilhete que faz parte de uma pista de um mistério que precisa ser solucionado. “Se você me tem, quer me compartilhar; se você não me compartilha, você me manteve. O que eu sou?”"
},
{
numero: "ENIGMA 3",
respostaEne: "NENHUM",
charada: "Watson e Sherlock adoram brincar com enigmas para treinar o método científico. Ajude-os a encontrar a resposta desse enigma: um macaco, um esquilo e um pássaro estão correndo para o topo de um coqueiro. Quem pegará a banana primeiro, o macaco, o esquilo ou o pássaro?"
},
{
numero: "ENIGMA 4",
respostaEne: "ECO",
charada: "Eu falo, mas não tenho boca. Eu ouço, mas não tenho ouvidos. Não tenho corpo, mas vivo com o vento. Quem sou eu?"
},
{
numero: "ENIGMA 5",
respostaEne: "IDADE",
charada: "Eu sou algo que as pessoas amam ou odeiam. Eu mudo tanto a aparência das pessoas quanto seus pensamentos. Se uma pessoa cuida de si mesma, eu subo ainda mais. Eu engano algumas pessoas. E para outras, sou um verdadeiro mistério. Algumas pessoas bem que tentam me esconder, mas uma hora, inevitavelmente, eu apareço. Não importa o que as pessoas tentem, eu jamais cairei. Quem sou eu?"
},
{
numero: "ENIGMA 6",
respostaEne: "SOMBRA",
charada: "Tenho apenas uma cor, mas posso ter vários tamanhos. Estou presente quando faz sol. Na chuva, jamais! Passo todo o tempo no chão, mas nunca fico sujo. Não faço mal algum e não posso sentir dor. Quem sou eu?"
},
{
numero: "ENIGMA 7",
respostaEne: "12 ANOS",
charada: "Perguntaram para Maria quantos anos ela tem. Maria respondeu que em dois anos terá o dobro da idade que ela tinha há cinco anos. Quantos anos Maria tem?"
},
{
numero: "ENIGMA 8",
respostaEne: "ESCURIDÃO",
charada: "Quanto mais houver de mim, menos você verá. Quem sou eu?"
},
{
numero: "ENIGMA 9",
respostaEne: "ESPONJA",
charada: "Sou cheio de buracos, mas ainda assim consigo reter muita água. Quem sou eu?"
},
{
numero: "ENIGMA 9",
respostaEne: "COTOVELO DIREITO",
charada: "O que você pode segurar com a sua mão esquerda, mas jamais com a direita?"
},
{
numero: "ENIGMA 10",
respostaEne: "ÂNCORA",
charada: "Quando precisa de mim, você me atira para longe, até um lugar onde ninguém pode me ver. Mas quando já não precisa mais, você me traz de volta. Quem sou eu?"
},
{
numero: "ENIGMA 11",
respostaEne: "AS PALAVRAS",
charada: "Nós podemos machucar sem fazer um único movimento. Podemos envenenar sem tocar. Carregamos a verdade e a mentira. E não devemos ser julgadas pelo nosso tamanho Quem somos nós?"
},
{
numero: "ENIGMA 12",
respostaEne: "UMA TESOURA",
charada: "Ponha os dedos nos meus olhos que eu abrirei as minhas potentes mandíbulas. E vou devorar tudo o que vier pela frente: roupas, penas, papéis. Quem sou eu?"
},
{
numero: "ENIGMA 13",
respostaEne: "ALFABETO",
charada: "Eu posso guardar tudo dentro de mim. Tudo o que você pode imaginar: o vento, as florestas, o mundo, o universo e até Deus. Tudo o que vier à sua cabeça você pode encontrar dentro de mim. Quem sou eu?"
},
{
numero: "ENIGMA 14",
respostaEne: "DINHEIRO FALSO",
charada: "Quem me faz não diz que faz. Quem me tem não sabe que tem. E quem sabe não me quer ter de jeito nenhum. Quem sou eu?"
},
{
numero: "ENIGMA 15",
respostaEne: "ESCURIDÃO",
charada: "Quanto mais houver de mim, menos você verá. Quem sou eu?"
},
{
numero: "ENIGMA 16",
respostaEne: "A CONFIANÇA",
charada: "O que pode ser quebrada, mas nunca segurada?"
},
{
numero: "ENIGMA 17",
respostaEne: "OPÇÃO",
charada: "Se há três, você tem três. Se há duas, você tem duas. Mas se há uma, você não tem nenhuma. O que é?"
},
{
numero: "ENIGMA 18",
respostaEne: "O PADRE",
charada: "Já casei muitas vezes, mas estou sempre solteiro. Quem sou eu?"
},
{
numero: "ENIGMA 19",
respostaEne: "JOÃO",
charada: "A mãe do João teve cinco filhos. O primeiro se chamava Dadá, o segundo Dedé, o terceiro, Didi, e o quarto, Dodó. Como se chamava o quinto filho?"
},
{
numero: "ENIGMA 20",
respostaEne: "O CAIXÃO",
charada: "O que é, o que é: quem faz não quer, quem compra não usa e quem usa não fica sabendo?"
}
]

exports.garticArchives = [
{
pergunta: 'Aplicativo',
imagem: 'https://telegra.ph/file/dfa10e1cd64bfd575b26a.jpg',
letra_inicial: 'N',
contem_traços: '❌️️',
resposta: 'NETFLIX'
},
{
pergunta: 'Aplicativo',
imagem: 'https://telegra.ph/file/070fbfa1cccd65681f3fa.jpg',
letra_inicial: 'F',
contem_traços: '❌️️',
resposta: 'FACEBOOK'
},
{
pergunta: 'Desenho',
imagem: 'https://telegra.ph/file/1e344b9cde13d5a6c6095.jpg',
letra_inicial: 'TO',
contem_traços: '❌️️',
resposta: 'TOM E JERRY'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/af0e70ea5a92cbfc71f43.jpg',
letra_inicial: 'GU',
contem_traços: '✅️️️',
resposta: 'GUARDA-CHUVA'
},
{
pergunta: 'Profissão',
imagem: 'https://telegra.ph/file/cbea80472e3d2624676a6.jpg',
letra_inicial: 'J',
contem_traços: '❌️️️️',
resposta: 'JUIZ'
},
{
pergunta: 'Aplicativo',
imagem: 'https://telegra.ph/file/b5a9a0de5e222b5084a8a.jpg',
letra_inicial: 'SN',
contem_traços: '❌️️',
resposta: 'SNAPCHAT'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/5721a0cde0166bee675e5.jpg',
letra_inicial: 'E',
contem_traços: '❌️️',
resposta: 'ESPANHA'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/bdb05184d2d6f5a7d1ecf.jpg',
letra_inicial: 'D',
contem_traços: '❌️️',
resposta: 'DARDOS'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/317913121ec9ca6aae71b.jpg',
letra_inicial: 'D',
contem_traços: '❌️️',
resposta: 'DOMINÓ'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/63eca8c97ed165bfecfe5.jpg',
letra_inicial: 'C',
contem_traços: '❌️️',
resposta: 'CANADÁ'
},
{
pergunta: 'Jogos',
imagem: 'https://telegra.ph/file/68ea5f4b182ae4c501a32.jpg',
letra_inicial: 'X',
contem_traços: '❌️️',
resposta: 'XADREZ'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/a29ac8b0638d9e23bdab0.jpg',
letra_inicial: 'A',
contem_traços: '❌️️',
resposta: 'A ORIGEM'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/b3e2aaca939ed0cdf7a73.jpg',
letra_inicial: 'OS',
contem_traços: '❌️️',
resposta: 'OS SETE SAMURAIS'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/ab11fa68eda5abe19562b.jpg',
letra_inicial: 'SE',
contem_traços: '❌️️',
resposta: 'SENHOR DOS ANÉIS'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/de030e592fecdc2cf0d20.jpg',
letra_inicial: 'JU',
contem_traços: '❌️️',
resposta: 'JUMANJI'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/aafcb73c2dd10aef1bd47.jpg',
letra_inicial: 'S',
contem_traços: '❌️️',
resposta: 'SONIC'
},
{
pergunta: 'Série',
imagem: 'https://telegra.ph/file/e0c905d9630bf9d36df77.jpg',
letra_inicial: 'TH',
contem_traços: '❌️️',
resposta: 'THE WALKING DEAD'
},
{
pergunta: 'Desenho',
imagem: 'https://telegra.ph/file/d30cac0c8bb2159d38192.jpg',
letra_inicial: 'SI',
contem_traços: '❌️️',
resposta: 'SIMPSONS'
},
{
pergunta: 'Série',
imagem: 'https://telegra.ph/file/c2a993a353fcca61242e4.jpg',
letra_inicial: 'ST',
contem_traços: '❌️️',
resposta: 'STRANGER THINGS'
},
{
pergunta: 'Série',
imagem: 'https://telegra.ph/file/fac611a1d9e2c2fc14957.jpg',
letra_inicial: 'PE',
contem_traços: '❌️️',
resposta: 'PEAKY BLINDERS'
},
{
pergunta: 'Série - Documentário',
imagem: 'https://telegra.ph/file/ecd17a4b75e4541bd20b8.jpg',
letra_inicial: 'CH',
contem_traços: '❌️️',
resposta: 'CHERNOBYL'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/05164ea8e02880f74010b.jpg',
letra_inicial: 'C',
contem_traços: '❌️️',
resposta: 'CHINA'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/24161e5698f3874c285eb.jpg',
letra_inicial: 'S',
contem_traços: '❌️️',
resposta: 'SUÍÇA'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/0207859d0fcb2c7624f1b.jpg',
letra_inicial: 'S',
contem_traços: '❌️️',
resposta: 'COREIA DO SUL'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/4890a8e71a7cc8d3862d0.jpg',
letra_inicial: 'AR',
contem_traços: '❌️️',
resposta: 'ARGENTINA'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/dfb6e013f52a018032625.jpg',
letra_inicial: 'P',
contem_traços: '❌️️',
resposta: 'PORTUGAL'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/8d238d4ffa865dd7009a7.jpg',
letra_inicial: 'F',
contem_traços: '❌️️',
resposta: 'FRANÇA'
}
]

exports.whatMusicAr = [
  {
    trechoMusic: "“Ela, ela tem piercing no seio\nDe onde 'cê veio? 'To interessado\n'Cê bebe, 'cê fuma, 'cê transa\nTudo isso sua amiga contou\nNão fumo, não bebo, só transo\nQuer desafiar, é só vir, amor”",
    resposta: "NOVIDADE NA ÁREA",
    artista: "MC Livinho",
    dica: "Alcança topo do Spotify com funk lento e dançante no mês de Julho."
  },
  {
    trechoMusic: "“fumando um fino de canto\neu e meus manos”",
    resposta: "NOVO BALANÇO",
    artista: "veigh",
    dica: "Trap, se nao souber vc tem +80 anos kkkk"
   },
  {
    trechoMusic: "“Papai, solicito socorro, me instrua\nMe tire dessa rua escura\nFui dominado pela droga, desisti do ensino\nVeio o apocalipse sombrear o meu caminho\nDesde o início, eu já sonhava em conquistar um cargo\nCurrículo no artigo 12 'tava pegando mais fácil\nAbandonei a linha e o pipa pelo motor da Hornet\nFoi na porta do banco, o artigo 157”",
    resposta: "CRACOLÂNDIA",
    artista: "MC Ryan SP, MC Hariel, Alok, MC Davi, Salvador da Rima",
    dica: "Faz alusão à famosa rua do centro de São Paulo onde o comércio ilegal divide espaço com usuários de drogas."
  },
  {
    trechoMusic: "“Teto espelhado, cama redonda, faz o movimento\nQuarto gelado, fogo na bomba, fumaça no vento\nDe frente, de lado, por cima, por baixo, gemendo baixinho\nCom amor e com carinho”",
    resposta: "FAZ UM VUK VUK",
    artista: "Mc Kevin o Chris (part. DJ NK da Serra)",
    dica: "Música do TikTok"
  },
  {
    trechoMusic: "“Cross my heart, hope to die\nTo my lover, I'd never lie\nHe said, be true, I swear I'll try\nIn the end, it's him and I”",
    resposta: "HIM & I",
    artista: "G-Easy & Halsey",
    dica: "É uma canção de amor que mostra a conexão profunda entre dois amantes, que se comparam ao lendário casal criminoso, Bonnie e Clyde."
  },
  {
    trechoMusic: "“And every single year\nI'm drowning in my tears, I'm drowning in my tears again\nI can't seem to forget the pain I seem to give\nThe pain I seem to give, my friend\nAnd every single year\nI'm drowning in my tears, I'm drowning in my tears again\nI can't seem to forget the pain I seem to give\nThe pain I seem to give, my friend”",
    resposta: "NUMB",
    artista: "XXXTENTACION",
    dica: "A música que reflete emoções profundas, transmitindo a sensação de entorpecimento emocional e desconexão."
  },
  {
    trechoMusic: "“You were the shadow to my light\nDid you feel us?\nAnother star, you fade away\nAfraid our aim is out of sight”",
    resposta: "FADED",
    artista: "Alan Walker",
    dica: "Marcada pela voz cativante de Iselin Solheim. Lançada em 2015, tornou-se um grande sucesso internacional, conquistando milhões de ouvintes com sua melodia envolvente e letras emocionais."
  },
  {
    trechoMusic: "“Just shoot for the stars\nIf it feels right, then aim for my heart”",
    resposta: "LEVITATING",
    artista: "Dua Lipa",
    dica: "Uma jornada estelar com uma sensação pop irresistível."
   },
   {
    trechoMusic: "“Now, the day bleeds into nightfall\nAnd you're not here to get me through it all”",
    resposta: "SOMEONE YOU LOVED",
    artista: "Lewis Capaldi",
    dica: "Um mergulho profundo na emoção da saudade e solidão."
   },
   {
    trechoMusic: "“Don't show up, don't come out\nDon't start caring about me now”",
    resposta: "DON'T START NOW",
    artista: "Dua Lipa",
    dica: "Um convite a não se mostrar, não aparecer, e não começar a se importar."
   },
   {
    trechoMusic: "“I'm off the deep end, watch as I dive in\nI'll never meet the ground”",
    resposta: "SHALLOW",
    artista: "Lady Gaga, Bradley Cooper",
    dica: "Uma colaboração profunda, onde mergulhar no desconhecido é a única opção."
   },
   {
    trechoMusic: "“I'm a sucker for you\nYou say the word and I'll go anywhere blindly”",
    resposta: "SUCKER",
    artista: "Jonas Brothers",
    dica: "Ser cativado pelo pop dos Jonas Brothers, embarcando em uma jornada sem hesitação."
   },
   {
    trechoMusic: "“Quando a chuva passar, quando o tempo abrir\nAbra a janela e veja eu sou o sol”",
    resposta: "QUANDO A CHUVA PASSAR",
    artista: "Ivete Sangalo",
    dica: "Uma mensagem de renovação, onde após a tempestade, o sol se revela."
   },
   {
    trechoMusic: "“Tudo bem\nÉ só isso, não tem mais jeito\nAcabou, boa sorte”",
    resposta: "AMOR PRA RECOMEÇAR",
    artista: "Frejat",
    dica: "A resignação diante do inevitável, desejando boa sorte para o próximo capítulo."
   },
   {
    trechoMusic: "“Você não quis tentar\nE agora quer voltar, quer voltar”",
    resposta: "VAI VOLTAR",
    artista: "Roupa Nova",
    dica: "Uma história de idas e vindas, onde o retorno é ansiado, mas não garantido."
   },
   {
    trechoMusic: "“Eu quero ser pra você\nA alegria de uma chegada”",
    resposta: "CERTAS COISAS",
    artista: "Lulu Santos",
    dica: "Explorando o significado de ser a felicidade ao se encontrar."
   },
   {
    trechoMusic: "“Ela é meu amor, só me vê a mim\nA mim que vivi para encontrar\nNa luz do seu olhar\nA paz que sonhei”",
    resposta: "ELA É CARIOCA",
    artista: "Tom Jobim",
    dica: "Uma homenagem à beleza da mulher carioca, com ritmo contagiante."
   },
   {
    trechoMusic: "“Passei de nave e ela me viu\nNa rua da Água portando fuzil\nMe mama num beco um pouco distante\nMe satisfaz, 'to na onda do kunk”",
    resposta: "TIPO HOLLYWOOD",
    artista: "Mc Ws da leste, DJ CHADIN DO C, MC Cothiê",
    dica: "Faz sucesso entre os jovens no tiktok, lançada em ano de 2023."
   },
   {
    trechoMusic: "“Bola aê, brisa aê, que hoje a noite é de prazer\nFaz o que quiser fazer, pode até subir e descer\nNo papin, faz assim, vem ni-vem ni-vem ni mim\nQue-que hoje eu tô facin, tô fa-tô fa-tô facin”",
    resposta: "TÁ OK",
    artista: "Dennis DJ, Mc Kevin o Chris",
    dica: "Tá muito fácil, em que mundo você está para não saber?"
   },
   {
    trechoMusic: "“Você é tão linda, no baile eu te vi passar\nParando tudo com essa marra no olhar\nDiz que cansou dos playboy com marra de brabo\nSe eu te beijar, hoje eu dou dois tiro' pro alto”",
    resposta: "POESIA ACÚSTICA 13",
    artista: "MC Cabelinho, Luísa Sonza, Oruam, Tz da Coronel, Chefin, L7nnon, Xamã, Chris MC, …",
    dica: "Gravada a 1 ano atrás, a nova edição da série de rap acústico também conta com 13 artistas."
   },
   {
    trechoMusic: "“Diziam pra mim\nQue essa moda passou\nQue monogamia é papo de doido\nMas pra mim é uma honra\nSer uma cafona\nPra esse povo”",
    resposta: "CHICO",
    artista: "Luísa Sonza",
    dica: "Gravada a 1 ano atrás, a nova edição da série de rap acústico também conta com 13 artistas."
   },
   {
    trechoMusic: "“Você mente tão mal, finge tão mal\n'Tá na sua cara, você não me esqueceu\nMente tão mal, finge tão mal\n'Tá na (tua) sua cara, você não me esqueceu”",
    resposta: "HOTEL CARO",
    artista: "Baco Exu do Blues e Luísa Sonza",
    dica: "A canção fala sobre o fim de um relacionamento amoroso e os sentimentos que envolvem este momento."
   }  
]