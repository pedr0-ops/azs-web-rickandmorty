# Rick and Morty Episodes Manager

Este é um projeto front-end desenvolvido com **React**, **TypeScript** e **Vite**, que permite gerenciar episódios da série **Rick and Morty**. A aplicação permite visualizar episódios, acessar seus detalhes, favoritar, marcar como visto e realizar buscas de forma rápida e intuitiva.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [GraphQL](https://graphql.org/)
- [Styled Components](https://styled-components.com/)
- [Yarn](https://yarnpkg.com/)

---

## 📁 Estrutura de Pastas

```plaintext
src/
│
├── assets/           # Arquivos estáticos como imagens e ícones
├── components/       # Componentes reutilizáveis (botões, cards, etc.)
├── contexts/         # Context API para estados locais específicos
├── graphql/          # Configuração e utilitários do GraphQL
├── pages/            # Páginas principais da aplicação
│   └── exemplo/
│       ├── exemplo.queries.ts   # GraphQL queries/mutations para a página
│       ├── exemplo.styles.ts    # Estilos com styled-components
│       ├── exemplo.types.ts     # Tipagens específicas da página
│       └── exemplo.tsx          # Componente principal da página
├── routes/           # Arquivo de rotas da aplicação
└── store/            # Configuração do Redux (slices, reducers, store)

```

## 🛠️ Como Executar o Projeto

### 1️⃣ Instale as dependências

```bash
yarn install
```

### 2️⃣ Execute o projeto

```bash
yarn dev
```

Abra [http://localhost:5173/](http://localhost:5173/) no navegador para visualizar o projeto.
