const randomVideos = [
    'https://www.youtube.com/watch?v=eEa3vDXatXg', //Why are you gay
    'https://www.youtube.com/watch?v=BQDvAXhkZXk', //Laranja, acerola e mel
    'https://www.youtube.com/watch?v=66I78hXXwvk', //This nuts
    'https://www.youtube.com/watch?v=qjjT960FYt4', //EAE GALERINHA, AQUI QUEM FALA É LUANGAMEPLAYS
    'https://www.youtube.com/watch?v=Kk1hNGbEGRI', //Super saiyan
    'https://www.youtube.com/watch?v=qDZjf5Gm8xw', //But asian people.... HAAHAHAHAHAHAH
    'https://www.youtube.com/watch?v=MfB3l3PHEFQ', //Idiot Sandwich Gordon Ramsey
    'https://www.youtube.com/watch?v=CS3iJQb5rAQ', //Bowling Kid
    'https://www.youtube.com/watch?v=yr_Rpk9HR1g', //Puto a dar com o caderno na testa
];


module.exports = {
    name: 'video',
    description: 'Comando de videos aleatórios',
    execute(message, args) {
        message.reply(randomVideoPicker());
    }
}


function randomVideoPicker() {
    const randomVideo = Math.floor(Math.random() * randomVideos.length);
    return randomVideos[randomVideo];
}

