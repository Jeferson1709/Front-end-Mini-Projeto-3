# To-Do ListDev.io

Gerenciador de tarefas (Front-End) integrado a uma API REST.

## Visão Geral
- Criar, listar, atualizar e excluir tarefas.
- Interface simples em HTML/CSS/JS.
- Consome uma API REST para persistência.

## Funcionalidades
- Adicionar tarefas com título e descrição.
- Listagem dinâmica das tarefas.
- Edição e exclusão de tarefas.
- Integração com API via JavaScript.

## Tecnologias
- HTML5, CSS3, JavaScript (Vanilla)
- Google Fonts (Poppins)

## Pré-requisitos
- Navegador moderno.
- API REST disponível (URL acessível).
- Opcional: servidor estático (Live Server, http-server, etc.).

## Instalação e Execução
1. Clone ou baixe este repositório.
2. Abra o front-end:
   - Opção rápida: clique duas vezes em `front-end/src/index.html`.
   - Ou sirva a pasta `front-end/src` com um servidor estático.
3. Certifique-se de que a API esteja rodando e acessível.

## Configuração da API
- No arquivo `front-end/src/assets/js/main.js`, ajuste a constante/variável da base URL da API (ex.: `API_BASE_URL`).
- Aponte para o endpoint da sua API (ex.: `http://localhost:3000`).

## Estrutura do Projeto
- `front-end/src/index.html` — página principal.
- `front-end/src/assets/css/global.css` — estilos globais.
- `front-end/src/assets/js/main.js` — lógica da aplicação e chamadas à API.

## Dicas de Desenvolvimento
- Use o console do navegador para depurar (F12).
- Verifique CORS na API quando consumir via navegador.
- Mantenha as mensagens de erro claras ao usuário.

## Licença
Uso educacional/demonstrativo.
