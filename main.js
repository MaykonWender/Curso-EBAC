const form = document.getElementById('form-exercicio');

function validarCampo(campa, campb)
{
    if (campa > campb)
    {
        return alert("Numero A é maior")
    } 
    else {
        return alert("Numero B é maior")
    }
}

form.addEventListener('submit', function(e) {

    e.preventDefault(); 

    const campA =document.getElementById('campoa')

    const campB =document.getElementById('campob')

    validarCampo (campA, campB)
    
})

console.log(form);