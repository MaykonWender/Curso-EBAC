let meuMap = new Map();
meuMap.set("nome", "Maykon") // Todos os itens

meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome"); //Itens que selecionar 

console.log(meuMap.size)

console.log(meuMap.has("nome"));



console.log(meuMap.size);

for (let chave of meuMap.keys()){ 
    console.log(chave);
}

for (let valor of meuMap.values()){ 
    console.log(valor);
}

for (let entrada of meuMap.entries()){ 
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()){ 
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");
console.log(meuMap);       //remover


const cpfs = new Set();
cpfs.add('46095799104');
cpfs.add('06191406150');
cpfs.add('05122235139');

console.log(cpfs);

cpfs.forEach((valor)=> {
    console.log(valor);
})

const array = ['Maykon Wender', 'Diogo Resende', 'Luidy Bernardo', 'Ester Cristina', 'Maykon Wender']

const arrayComoSet = new Set([...array]) // Transformar array em set para tirar duplicatas
console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet];
console.log(arraySemItensDuplicados);