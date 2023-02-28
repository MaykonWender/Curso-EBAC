const form = document.getElementById('form-exercicio');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const campA =document.getElementById('campoa').value
    const campB =document.getElementById('campob').value

    return campA < campB ? alert('O numero B é maior que o numero A'): alert('O numero A é maior que o numero B'); 
})

console.log(form);