const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formularioTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const ulTarefas = document.querySelector('.app__section-task-list')

const listaTarefas = JSON.parse(localStorage.getItem('listaTarefas')) || []

function atualizarTarefa() {
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

function criarElementosHtml(tarefa){
  const li = document.createElement('li')
  li.classList.add('app__section-task-list-item')

  const svg = document.createElement('svg')
  svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
  <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
      fill="#01080E"></path>
  </svg>`

  const p = document.createElement('p')
  p.classList.add('app__section-task-list-item-description')
  p.textContent = tarefa.descricao

  const button = document.createElement('button')
  button.classList.add('app_button-edit')

  button.onclick = () => {
    const novaTarefa = prompt('Qual tarefa deseja colocar no lugar da selecionada?')
    if(novaTarefa !== ""){
      tarefa.descricao = novaTarefa;
      p.textContent = novaTarefa
      atualizarTarefa()
    } else {
        alert('Campo vazio, preencher novamente')
    }
  }

  const imgBtn = document.createElement('img')
  imgBtn.setAttribute('src', './imagens/edit.png') 
  button.append(imgBtn)

  li.append(svg)
  li.append(p)
  li.append(button)

  return li
}

btnAdicionarTarefa.addEventListener('click', () => {
  formularioTarefa.classList.toggle('hidden')
})

formularioTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const tarefa = {
    descricao: textArea.value
  }

  listaTarefas.push(tarefa)
  //O localStorage so armazena strings, é preciso usar o JSON.stringify para converter para string
  const elementoTarefa = criarElementosHtml(tarefa)
  ulTarefas.append(elementoTarefa)
  atualizarTarefa()
  textArea.value = ''
  formularioTarefa.classList.add('hidden')
})


listaTarefas.forEach(tarefa => {
  const elementoTarefa = criarElementosHtml(tarefa)
  ulTarefas.append(elementoTarefa)
});