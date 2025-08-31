# Vitrine Movelaria Cris

Este projeto é uma vitrine digital para a Movelaria Cris, desenvolvido com React, Bootstrap e estilização personalizada. O objetivo é apresentar produtos, categorias e informações de contato de forma moderna, responsiva e fácil de navegar.

## Funcionalidades

- Navegação entre páginas: Home, Produtos, Contato
- Navbar responsivo e personalizado
- Seção principal com imagem, chamada e botão para produtos
- Seção de categorias com cards quadrados, imagem de fundo e título
- Estilização moderna e responsiva usando Bootstrap e CSS customizado

## Estrutura do Projeto

```
public/
  card-banheiro.png
  card-cozinha.png
  card-quarto.png
  card-sala.png
  image-section1-home.png
  ...
src/
  App.tsx
  components/
    NavBar.tsx
    CategoryCard.tsx
    style/
      NavBar.css
      CategoryCard.css
  pages/
    home.tsx
    products.tsx
    contacts.tsx
    style/
      home.css
  ...
```

## Tecnologias Utilizadas

- React
- Bootstrap 5 (CSS e JS)
- React Router DOM
- CSS customizado

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Imagens e Assets

Coloque as imagens dos cards de categoria e da seção principal na pasta `public/` conforme os exemplos acima.

## Personalização

- Para alterar categorias, edite o componente `CategoryCard` e os props em `home.tsx`.
- Para mudar estilos, edite os arquivos CSS em `src/components/style/` e `src/pages/style/`.

## Sobre

Desenvolvido por Kresley Lucas para apresentar produtos e serviços de forma digital e responsiva.