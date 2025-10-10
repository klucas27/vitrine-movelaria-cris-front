# Vitrine Movelaria Cris

Vitrine digital da Movelaria Cris, construída com React + TypeScript, Bootstrap 5 e CSS por componente. Apresenta categorias, produtos e contatos com foco em responsividade e navegação simples.

## Sumário

- Requisitos
- Instalação e Execução
- Scripts Disponíveis
- Estrutura do Projeto
- Tecnologias
- Arquitetura e Padrões
- Rotas
- Componentes Principais
- Estilos e Assets
- Variáveis de Ambiente
- Testes
- Build e Deploy
- Dicas de Desenvolvimento
- Contribuição
- Licença
- Autor

## Requisitos

- Node.js LTS >= 18
- npm >= 9

Verifique:

```powershell
node -v
npm -v
```

## Instalação e Execução

1) Instalar dependências:

```powershell
npm install
```

2) Rodar em desenvolvimento:

```powershell
npm start
```

Acesse http://localhost:3000

3) Testes:

```powershell
npm test
```

## Scripts Disponíveis

- `npm start` — Dev server (Create React App).
- `npm run build` — Build de produção em `build/`.
- `npm test` — Testes com Jest/React Testing Library.
- `npm run eject` — Expõe configs do CRA (irreversível).

## Estrutura do Projeto

```text
public/
  card-banheiro.png
  card-cozinha.png
  card-quarto.png
  card-sala.png
  image-section1-home.png
  favicon.ico
  index.html
  manifest.json
  robots.txt
  ...

src/
  .env                      <-- mover para a raiz do projeto (ver Variáveis de Ambiente)
  App.css
  App.test.tsx
  App.tsx
  global.d.ts
  index.css
  index.tsx
  react-app-env.d.ts
  reportWebVitals.ts
  setupTests.ts

  components/
    CategoryCard/
      CategoryCard.css
      CategoryCard.tsx
    NavBar/
      NavBar.css
      NavBar.tsx
    ProductsCardViewer/
      ProductsCardViewer.css
      ProductsCardViewer.tsx
    ProductsList/
      ProductsList.tsx

  pages/
    Contacts/
      index.tsx
    Home/
      index.tsx
      style.css
    Products/
      index.tsx
```

## Tecnologias

- React 18 + TypeScript
- Bootstrap 5
- React Router DOM
- Jest + React Testing Library
- CSS por componente/página

## Arquitetura e Padrões

- `pages/*` — Páginas mapeadas em rotas.
- `components/*` — Componentes reutilizáveis.
- CSS acoplado a cada componente/página para escopo simples.
- Imagens públicas em `public/` (referencie com path absoluto, ex.: `/image.png`).
- Tipagens auxiliares em `*.d.ts` quando necessário.

## Rotas

- `/` — Home
- `/products` — Produtos
- `/contacts` — Contatos

As rotas são definidas no `App.tsx` com `react-router-dom`.

## Componentes Principais

- `NavBar` — Navegação responsiva com Bootstrap.
- `CategoryCard` — Card com imagem de fundo e título para categorias.
- `ProductsCardViewer` — Viewer de cards de produtos.
- `ProductsList` — Lista de produtos.

## Estilos e Assets

- Estilos por componente (ex.: `components/CategoryCard/CategoryCard.css`) e por página (`pages/Home/style.css`).
- Utilize utilitários do Bootstrap 5 quando possível.
- Coloque imagens em `public/` e use em JSX: `<img src="/image-section1-home.png" alt="..." />`.

## Variáveis de Ambiente

- No Create React App, variáveis expostas ao front devem começar com `REACT_APP_`.
- O arquivo `.env` deve ficar na raiz do projeto (não dentro de `src/`).

Exemplo de `.env` na raiz:

```dotenv
# ./.env
REACT_APP_API_URL=https://api.exemplo.com
REACT_APP_FEATURE_FLAGS=products,categories
PORT=3000
```

Após alterações no `.env`, reinicie `npm start`.

## Testes

- Test runner: Jest + React Testing Library (configs padrão do CRA).
- Testes próximos aos arquivos (ex.: `App.test.tsx`).
- Modo watch:

```powershell
npm test
```

## Build e Deploy

1) Gerar build:

```powershell
npm run build
```

2) Publicar:

- Vercel/Netlify: comando `npm run build`, diretório `build/`.
- Hospedagem estática (S3/GCP/Azure): suba o conteúdo de `build/`.
- GitHub Pages: use `gh-pages` ou workflow de CI para publicar o `build/`.

Dicas:

- Defina `homepage` no `package.json` se publicar em subpath.
- Ajuste `BrowserRouter` vs `HashRouter` conforme regras de reescrita da hospedagem.

## Dicas de Desenvolvimento

- Reaproveite componentes e utilitários do Bootstrap.
- Padronize classes CSS e evite estilos globais conflitando.
- Crie constantes utilitárias para paths e textos repetidos.
- Ao adicionar novas páginas, exporte em `pages/NovaPagina/index.tsx` e inclua no `App.tsx`.

## Contribuição

- Use branches por feature/bugfix.
- Commits pequenos e descritivos.
- PRs com descrição clara, prints (quando UI) e passos de teste.
- Atualize/adicione testes ao mudar comportamento.

## Licença

Este projeto é de propriedade exclusiva da Codexus. O uso, cópia, modificação, distribuição ou qualquer outra forma de aproveitamento do código-fonte ou dos recursos aqui presentes é proibido sem autorização expressa do autor.

Todos os direitos reservados.

## Autor

Desenvolvido por Codexus.