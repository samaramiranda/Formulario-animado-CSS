const btnLogin = document.querySelector(".btn-login")
const form = document.querySelector("form")

//SCRIPT DO FORMULÁRIO DESCER A TELA QUANDO CLICADO
btnLogin.addEventListener("click", event => { //função para o evento
  event.preventDefault(); //removendo comportamento padrão
  form.classList.add("form-hide")//adicionando classe para o form descer quando clicar
})

//SCRIPT DO FORMULÁRIO SUMIR DA TELA QUANDO DESCER
form.addEventListener("animationstart", event => { //quando a animação começar retira a barra de rolagem
  if(event.animationName = "down") {
    document.querySelector("body").style.overflow = "hidden" //retirando a barra de rolagem do body
  }
})

form.addEventListener("animationend", event => { //quando terminar a animação de form chamar a função
  if(event.animationName == "down"){ //retira o form da tela só quando a animação se chamar "down"
    form.style.display = "none" //retirando o form da tela pelo javascript
    document.querySelector("body".style.overflow = "none") //colocando a barra de rolagem novamente depois da animação
  }
})



