function calcular() {

    event.preventDefault(); //parar submit do formulário
    //criar uma váriavel para cada número
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let op = document.getElementById('op').value;
    let resultado;

    if((isNaN(n1)) || isNaN(n2)){
        alert("É necessário digitar apenas números")
        return;
    }

    if (op == '+') {
        resultado = somar(n1, n2);
    } else if (op == '-'){
        resultado = subtrair(n1, n2)
    } else if(op == '*'){
        resultado = multiplicar(n1, n2)
    }
    else if(op == '/'){
        resultado = dividir(n1,n2)
    }
    else{
        alert('Operação inválida')
    }

        //criar uma váriavel com resultado da soma
        // const result = subtrair(n1, n2);

        //inserir o resultado no HTML (DOM)
        document.getElementById('result').innerText =  resultado;

    //exibir resultado em uma alert - UTILIZAR INTERPOLAÇÃO
    // alert(`Resultado: ${resultado}`);
}

function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
    
}

function dividir(n1, n2) {
    if(n2 == 0){
        return "Não é um número";
    }

    return n1 / n2;
}