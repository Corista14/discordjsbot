module.exports = {
    name: 'gay',
    description: 'Comando que diz a percentagem do quão gay és.',
    execute(message) {
        message.reply(`Percentagem de gay: 0%, porque aqui ninguém é gay xD`);
    }
}

function getRandomNumber() {
    const randomPercentage = Math.floor(Math.random() * 100 + 1)
    return randomPercentage;
}
