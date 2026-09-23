// Para rodar no Node.js (instale antes: npm install readline-sync)
const readline = require('readline-sync');

function sistemaLanchonete() {
    let senha;

    // 1. Senha — do...while
    do {
        senha = readline.question('Digite a senha: ');
        if (senha !== '1234') {
            console.log('Senha incorreta!');
        }
    } while (senha !== '1234');

    console.log('Acesso permitido!\n');
    console.log('=== SISTEMA DA LANCHONETE ===');

    let opcao;
    let subtotal = 0;
    let totalItens = 0;

    // 4. Pedidos — while
    while (true) {
        console.log('\n1 - Hambúrguer - R$ 15,00');
        console.log('2 - Pizza - R$ 20,00');
        console.log('3 - Refrigerante - R$ 6,00');
        console.log('4 - Batata Frita - R$ 10,00');
        console.log('0 - Finalizar');

        opcao = parseInt(readline.question('Escolha: '));

        // 5. Finalização — break
        if (opcao === 0) {
            break;
        }

        // 2. Menu — switch
        switch (opcao) {
            case 1:
                subtotal += 15.00;
                totalItens++;
                console.log('Hambúrguer adicionado!');
                break;
            case 2:
                subtotal += 20.00;
                totalItens++;
                console.log('Pizza adicionada!');
                break;
            case 3:
                subtotal += 6.00;
                totalItens++;
                console.log('Refrigerante adicionado!');
                break;
            case 4:
                subtotal += 10.00;
                totalItens++;
                console.log('Batata Frita adicionada!');
                break;
            default:
                console.log('Opção inválida!');
                // 3. Validação — continue
                continue;
        }
    }

    console.log('\n--- Resumo do Pedido ---');

    // 6. Quantidade — for
    for (let i = 1; i <= totalItens; i++) {
        console.log(`Produto ${i} registrado`);
    }

    // 7. Desconto — operador ternário
    const desconto = (subtotal >= 50.00) ? (subtotal * 0.10) : 0.0;
    const totalFinal = subtotal - desconto;

    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Total: R$ ${totalFinal.toFixed(2)}`);
}

// Para executar:
sistemaLanchonete();