//Calcula a sequência de Fibonnaci
function fibonacci() {
    var numero = parseInt(document.getElementById('n').value);
    var resultado = document.getElementById('resultadofibonacci');
    var sequencia = [];
    sequencia[0] = 0;
    sequencia[1] = 1;

    for(var i=2; i<=numero - 1; i++){
        sequencia[i] = sequencia[i - 2] + sequencia[i - 1];
    }
    resultado.innerHTML=("Sequência = " + sequencia);
}

//Verifica se um número é perfeito
function perfeito() {
    var ni = parseInt(document.getElementById('ni').value);
    var nf = parseInt(document.getElementById('nf').value);
    var resultado = document.getElementById('resultadoperfeito');
    var soma = 1;
    var sequencia = [];
    for(var j = ni; j < nf; j++){
        for (var i=2; i*i<=nf; i++){
            if (j%i==0){
                if(i*i!=j){
                    soma = soma + i + j/i;
                }else{
                    soma=soma+i;
                }
            }
            if (soma === j){
                sequencia[j] = j;
            }
        }
    }
    resultado.innerHTML=("Número perfeitos no intervalo de "+ni+" até "+nf+": "+sequencia);
}

//Verifica se um número é primo 
function primo(){
    var numero = parseInt(document.getElementById('n2').value);
    var resultado = document.getElementById('resultadoprimo');
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            resultado.innerHTML=("O número "+numero+" não é primo");
        } else {
            resultado.innerHTML=("O número "+numero+" é primo");
        }
    }
}

//Calcula o fatorial de um número
function fatorial(){
    var numero = parseInt(document.getElementById('n3').value);
    var resultado = document.getElementById('resultadofat');
    var fator=1;
  
    for(var i = 1 ;i<=numero ;i++)
     fator *= i;
  
    resultado.innerHTML = ("O fatorial do número "+numero+" é "+fator);
  }

//Verificar se forma um triângulo
function triangulo(){
    var i = parseInt(document.getElementById('i').value);
    var j = parseInt(document.getElementById('j').value);
    var k = parseInt(document.getElementById('k').value);
    var resultado = document.getElementById('resultadotriangulo');

    if(i < (j+k) && j < (i+k) && k < (i+j)){
        if(i == j && i == k){
            resultado.innerHTML = ("Forma um triângulo equilátero");
        }
        if(i == j || i == k || j == k){
            resultado.innerHTML = ("Forma um triângulo isóceles");
        }else{
            resultado.innerHTML = ("Forma um triângulo escaleno");
        }
    }
    
}

//Multiplica duas matrizes 3x3
function multimatriz(){
    var resultado = document.getElementById('resultadomatriz');
    const a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const b = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ];
    var c = [];

    for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            c[i][j] = a[i][j] * b[i][j];
        }
    }
    
    for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
        resultado.innerHTML=c[i][j];
        }
    }
}

//Verifica se um CPF é válido e o retorna formatado
function mascara_cpf(){
    var resultado = document.getElementById('resultadocpf');
    var cpf = document.getElementById("cpf").value;
    var formatado ="";
    for(var i = 0; i < cpf.length; i++){
        console.log(cpf[i]);
        if(cpf[i] != "0" || cpf[i] != "1" || cpf[i] != "2" || cpf[i] != "3" || cpf[i] != "4" || cpf[i] != "5" || cpf[i] != "6" || cpf[i] != "7" || cpf[i] != "8" || cpf[i] != "9"){
            alert("CPF inválido");
            break;
        }
    }
    for(var i = 0; i < 3; i++){
        formatado += cpf[i];
    }

    formatado+=".";

    for(var i = 3; i < 6; i++){
        formatado += cpf[i];
    }

    formatado+=".";

    for(var i = 6; i < 9; i++){
        formatado += cpf[i];
    }

    formatado+="-";

    for(var i = 9; i < 11; i++){
        formatado += cpf[i];
    }
    resultado.innerHTML=formatado;
}