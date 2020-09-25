module.exports = {
    name: 'ppt',
    description: 'Jogo do Pedra, Papel, ou Tesoura',
    execute(message, args) {
        playPPT(message, args);
    }
}

function playPPT(message, args) {
    const choices = ['Pedra', 'Papel', 'Tesoura'];
    const userChoice = args.toLowerCase;
    const pcRandomChoice = Math.floor(Math.random() * choices.length);

    if (pcRandomChoice == 'Pedra') {
        switch (userChoice) {
            case 'Pedra':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nÉ um empate cabrão`);
                break;
            case 'Papel':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nGanhaste... seu miran... humhum, animal`);
                break; 
            case 'Tesoura':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nCHUPA, PERDESTE`);
                break; 
        }
    }

    else if (pcRandomChoice == 'Papel') {
        switch (userChoice) {
            case 'Pedra':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nCHUPA, PERDESTE`);                                                
                break;
            case 'Papel':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nÉ um empate cabrão`);
                break; 
            case 'Tesoura':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nGanhaste... seu miran... humhum, animal`);
                break; 
        }
    }

    else if (pcRandomChoice == 'Tesoura') {
        switch (userChoice) {
            case 'Pedra':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nGanhaste... seu miran... humhum, animal`);                                                
                break;
            case 'Papel':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nCHUPA, PERDESTE`);
                break; 
            case 'Tesoura':
                message.reply(`A minha jogada: ${pcRandomChoice}\nA tua jogada: ${userChoice}\nÉ um empate cabrão`);
                break; 
        }
    }
}