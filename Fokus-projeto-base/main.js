let buttons = document.querySelectorAll('.app__card-button')
let html = document.querySelector('html')
let teste = {
  foco: "foco",
  "descanso-curto": "descanso-curto",
  "descanso-longo": "descanso-longo"
};

function handleButtons(clickedButton){
    if(clickedButton.classList.contains('active')){
      clickedButton.classList.remove("active")
    } else {
      // Adiciona 'active' ao botão clicado
      clickedButton.classList.add("active")
      
      // Remove 'active' de todos os outros botões
      buttons.forEach(function(button){
        if (button !== clickedButton) {
          button.classList.remove('active')
        }
      })

      let contexto = clickedButton.getAttribute('data-contexto');
      
      if (teste.hasOwnProperty(contexto)) {
        html.setAttribute('data-contexto', teste[contexto]);
      }
    }
}