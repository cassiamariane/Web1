function mascara_cpf(){
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
    alert(formatado);
}