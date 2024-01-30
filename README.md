# JSBeginnerPlayground

<h2>Sobre projeto Sons</h2>

O intuito deste repositório é aprender sobre o básico do Javascript, conceitos que serão utilizados em diversos algoritmos. Segue os conceitos utilizados:

<h4>Funções e parâmetros</h4>
Uma função em JavaScript é um bloco de código reutilizável que realiza uma tarefa específica

Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, que podem ou não ter um valor padrão. Os parâmetros de uma função são como variáveis ficam disponíveis apenas no corpo da função.

<h4>querySelectorAll</h4>

É uma alternativa para buscar muitos elementos, ele retorna uma lista (NodeList) com todos os elementos do seletor informado evitando a repetição de código

<h4>Listas/Arrays</h4>

Um array é uma estrutura de dados, uma coleção ordenada de elementos, onde cada tem um índice associado. Os índices começam em 0.

----

<h2>Sobre projeto Fokus</h2>

O projeto Fokus é uma aplicação web de gerenciamento de tempo baseada na técnica Pomodoro, projetada para otimizar a produtividade. A técnica Pomodoro consiste em ciclos de trabalho (foco) seguidos por intervalos curtos ou longos de descanso. A aplicação oferece três modos principais: Foco, Descanso Curto e Descanso Longo. Projeto feito com objetivo de aprender e reforçar conceitos do Javascript

<h4>DOM</h4>

DOM é a sigla para Document Object Model (Modelo de Objeto de Documento) e é uma forma padronizada de representar e interagir com objetos em documentos HTML e XML. Quando um evento ocorre, você tem a capacidade de reagir a ele e executar algumas ações, como exibir uma mensagem para o usuário, alterar ou adicionar algum elemento na página.

<h4>innerHTML x textContent</h4>

innerHtml -  É uma propriedade em JavaScript que permite acessar e modificar o conteúdo HTML de um elemento. Ele retorna ou define o conteúdo HTML dentro do elemento, incluindo tags HTML, o que significa que você pode inserir HTML formatado. É importante garantir que o conteúdo seja seguro para evitar injeção de código malicioso.
```
let elemento = document.getElementById('exemplo');
elemento.innerHTML = '<strong>Texto em negrito</strong>';
```
textContent - é uma propriedade em JavaScript que permite acessar e modificar apenas o texto interno de um elemento, sem interpretar HTML.
Ele retorna ou define o conteúdo de texto do elemento, sem incluir as tags HTML.
```
let elemento = document.getElementById('exemplo');
elemento.textContent = 'Texto simples, sem tags HTML';
```

<h4>new Audio (Objeto de aúdio)</h4>

Essa instância representa um elemento de áudio que pode ser incorporado em uma página web. A principal finalidade é permitir a reprodução de arquivos de áudio no navegador
Exemplos de Uso:
```
// Criar uma instância de Audio com um arquivo MP3
let meuAudio = new Audio('caminho/do/arquivo/audio.mp3');

// Reproduzir o áudio
meuAudio.play();

// Pausar o áudio após 5 segundos
setTimeout(() => {
    meuAudio.pause();
}, 5000);
```

<h4>localStorage vs sessionStorage vs cookies</h4>

<strong>localStorage</strong> -> Guarda informações sem data de validade, fica lá até o usuário limpar os dados de navegação. Cada site tem seu próprio localStorage. Nunca armazene dados pessoais/sensiveis ou chaves de autenticação

<strong>sessionStorage</strong> -> Armazena informações durante o período que está utilizando, a partir do momento que abre a aba do navegador e termina quando fecha. Mas pode ser que cada site tenha seu próprio tempo de sessão

<strong>cookies</strong> -> Navegadores da Web rastreiem, personalizem e salvem informações sobre a sessão de cada usuário. Sites usam cookies HTTP para agilizar suas experiências na Web. Sem cookies, você teria que fazer login sempre que saísse de um site ou reconstruir seu carrinho de compras caso fechasse a página acidentalmente
