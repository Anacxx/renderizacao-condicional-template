import { Div, Titulo } from "./styled";

function TelaPrincipal(props) {
  const deslogar = () => {
    props.mudarTela("login");
    alert("Sessão encerrada. refaça login.")
  }

  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={deslogar}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;