# styled-components

## Contexto

Este repositório tem como objetivo guardar e documentar o conhecimento adquirido ao pesquisar mais sobre [styled-components](https://styled-components.com/), inicialmente os conteúdos desse repositório serão apresentados nas reuniões de padrões internas do time no qual participo.

## Introdução

O [styled-components](https://styled-components.com/), que no momento em que está sendo criado este repositório, se encontra em sua [v5](https://github.com/styled-components/styled-components/releases) aqui no [GitHub styled-components](https://github.com/styled-components/styled-components), permite que você deixe de usar um arquivo separado para guardar seu `.css`, que será importado e utilizado em seu arquivo `.js`, deixando o seu `.css` em seu próprio arquivo `.js`. Assim, podendo componentizar, por exemplo, o css do seu componente no próprio arquivo JS de seu componente.

## Instalação

Para começar a usar o [styled-components](https://styled-components.com/), vamos criar um simples projeto [React JS](https://pt-br.reactjs.org/), para isso basta rodar o seguinte comando em seu terminal no local onde deseja guardar seu projeto:

```
$ npx create-react-app styled-components
```

Feito isso, seu projeto react já foi criado, mas para seguir as recomendações do [styled-components](https://styled-components.com/), vamos instalar em nosso projeto, um [plugin de componentes estilizados](https://github.com/styled-components/babel-plugin-styled-components) do [Babel](https://babeljs.io/). Para isso você deve:

Entrar no projeto criado

```
$ cd styled-components/
```

Rodar o comando de instalação do plugin

```
$ npm install --save-dev babel-plugin-styled-components
```

Pronto! Seu projeto está pronto para ser iniciado! Para isto, basta rodar:

```
$ npm start
```

