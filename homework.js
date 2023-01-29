'use strict';

function BinarioADecimal(num) {
   var array = num.split("");
    var suma = 0;
    for(var i= 0; i < array.length; i++){
       suma = suma + Math.pow(2, array.length -1 -i) * array[i];
    } 
    return suma;
}

function DecimalABinario(num) {
   var array = [];
    while(num > 0){
       array.unshift(num % 2);
       num = Math.floor(num / 2);
    }
    return array.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
