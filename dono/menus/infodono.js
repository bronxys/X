const infodono = (prefix, numerodn, NomeDoBot, NickDono, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`
╭───────────────┐
├ INFORMAÇÕES DO MEU DONO
├───────────────
│ Solicitou o CMD: @${sender.split("@")[0]}
├───────────────┐
├ NICK DONO: ${NickDono}
│ Dono: wa.me/${numerodn} 
╞───────────────┘
╰──────────┐
╭──────────┴─┐
│ INFORMAÇÕES DO BOT
├────────────
│Prefixo: ⩺ ${prefix}
│Nome: ⩺ ${NomeDoBot} 
╰─────────────╯
`
}

exports.infodono = infodono