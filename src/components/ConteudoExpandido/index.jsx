import styled from "styled-components";

const DivExpandido = styled.div`
  position: relative;
  z-index: 10;
  width: 69%;
  height: 100vh;
  background-color: rgba(240, 240, 240, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  margin: 3% 5% 0 25%; 
  
`;




const ConteudoExpandido = ({ ativo }) => {
  return (
    <>
      {ativo === "listar" && (
        <DivExpandido>
          <h2>Lista de Contatos</h2>
          <p>Aqui vai a lista de contatos...</p>
        </DivExpandido>
      )}

      {ativo === "criar" && (
        <DivExpandido>
          <h2>Criar Novo Contato</h2>
          <p>Aqui vai o formulário para criar contato...</p>
        </DivExpandido>
      )}
    </>
  );
};

export default ConteudoExpandido;
