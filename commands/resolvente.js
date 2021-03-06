module.exports = {
    name: 'resolvente',
    description: 'Faz a fórmula resolvente',
    execute(message, args) {
        calculateQuadraticEquation(message, args[0], args[1], args[2])
    }
}

function calculateQuadraticEquation(message, a1, b2, c3) {
    if (!a1 || !b2 || !c3) {
        message.reply('Tens que inserir os valores de a, b e c, respetivamente.\nExemplo: !resolvente 4(a) 3(b) 2(c), mas sem os parênteses, óbvio')
    } else {
        let x_soma, x_subtração;
        let a = a1;
        let b = b2;
        let c = c3;
        let bionómio_discriminante = b*b - 4*a*c;
        if (bionómio_discriminante > 0) {

            x_soma = (-b + Math.sqrt(bionómio_discriminante)) / (2 * a);
            x_subtração = (-b - Math.sqrt(bionómio_discriminante)) / (2 * a);

            message.reply(`Equação: ${a}x^2 + ${b}x + ${c} = 0\nSolução: {${x_soma}, ${x_subtração}}`);

        } else if (bionómio_discriminante == 0) {

            x_soma = x_subtração = -b / (2 * a);
            message.reply(`Equação: ${a}x^2 + ${b}x + ${c} = 0\nSolução: {${x_soma}, ${x_subtração}}`);

        } else {
            message.reply(`Solução: Impossível, pois a raiz dá negativa`);
        }
    }
}

