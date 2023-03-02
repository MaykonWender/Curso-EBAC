$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaTarefa = $('#endereco-nova-tarefa').val();
        const novoItem = $('<li> </li>');
        $(` <p> </p>`).appendTo(novoItem);
        $(`<p> ${enderecoDaNovaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-nova-tarefa').val('')
        
        $('ul').on('click','li',function(){
        $('li').toggleClass('riscado');
            
        })
        
    })
    })