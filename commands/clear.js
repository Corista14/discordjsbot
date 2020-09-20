module.exports = {
    name: 'clear',
    description: 'Comando para apagar as mensagens',
    async execute(message) {
        const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
        const amount = args.join(' '); // Amount of messages which should be deleted
        
        if (!amount) return message.reply('não especificaste o número de mensagens que querias apagar.'); 
        if (isNaN(amount)) return message.reply('insere o número de mensagens que queres apagar e não outra coisa qualquer, seu burro!'); 
        
        if (amount > 100) return message.reply('vai com calma crlh! Só podes apagar no máximo 100 mensagens'); 
        if (amount < 1) return message.reply('sua mula, só se pode apagar acima de 1 mensagem.'); 
        
        await message.channel.messages.fetch({ limit: amount }).then(messages => { 
            message.channel.bulkDelete(messages )});
    }
}

