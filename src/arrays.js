const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) { 
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) { 
    console.log(`#${indice}Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Maykon', 'Luidy', 'Diogo'];

const alunos2 = alunos.map(function(itemAtual) { 
    return  { 
        nome: itemAtual,
        curso: 'Frontend'  
    }
    
})

const paula = alunos2.find(function(item){ 
    return item.nome == 'Luidy'
})

const paulo = alunos2.findIndex(function(item){ 
    return item.nome == 'Luidy'
})
console.log(paulo);

alunos2.push({
    nome: 'Carlos',
    curso: 'Backend'
})

const front = alunos2.every(function(item) { 
   return item.curso === 'Frontend'
})


console.log(front);

const back = alunos2.some(function(item){ 
    return item.curso ==='Backend' && item.curso === 'Frontend'
})

console.log(back);

function filtraAlunosDeBack(aluno) { 
    return aluno.curso === 'Backend';
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBack) 
    

console.log(alunosDeBackend);

const nums = [10, 20, 30 , 10];

const soma = nums.reduce(function(acumulador, itemAtual){ 
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
},  '')

console.log(nomesDosAlunos);