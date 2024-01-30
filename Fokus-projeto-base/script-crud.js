const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formularioTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const listaTarefas = []

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
  localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
})