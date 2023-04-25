
const EBACM = (NumeroA:number, NumeroB:number): number => NumeroA * NumeroB


class Saudação  { 
    nome : string;
    
    constructor(nome :string) { 
        this.nome = nome;
    }
    
    dizOla(): string { 
        return ` Seja bem vindo ${this.nome} `;
    }
}






