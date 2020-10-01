module.exports = {
    name: 'resolvente',
    description: 'Faz a fórmula resolvente',
    execute(message, args) {

    }
}

function calculateQuadraticEquation(args) {
    if (args < 3 || args > 3) {
        message.reply('Tens que inserir os valores de a, b e c, respetivamente.\nExemplo: !resolvente 4(a) 3(b) 2(c), mas sem os parênteses, óbvio')
    } else {
        let a = args[1];
        let b = args[2];
        let c = args[3];
        let bionómio_descriminante = b*b - 4*a*c
        
        if (bionómio_descriminante > 0) {
            let x_soma = (-b + Math.sqrt(bionómio_descriminante)) / (2 * a)
            let x_subtração = (-b - Math.sqrt(bionómio_descriminante)) / (2 * a)
            message.reply(`Solução: {${x_soma}, ${x_subtração}}`)
        } 

    }
}