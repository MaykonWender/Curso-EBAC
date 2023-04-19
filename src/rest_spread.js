function somar(a, b) { 
    return a+b;
}

function somar2() { 
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) { 
        soma += arguments[i];
    }
    return soma;
}

//rest 
function somarRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => { 
        total += numeroAtual;
        return total
    }, 0)
    return soma;
}

console.log(somarRest(10,20,30));

//spread 
const numeros = [1,2,3,4];
console.log(...numeros);

const timesdeFutebolDeSp = ['santos', 'palmeiras', 'sao paulo'];
const timesdeFutebolDoRio = ['vasco', 'botafogo','flamengo', 'fluminense'];

//const timesdeFutebol = timesdeFutebolDeSp.concat(timesdeFutebolDoRio);
const timesdeFutebol = [...timesdeFutebolDeSp, ...timesdeFutebolDoRio];

console.log(timesdeFutebol);

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = { 
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

// desestruturação

//const motordaAna = carroDaAna.motor;

const { motor: motorDaJulia } = carroDaAna;
const { motor: motorDaAna } = carroDaJulia;

const [item1, item2, ...outrosTimes] = timesdeFutebol;

console.log(outrosTimes);