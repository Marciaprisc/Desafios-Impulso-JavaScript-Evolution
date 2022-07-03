// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var par = x => x % 2 === 0
var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];
let pares = []

//TODO: Complete os espaços em branco com uma possível solução para o desafio
 
for (let i = 0; i < array.length; i++){
    if (par(array[i]) ){
        pares.push(array[i])
        print(array[i]);
     }          
}