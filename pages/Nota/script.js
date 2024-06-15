const alunos = {
  "João":[5,7],
  "Leticia":[9,10],
  "Diego":[9,9],
  "Julia":[6,5]
}

function calcularMedia(notas) {
  let somaNotas = 0
  for (let i=0; i < notas.length; i++) {
    somaNotas += notas[i]
  }
  return somaNotas / notas.length
}

for (const aluno in alunos) {
  const media = calcularMedia(alunos[aluno])

  let result = media >= 7 ? `Parabéns, ${aluno}! Você foi aprovado(a) no concurso` : `Não foi dessa vez, ${aluno}! Tente novamente`
  alert(`
    A média do(a) aluno(a) ${aluno} é: ${media}
    ${result}
  `)
}







