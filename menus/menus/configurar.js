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

Então, a forma antiga mudamos, agora e o seguinte..

Após conectado o bot no número que vc queira utilizar o bot, você entra nesse mesmo whatsapp do bot e vai até o seu privado e digita o comando ${prefix}virardono e o seu número que queira virardono so copiar e colar, segue o exemplo do formato abaixo:

${prefix}virardono +55 32 9924-0466

após isso, se estiver no termux, reinicia o bot.

☝️ Lembrando, você precisa usar no whatsapp do próprio bot que está conectado, resumo abaixo

Conecta número do bot 👉 entra no whatsapp do bot 👉 entra no privado do seu número e cópia o número que queira por como dono e *( continua no privado )* 👉 e envia no formato 
${prefix}virardono +55 32 9924-0466

você irá por o número no lugar desse aí.



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
