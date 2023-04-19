// function Pokemon(nomeDoPokemon,tipoDoPokemon ) { 
//     this.nome = nomeDoPokemon;
//     this.tipo = this.tipoDoPokemon;
// }

// const Pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon { 
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) { 
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar (nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque(){ 
        this.hp -= 10;
    }
}

class Pikachu extends Pokemon {
    constructor() { 
        super('Pikachu', 'Eletrico')
    }

    atacar() { 
        console.log(`${this.nome} atacou com `)
    }
}

const pikachu = new Pikachu('pikachu', 'elétrico')

const pikachuDoAshe = new Pikachu;
// Pikachu.atacar('choque do trovão');
// Pikachu.nome = 'pikachu'

// Pikachu.tipo = 'eletrico'
console.log(pikachu);
console.log(pikachuDoAshe);

console.log(pikachuDoAshe instanceof Pikachu);