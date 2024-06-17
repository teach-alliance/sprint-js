# Sprint 1 - Web Development 

## Descrição
Este é o código-fonte de uma página web com tema Formula E, que inclui uma interface para login, um formulário de contato, e uma apresentação de slides de imagens relacionadas à Formula E. A página é estilizada com CSS externo e utiliza ícones da Font Awesome e fontes do Google Fonts.

## Estrutura do Projeto

### HTML
O documento HTML está estruturado da seguinte forma:

1. **Cabeçalho**:
    - Declaração do tipo de documento e linguagem do conteúdo.
    - Metadados para charset e viewport.
    - Título da página.
    - Links para arquivos de estilos CSS locais e externos.

2. **Corpo**:
    - **Container Principal (`<div class="container">`)**:
        - **Caixa de Formulários (`<div class="form-box">`)**:
            - **Alternância de Formulários**: Dois botões para alternar entre os formulários de login e contato.
            - **Formulário de Login**:
                - Campo para email e senha.
                - Botão de submissão com ícone de login.
                - Links para recuperação de senha e criação de conta.
                - Elemento de alerta para mensagens.
            - **Formulário de Contato**:
                - Campos para nome, email e mensagem.
                - Botão de submissão.
                - Elemento de alerta para mensagens.
            - **Botão de Alternância de Tema**: Para alternar entre modos claro e escuro.
        - **Container de Slideshow (`<div class="slideshow-container">`)**:
            - **Slides**: Três imagens de Formula E.
            - **Controles do Slideshow**: Botões para navegar entre as imagens.
    - **Rodapé (`<footer>`)**:
        - Mensagem de direitos autorais.

3. **Scripts**:
    - Inclusão de um arquivo JavaScript para funcionalidades da página.

### CSS
Os estilos são definidos em um arquivo CSS externo (`./assets/css/styles.css`). Este arquivo define a aparência visual dos elementos da página, incluindo layout, cores, fontes, e responsividade.

### JavaScript
As funcionalidades interativas, como alternar entre formulários, controlar o slideshow, e alternar o tema da página, são implementadas em um arquivo JavaScript externo (`./assets/js/script.js`).

### Fontes e Ícones
- **Font Awesome**: Utilizado para ícones (e.g., ícone de login, setas de navegação no slideshow).
- **Google Fonts**: Utilizado para a fonte "Poppins", proporcionando uma aparência moderna e elegante.

## Funcionalidades
- **Alternância de Formulários**: Permite ao usuário alternar entre o formulário de login e o formulário de contato.
- **Slideshow**: Apresenta uma série de imagens com controles para navegar entre elas.
- **Alternância de Tema**: Permite ao usuário alternar entre o modo claro e escuro.

## Como Usar
1. **Clone o Repositório**:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. **Navegue até o Diretório do Projeto**:
    ```bash
    cd nome-do-projeto
    ```

3. **Abra o Arquivo `index.html` em um Navegador**:
    - Você pode abrir o arquivo diretamente no navegador ou usar uma extensão de servidor local (como Live Server no VSCode) para uma melhor experiência de desenvolvimento.

## Requisitos
- Um navegador moderno que suporte HTML5 e CSS3.
- Conexão com a internet para carregar fontes e ícones externos.

## Créditos
- **Desenvolvedor**: Seu Nome
- **Licença**: © 2024 Tech Alliance. Todos os direitos reservados.
