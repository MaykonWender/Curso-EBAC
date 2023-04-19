"use strict";

var alunos = ['Maykon', 'Roberto', 'Jeferson'];
var alunosNota = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    nota: 5
  };
  return itemAtual;
});
alunosNota.push({
  nome: 'Carlos',
  nota: 6
});
function filtraAlunosAprovados(alunosNota) {
  return alunosNota.nota >= 6;
}
var alunosNota6 = alunosNota.filter(filtraAlunosAprovados);
console.log(alunosNota6);