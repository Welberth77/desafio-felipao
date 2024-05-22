// Calculadora de partida rankeadas
let vitorias;
let derrotas;
let saldoVitorias;

// Aplicando condições
function calcularRank(vitorias, derrotas) {
    let nivel;
    saldoVitorias = vitorias - derrotas
    
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias > 100) {
        nivel = "Imortal";
    } else {
        nivel = "Inválido";
    }

    console.log("O héroi tem um saldo de " + saldoVitorias + " está no nível de " + nivel)
}

// Valores para teste
calcularRank(115, 23)