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

Feito isso, seu projeto react já foi criado, agora vamos instalar o [styled-components](https://styled-components.com/), mas para seguir as recomendações do [styled-components](https://styled-components.com/), vamos instalar em nosso projeto, um [plugin de componentes estilizados](https://github.com/styled-components/babel-plugin-styled-components) do [Babel](https://babeljs.io/). Para isso você deve:

Entrar no projeto criado:

```
$ cd styled-components/
```

Rodar o comando de instalação do styled-components:

```
$ npm install --save styled-components
```

Rodar o comando de instalação do plugin:

```
$ npm install --save-dev babel-plugin-styled-components
```

Pronto! Seu projeto está pronto para ser iniciado! Para isto, basta rodar:

```
$ npm start
```

Automaticamente em seu navegador, abrirá no endereço http://localhost:3000/ o seu projeto ReactJS rodando :grin:

## Usando Styled Components

Para fazer o uso dos styled-components, basta importar em seu arquivo `.js`:

```javascript
import styled from 'styled-components'
```

Com esse `import`, ele te dá acesso ao `styled`, onde com ele você pode declarar constantes para suas determinadas tags HTML, como no exemplo abaixo:

Componente de botão `button`:
```javascript
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
```

Componente de container `div`:
```javascript
const Container = styled.div`
  text-align: center;
`
```

Para fazer o uso desses componentes já estilizados, basta usá-los da seguinte forma:

```javascript
function App() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
  </Container>
  );
}

export default App;
```

Como resultado dos códigos acima temos os seguintes botões:

![image](https://user-images.githubusercontent.com/47872242/108787649-ed11c700-7554-11eb-9fea-29aec11d22c3.png)

Parabéns! esses são seus primeiros componentes estilizados! Agora você pode continuar testando e contribuindo com o repositório :grin:!!

## Conclusão

Ao meu ver, o [styled-components](https://styled-components.com/) é uma tecnologia que possui diversas vantagens de se adicionar em seu projeto, ela é simples e facilita muito no dia a dia, pois, é escrita de uma forma muito simples e clara, um cenário perfeito para seus componentes agora ainda mais simples!
