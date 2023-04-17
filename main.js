function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() { 
        console.log(this.nome + "Diz olá");
    }
  
}
function Funcionario(nome, cargo, salario) { 
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() { 
        return _salario;
    }
    
    this.setSalario = function(valor) {
        _salario = valor;
    }
    this.dizCargo = function() { 
        console.log(this.cargo);
    }

    this.aumento = function() { 
        const novoSalario = _salario * 1.5;
        _salario = novoSalario;        
    }
    
    
    Pessoa.call(this, nome);
}

function Gerente(nome) { 
    Funcionario.call(this, nome, "Gerente", 5000)

    this.aumento = function() { 
        const novoSalario = this.getSalario() * 2.0;
        this.setSalario(novoSalario);       
    }
}

function Dono(nome) { 
    Funcionario.call(this, nome, "Dono", 50000)

    this.aumento = function() { 
        const novoSalario = this.getSalario() * 10.0;
        this.setSalario(novoSalario);       
    }
}

const funcionario1 = new Funcionario("Maykon", "Dev", 2000);
const funcionario2 = new Gerente("Roberto");
const funcionario3 = new Dono("Ebac");










