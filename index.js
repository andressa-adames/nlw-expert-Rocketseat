const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação de alto nível",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "* Este é um comentário *",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dado válido em JavaScript?",
      respostas: [
        "Undefined",
        "NaN",
        "Inexistente",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (igualdade)",
        "Atribuição",
        "Concatenação de strings",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo ID?",
      respostas: [
        "getElementByName()",
        "querySelector()",
        "getElementById()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de criar uma função em JavaScript?",
      respostas: [
        "function = myFunction()",
        "function myFunction()",
        "var myFunction()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve 'Hello World' em um alerta de JavaScript?",
      respostas: [
        "alert('Hello World')",
        "msgBox('Hello World')",
        "msg('Hello World')",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'push()' em arrays JavaScript?",
      respostas: [
        "Remover um elemento do array",
        "Adicionar um elemento ao final do array",
        "Ordenar os elementos do array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador JavaScript é usado para verificar a igualdade de valor e tipo?",
      respostas: [
        "==",
        "!=",
        "===",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função JavaScript é usada para converter uma string em um número?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição 
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        if(estaCorreta) {
          corretas.add(item)
  
  
  
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
   quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela   
    quiz.appendChild(quizItem)
  }