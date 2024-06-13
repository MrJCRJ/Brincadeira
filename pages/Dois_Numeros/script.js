function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
      
  } else {
      console.log(numero + " é ímpar.");
  }
}

alert("Adicione dois Números")

let numberOne = prompt("Primeiro Número: ")
let numberTwo = prompt("Segundo Número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const soma = numberOne + numberTwo
const subt = numberOne - numberTwo
const mult = numberOne * numberTwo
const divs = numberOne / numberTwo
const rest = numberOne % numberTwo


const paIm = soma % 2 === 0 ? "Par" : "Impar"
const inDi = numberOne == numberTwo

alert(`
  Resultados:

  ${numberOne} + ${numberTwo} = ${soma}  
  ${numberOne} - ${numberTwo} = ${subt}
  ${numberOne} * ${numberTwo} = ${mult}
  ${numberOne} / ${numberTwo} = ${divs}
  ${numberOne} % ${numberTwo} = ${rest}  
  `)

alert(`
    O resultado da soma de ${numberOne} e ${numberTwo} = ${soma} que é ${paIm}
    O numero ${numberOne} = ${numberTwo}: ${inDi}
  `)