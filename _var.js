var mensagem = "Ola Mundo";
var hello = "Hello Global";
    
function minhaFuncao() {
    var hello = "Hello Local";
    console.log(hello);
}

minhaFuncao();
console.log(hello);  

///////////////////////////////////////////////////

/*

var declaracao = "Oi Global";
var idade = 25;

if (idade > 20) {
    var declaracao = "Oi local?????"; 
}

console.log(declaracao) // Qual será o resultado ?

*/