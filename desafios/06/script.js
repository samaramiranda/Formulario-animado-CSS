const btnLogin = document.querySelector(".btn-login")
const form = document.querySelector("form")

//SCRIPT DO FORMULÁRIO DESCER A TELA QUANDO CLICADO
btnLogin.addEventListener("click", event => { //função para o evento
  event.preventDefault(); //removendo comportamento padrão
  
  //VERIFICANDO SE TEM CAMPO VAZIO NO FORM
  const fields = [ ...document.querySelectorAll(".input-block input")] //desconstruindo a lista de inputs para um array
  fields.forEach(field => { //em cada field (campo) que passar faz a função
    if(field.value == ""){ //se o campo estiver vazio 
      form.classList.add("validate-error") //adiciona a classe que anima o formulário
    }
  })

  //salvando o formulário errado na variável
  const formError = document.querySelector(".validate-error")
  if(formError){ //se realmente existir a classe de erro nele
    formError.addEventListener("animationend", event => { //quando terminar a animação de erro executa a função
      if(event.animationName == "nono") {//continua na função apenas se a animação que terminou se chamar "nono"
        formError.classList.remove("validate-error")//retira a classe assim que terminar a animação
      }
    })
  }else {//se não tiver campo vazio o formulário desaparece
    form.classList.add("form-hide")//adicionando classe para o form descer quando clicar
  }
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



