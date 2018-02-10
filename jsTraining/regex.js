var reg = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

var telefone = "(31) 9810-8680";
var telefone2 = "(31) 98108680";

console.log(reg.test(telefone));
console.log(reg.test(telefone2));