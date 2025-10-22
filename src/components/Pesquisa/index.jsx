import styled from "styled-components"

const Search = styled.input`
 background-color: #BDB4B4;
 width: 82%;
 padding: 20px;
 font-size: 20px;
`
const Pesquisa = ()=>{
    return(
        <Search 
        type="search"
        placeholder="Pesquisar contato"
        />
    )
}

export default Pesquisa
