
const answers = [
    "Com certeza.",
    "Foi decidido que sim.",
    "Sem dúvida.",
    "Sim - definitivamente.",
    "Podes confiar nisso.",
    "Da maneiro que vejo... sim.",
    "Provavelmente.",
    "Sim.",
    "Como é óbvio.",
    "Os sinais apontam para sim.",
    "Tenta outra vez.",
    "Pergunta novamente mais tarde.",
    "Melhor não te dizer agora.",
    "Não consigo prever agora.",
    "Concentra-te e pergunta de novo.",
    "Não contes com isso.",
    "A minha resposta é não.",
    "A minha fonte diz não.",
    "Não me parece bem.",
    "Muito duvidoso."
]

module.exports = {
    name: 'pergunta',
    description: 'Comando para responder aleatoriamente',
    execute(message, args) {
        message.reply(`Resposta: ${randomVideoPicker()}`);
    }
}

function randomVideoPicker() {
    const randomAnswer = Math.floor(Math.random() * answers.length);
    return answers[randomAnswer];
}
