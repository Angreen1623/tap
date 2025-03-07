console.log("Mensagem a ser exibida");

var n1 = 10;
var n2 = 2;
var boo = false;

var totalSub = n1-n2;
var totalSum = n1+n2;
var totalMul = n1*n2;
var totalDiv = n1/n2;
console.log("Total subtração: "+ totalSub);
console.log("Total soma: "+ totalSum);
console.log("Total multiplicação: "+ totalMul);
console.log("Total divisão: "+ totalDiv);

if(totalSub <=10) boo = true
else boo = false
console.log("Total subtração <= 10: "+ boo);

if(totalSum <=10) boo = true
else boo = false
console.log("Total soma <= 10: "+ boo);

if(totalMul <=10) boo = true
else boo = false
console.log("Total multiplicação <= 10: "+ boo);

if(totalDiv <=10) boo = true
else boo = false
console.log("Total divisão <= 10: "+ boo);


var soma = function(n1, n2){
    return n1 + n2;
}

module.exports = soma;
