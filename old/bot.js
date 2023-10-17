const discord = require('discord.js')
const cliente = new discord.Client()

cliente.on('ready', ()=>{
    console.log('logado')
})

cliente.on('message', (message) =>{
    if (message.content === "oi"){
        message.reply('Oi Marcos')
    }
})

cliente.login('MTE2MzgzMjIwMjA1Njk2MjEwOQ.GHwidE.oT23ihVD6wwk_1DAxSssjSHGoGQjlo0LBhD8Js')