const helpCommandContent = 'De momento, tenho os seguintes comandos:\n!gay -> Mostra a tua percenntagem de panilas;\n!ola-> Digo-te olá;\n!pergunta [aqui fazes a pergunta (sem os parantênteses como é óbvio)]-> Fazes uma pergunta e eu respondo com sim, não ou talvez (de várias maneiras diferentes);\n!video -> Mando-te um vídeo aleatório da lista de vídeos que fiz;\n!resolvente a b c (com os números, óbvio) -> Faço a fórmula resolvente por ti em menos de 1 segundo;\n!clear [número de 1 a 100] -> Apago as mensgagens do canal.'
module.exports = {
    name: 'help',
    description: 'Mostra os comandos disponíveis.',
    execute (message) {
        message.reply(helpCommandContent);
    }
}