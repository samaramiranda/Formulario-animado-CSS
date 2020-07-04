const btnLogin = document.querySelector(".btn-login")
const form = document.querySelector("form")

//SCRIPT DO FORMULÁRIO DESCER A TELA QUANDO CLICADO
btnLogin.addEventListener("click", event => { //função para o evento
  event.preventDefault(); //removendo comportamento padrão

  //VERIFICANDO SE TEM CAMPO VAZIO NO FORM
  const fields = [...document.querySelectorAll(".input-block input")] //desconstruindo a lista de inputs para um array
  fields.forEach(field => { //em cada field (campo) que passar faz a função
    if (field.value == "") { //se o campo estiver vazio 
      form.classList.add("validate-error") //adiciona a classe que anima o formulário
    }
  })

  //salvando o formulário errado na variável
  const formError = document.querySelector(".validate-error")
  if (formError) { //se realmente existir a classe de erro nele
    formError.addEventListener("animationend", event => { //quando terminar a animação de erro executa a função
      if (event.animationName == "nono") {//continua na função apenas se a animação que terminou se chamar "nono"
        formError.classList.remove("validate-error")//retira a classe assim que terminar a animação
      }
    })
  } else {//se não tiver campo vazio o formulário desaparece
    form.classList.add("form-hide")//adicionando classe para o form descer quando clicar
  }
})

//SCRIPT DO FORMULÁRIO SUMIR DA TELA QUANDO DESCER
form.addEventListener("animationstart", event => { //quando a animação começar retira a barra de rolagem
  if (event.animationName = "down") {
    document.querySelector("body").style.overflow = "hidden" //retirando a barra de rolagem do body
  }
})

form.addEventListener("animationend", event => { //quando terminar a animação de form chamar a função
  if (event.animationName == "down") {//retira o form da tela só quando a animação se chamar "down"
    form.style.display = "none"//retirando o form da tela pelo javascript
    document.querySelector("body").style.overflow = "none" //colocando a barra de rolagem novamente depois da animação
  }
})

//ANIMAÇÃO DOS QUADRADOS NA TELA
const ulSquares = document.querySelector("ul.squares")

for (let i = 0; i < 15; i++) { //criando 10 quadrados na tela
  const li = document.createElement("li")

  const random = (min, max) => Math.random() * (max - min) + min //criando função para cálculo dos quadrados aleatórios 

  const size = Math.floor(random(10, 120))//criando tamanhos aleatórios para os quadrados
  const position = random(1, 99)//criando uma posição aleatória para os quadrados
  const delay = random(5, 0.1)//criando delay entre os quadrados
  const duration = random(24, 12)//criando uma duração para cada quadrado

  //alterando a largura e altura do html pelo javascript
  li.style.width = `${size}px`
  li.style.height = `${size}px`

  li.style.bottom = `-${size}px`//retirando os quadrados do bottom

  li.style.left = `${position}%`//alterando a posição dos quadrados

  li.style.animationDelay = `${delay}s`//definindo um delay aleatório entre os quadrados
  li.style.animationDuration = `${duration}s`//definindo uma duração aleatório para animação
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

  ulSquares.appendChild(li)
}



