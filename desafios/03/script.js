const btnLogin = document.querySelector(".btn-login")
const form = document.querySelector("form")


btnLogin.addEventListener("click", (event) => { //função do evento
  event.preventDefault(); //removendo comportamento padrão
  form.classList.add("form-hide")//adicionando classe para o form sumir quando clicar
})