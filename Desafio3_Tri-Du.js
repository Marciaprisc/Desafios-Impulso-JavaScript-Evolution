// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

    var s = gets().split(" ");
    let A = parseInt(s[0]);
    let B = parseInt(s[1]);
    let C;
		if(A==B){
			C=A;
		}
		else if(A>B ){
			C=A;
		}
		else{
		  
		  C=B;
			
		}
		print(C);