const sequenciaFibonacci = (numero) => {

  if (numero === 0) {
    return { pertence: true, sequencia: [0] }
  }

  let sequencia = [0, 1]
  let primeiroNumero = 0
  let segundoNumero = 1

  if (numero === 1) {
    return { pertence: true, sequencia: sequencia }
  }

  let proximo = primeiroNumero + segundoNumero

  while (proximo <= numero) {

    if (proximo === numero) {
      sequencia.push(proximo)
      return { pertence: true, sequencia: sequencia }
    }

    sequencia.push(proximo)
    primeiroNumero = segundoNumero
    segundoNumero = proximo
    proximo = primeiroNumero + segundoNumero

  }

  return { pertence: false, sequencia: sequencia }

}

const verificarSequenciaFibonacci = (numero) => {

  const resultado = sequenciaFibonacci(numero)

  if (resultado.pertence) {
    console.log(`${numero} pertence à sequência de Fibonacci.`)
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`)
  }

  console.log(`Sequência de Fibonacci até ${numero}: ${resultado.sequencia.join(", ")}`)

}

verificarSequenciaFibonacci(55)
verificarSequenciaFibonacci(60)