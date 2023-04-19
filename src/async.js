function funcaoPesada () { 
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try { 
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve (execucoes);
    } catch(e) {
        reject('Erro')
    }
})

console.log("inicio");
//console.log(funcaoPesada());
funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
console.log("fim");


function execucaoPrincipal() { 
    
}
