function tocaSom (id) {
    document.querySelector(id).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]
    const instrumento = listaDeTeclas[i].classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa')
        } 
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}
