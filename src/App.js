import styled, { createGlobalStyle } from 'styled-components'
import { SumiButton } from './components'

// estilização de componente div
const Container = styled.div`
  margin-top: 300px;
  text-align: center;
`

// estilizando um componente já estilizado
const ButtonApp = styled(SumiButton)`
    position: absolute;
    color: black;
`

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  button {
    color: brown;
    margin-top: 200px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SumiButton title='Normal Button'/>
        <ButtonApp title='Primary Button'/>
    </Container>
  </>
  );
}

export default App;
