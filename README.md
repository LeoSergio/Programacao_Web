# 🌐 Programação Web - UFRN

Este repositório armazena as atividades, roteiros práticos e projetos desenvolvidos durante a disciplina de **Programação Web** do curso de Sistemas de Informação da Universidade Federal do Rio Grande do Norte (UFRN).

Os materiais aqui presentes acompanham as orientações e a ementa proposta pelo professor Fabrício Vale, estruturando a progressão do aprendizado desde os fundamentos da web até o uso de frameworks modernos de renderização e roteamento.

## 🚀 Tecnologias e Ementa

O repositório está alinhado com a evolução dos tópicos abordados na disciplina, explorando o ecossistema JavaScript através das seguintes tecnologias:

*   **Fundamentos Web:** Estruturação com HTML Básico e estilização com CSS.
*   **JavaScript Moderno:** Manipulação do DOM, Arrow Functions, Promises e manipulação de arquivos JSON.
*   **React:** Construção de interfaces dinâmicas e reativas baseadas em componentes (englobando as *Receitas React* da ementa).
*   **Next.js:** Renderização de páginas, geração de sites estáticos (SSG), roteamento dinâmico (`dynamicRoutingSSG`) e atualizações para as versões mais recentes (Next 15).

## 📂 Estrutura do Repositório

O conteúdo segue rigorosamente a metodologia de entregas práticas ("Receitas") estipulada no site da disciplina:

*   `fundamentos/`: Implementações de HTML, CSS e os scripts iniciais de JavaScript abordados nas primeiras etapas.
*   `receitas-pweb/`: Diretório com as entregas sequenciais exigidas (Receitas de 1 a 9), ilustrando a evolução dos conceitos.
*   `receitas-react/`: Projetos e testes focados exclusivamente na biblioteca React (da `Receita-React-00` à `03`).
*   `nextjs/`: Diretório contendo as implementações mais avançadas com o framework Next.js, incluindo roteamento e consumo de dados.
*   `mini-projeto/`: Código-fonte integral referente ao *MiniProjeto1* desenvolvido para compor a avaliação da disciplina.

## ⚙️ Como Executar os Projetos

Como o repositório é composto por vários subprojetos de naturezas diferentes, a execução varia conforme a pasta:

1. **Projetos puros (HTML/JS):** Basta abrir o arquivo `index.html` correspondente diretamente no navegador ou utilizar extensões como o *Live Server* no VS Code.
2. **Projetos em React/Next.js:** 
   Navegue até a pasta específica da receita e instale as dependências antes de iniciar o servidor de desenvolvimento:
   ```bash
   cd nome-da-pasta
   npm install
   npm run dev
