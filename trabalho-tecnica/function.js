var valorRecebido = document.querySelector ('#inserirValor')

var Rcalorias = document.querySelector('#Rkcal')
var Rproteina = document.querySelector('#Rprot')
var Rcarboidrato = document.querySelector('#Rcarb')
var Rgordura = document.querySelector('#Rgord')
var Rfibra = document.querySelector('#Rfibr')


let macarrao = {
    kcal: 2,
    proteina: 0.6,
    carboidrato: 0.3,
    gordura: 0.1,
    fibra: 0.002,
}

var numero = parseInt("xpto");
if (Number.isNaN(numero))
    numero = 0; //

function receba (){

    let kcal = arroz.kcal;
    let proteina = arroz.proteina;
    let carboidrato = arroz.carboidrato;
    let gordura = arroz.gordura;
    let fibra = arroz.fibra

    Rcalorias.innerHTML= (kcal* parseFloat(valorRecebido.value).toFixed(2)) + " Kcal" 
    Rproteina.innerHTML= (proteina* parseFloat(valorRecebido.value)).toFixed(2) + "g"
    Rcarboidrato.innerHTML= (carboidrato* parseFloat(valorRecebido.value)).toFixed(2) + " g"
    Rgordura.innerHTML= (gordura* parseFloat(valorRecebido.value)).toFixed(2) + " g"
    Rfibra.innerHTML= (fibra* parseFloat(valorRecebido.value)).toFixed(2) + " g"
    
}
