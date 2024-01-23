let buttons = document.querySelectorAll('.app__card-button')
let html = document.querySelector('html')
let bannerImg = document.querySelector('.app__image')
let title = document.querySelector('.app__title')
let inputMusic = document.querySelector('#alternar-musica')
let music = new Audio('./sons/luna-rise-part-one.mp3')
let startPauseButton = document.getElementById('start-pause')
let tempoDecorridoEmSegundos = 5;
let intervaloId = null
let modoImgBanner = {
  foco: "./imagens/foco.png",
  "descanso-curto": "./imagens/descanso-curto.png",
  "descanso-longo": "./imagens/descanso-longo.png"
}
let teste = {
  foco: "foco",
  "descanso-curto": "descanso-curto",
  "descanso-longo": "descanso-longo"
};

inputMusic.addEventListener('change', () => {
  if(music.paused) {
    music.play()
  } else {
    music.pause()
  }
})

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
      console.log(contexto)
      let bannerContexto = modoImgBanner[contexto];
      
      if (teste.hasOwnProperty(contexto)) {
        html.setAttribute('data-contexto', teste[contexto]);
        bannerImg.setAttribute('src', bannerContexto)
      }
      
      switch (contexto) {
        case "foco":
          title.innerHTML = `Otimize sua produtividade,<br>
          <strong class="app__title-strong">mergulhe no que importa.</strong>`
          break;
        case "descanso-curto":
          title.innerHTML = `Que tal dar uma respirada?<br>
          <strong class="app__title-strong">Faça uma pausa curta!</strong>`
          break;
        case "descanso-longo":
          title.innerHTML = `Hora de voltar a superficie.<br>
          <strong class="app__title-strong">Faça uma pausa longa.</strong>`
          break
        default:
          break;
      }
    }
}

const contagemRegressiva = () => {
  if(tempoDecorridoEmSegundos <= 0){
    zerar()
    alert('Tempo finalizado!')
    return
  }
  tempoDecorridoEmSegundos = tempoDecorridoEmSegundos - 1
}

startPauseButton.addEventListener('click', iniciarPausar)

function iniciarPausar() {
  if(intervaloId){
    zerar()
    return
  }
  intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar(){
  clearInterval(intervaloId)
  intervaloId = null;
}