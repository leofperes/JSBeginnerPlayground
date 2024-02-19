let buttons = document.querySelectorAll('.app__card-button')
let html = document.querySelector('html')
let bannerImg = document.querySelector('.app__image')
let title = document.querySelector('.app__title')
let inputMusic = document.querySelector('#alternar-musica')
let music = new Audio('./sons/luna-rise-part-one.mp3')
let startPauseButton = document.getElementById('start-pause')
let tempoDecorridoEmSegundos = 1500
let intervaloId = null
let initPauseBtn = document.querySelector('#start-pause span')
let imgInitPause = document.querySelector('.app__card-primary-butto-icon')
let timerScreen = document.querySelector('#timer')
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
      let bannerContexto = modoImgBanner[contexto];
      
      if (teste.hasOwnProperty(contexto)) {
        html.setAttribute('data-contexto', teste[contexto]);
        bannerImg.setAttribute('src', bannerContexto)
      }
      
      switch (contexto) {
        case "foco":
          title.innerHTML = `Otimize sua produtividade,<br>
          <strong class="app__title-strong">mergulhe no que importa.</strong>`
          tempoDecorridoEmSegundos = 10
          break;
        case "descanso-curto":
          title.innerHTML = `Que tal dar uma respirada?<br>
          <strong class="app__title-strong">Faça uma pausa curta!</strong>`
          tempoDecorridoEmSegundos = 300
          break;
        case "descanso-longo":
          title.innerHTML = `Hora de voltar a superficie.<br>
          <strong class="app__title-strong">Faça uma pausa longa.</strong>`
          tempoDecorridoEmSegundos = 900
          break
        default:
          break;
      }
      mostrarTempo()
    }
}

const contagemRegressiva = () => {
  if(tempoDecorridoEmSegundos <= 0){
    let focoFinalizado = html.getAttribute('data-contexto') == 'foco'
    if(focoFinalizado){
      let event = new CustomEvent('FocoFinalizado')
      document.dispatchEvent(event)
    }
    zerar()
    alert('Tempo finalizado!')
    return
  }
  tempoDecorridoEmSegundos = tempoDecorridoEmSegundos - 1
  mostrarTempo()
}

startPauseButton.addEventListener('click', iniciarPausar)

function iniciarPausar() {
  if(intervaloId){
    zerar()
    return
  }
  intervaloId = setInterval(contagemRegressiva, 1000)
  initPauseBtn.textContent = 'Pausar'
  imgInitPause.setAttribute('src', './imagens/pause.png')
}

function zerar(){
  clearInterval(intervaloId)
  initPauseBtn.textContent = 'Começar'
  imgInitPause.setAttribute('src', './imagens/play_arrow.png')
  intervaloId = null;
}

function mostrarTempo(){
  let tempo = new Date(tempoDecorridoEmSegundos * 1000)
  let tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
  timerScreen.innerHTML = `${tempoFormatado}`
}

mostrarTempo()