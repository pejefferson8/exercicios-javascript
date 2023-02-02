function numeroPositivo(num){
    let resultado;

    if(num < 0){
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;

} 

function numeroPositivo2(num){
    let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo){
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}

function numeroPositivo3(num){
    const ehNegativo = num < 0;

    if(ehNegativo){
        return false;
    }
    return true;
}

console.log(numeroPositivo3(-2));