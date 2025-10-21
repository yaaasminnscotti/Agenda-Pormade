import { useState } from 'react'
import Fundo from '../../components/Fundo'
import Barra from '../../components/Barra'
import styled from 'styled-components'

const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

function Login() {


  return (
    <Container>
    <Fundo />
   <Barra />
   
</Container>
  )
}

export default Login


