const configbot = (prefix) => {
return `

    ==== COMO PERSONALIZAR O BOT PARA SER O DONO ===

Primeiramente, ative o bot no termux ou onde for e vá para o WhatsApp do bot em uma conversa privada ou grupo. Utilize os seguintes comandos:

--- Para alterar o nome do bot ---
${prefix}nome-bot <Nome desejado>
Você pode usar letras modificadas também. 🙂

--- Apelido do Dono do Bot ---
${prefix}nick-dono <Seu apelido>

--- Configurar o dono do bot ---
${prefix}virardono

Então, você entra no whatsapp do seu bot após conectar ele no número, e vai no seu privado (no caso da pessoa que vc quer que ela se torna dono do bot, no caso o seu)
e digite o comando
${prefix}virardono
pronto. apenas isso, também pode marcar o @ da pessoa no grupo ou a mensagem no grupo pra ela se tornar dono do bot, indico vc ir no seu PV pelo whatsapp do bot, bem fácil.
    
Lembre-se, você deve utilizar o próprio WhatsApp e número do bot para configurar o  dono do bot, porque só ele é dono dele mesmo enquanto não for configurado.

--- prefix Do Bot ---
${prefix}prefix-bot &
Pode por qualquer símbolo, se o seu símbolo for ${prefix} ele vai passar a ser & de acordo com o que você mudou.

-- TROCAR FOTO DO MENU ---
    ${prefix}fotomenu
    Apenas marque a foto que queres que seja do menu, com o comando.
    
    -- TROCAR A FOTO DO MENU PUXADAS     
    ${prefix}fundopuxadas  
     
    Apenas marque a foto que queres que seja do menu puxadas, com o comando.
    
    
    -- CONFIGURAR PIX AUTOMÁTICO 
    
    ${prefix}infotokenpix

Boa sorte.
`
  
}

exports.configbot = configbot