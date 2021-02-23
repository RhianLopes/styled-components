import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Container = styled.div`
  margin-top: 300px;
  text-align: center;
`

function App() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
  </Container>
  );
}

export default App;
