import React, { useState } from 'react';

function IMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const ALTURA = (event) => {
    setAltura(event.target.value);
  };

  const PESO = (event) => {
    setPeso(event.target.value);
  };

  const calcularIMC = (event) => {
    event.preventDefault();
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado < 25) {
      setClassificacao('Peso normal');
    } else if (imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 35) {
      setClassificacao('Obesidade grau 1');
    } else if (imcCalculado < 40) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3');
    }
  };

  return (
    <div>
      <h1>Calculadora EBAC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label htmlFor="altura">Altura: </label>
          <input type="text" id="altura" value={altura} onChange={ALTURA} />
        </div>
        <div>
          <label htmlFor="peso">Peso : </label>
          <input type="text" id="peso" value={peso} onChange={PESO} />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{imc}</td>
              <td>{classificacao}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default IMC;
