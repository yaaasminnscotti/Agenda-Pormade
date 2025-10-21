import Fundo from '../../components/Fundo'
import styled from 'styled-components'
import './Login.css'
import Barra from '../../components/Barra'
import LoginDiv from '../../components/FormLogin'

export const Container = styled.div`
  position: relative; 
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const EspacoBarraForm = styled.div`
  position: relative;  
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 500px;
  padding: 0 42%;
`

const FundoStyled = styled(Fundo)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`


const Login=()=> {
  return (
    <Container>
      <FundoStyled />
        <EspacoBarraForm>
            <Barra />
            <LoginDiv /> 
        </EspacoBarraForm>
</Container>

  )
}

export default Login
