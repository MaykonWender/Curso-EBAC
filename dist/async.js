"use strict";

function funcaoPesada() {
  var execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
var funcaoPesadaPromise = new Promise(function (resolve, reject) {
  try {
    var execucoes = 0;
    for (var i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject('Erro');
  }
});
console.log("inicio");
//console.log(funcaoPesada());
funcaoPesadaPromise.then(function (resultado) {
  return console.log(resultado);
}).catch(function (erro) {
  return console.log(erro);
});
console.log("fim");
function execucaoPrincipal() {}