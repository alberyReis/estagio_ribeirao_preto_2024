const inverterString = (string) => {

  let caracteres = string.split('')

  let comprimento = caracteres.length;

  for (let i = 0; i < comprimento / 2; i++) {
    
    [caracteres[i], caracteres[comprimento - i - 1]] = [caracteres[comprimento - i - 1], caracteres[i]]

  }

  let stringInvertida = caracteres.join('')

  return stringInvertida

}

let stringOriginal = "albery vieira reis"
let stringInvertida = inverterString(stringOriginal)

console.log("String original:", stringOriginal)
console.log("String invertida:", stringInvertida)