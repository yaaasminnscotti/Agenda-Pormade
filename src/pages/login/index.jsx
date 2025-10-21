import { useState } from 'react'

import Fundo from '../../components/fundo'
import Barra from '../../components/barra'
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


