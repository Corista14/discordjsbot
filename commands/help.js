const { execute } = require("./gay");

module.exports = {
    name: 'help',
    description: 'Mostra os comandos disponíveis.',
    execute (message) {
        message.reply('De momento, tenho os seguintes comandos:\n!gay -> Mostra a tua percenntagem de panilas;\n!ola-> Digo-te olá;\n!pergunta [aqui fazes a pergunta (sem os parantênteses como é óbvio)]-> Fazes uma pergunta e eu respondo com sim, não ou talvez (de várias maneiras diferentes);\n!video -> Mando-te um vídeo aleatório da lista de vídeos que fiz;');
    }
}