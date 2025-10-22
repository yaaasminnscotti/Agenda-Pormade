import styled, { css } from "styled-components";

const ListaNav = styled.div`
  width: 80%;
  background-color: #d9d9d9;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 22px;
  margin-right: 39px;
  border-radius: 10px;
  color: #3f3c3c;
  cursor: pointer;
  user-select: none;

  ${({ $active }) =>
    $active &&
    css`
      background-color: #a9a9a9;
      color: white;
      font-weight: bold;
    `}
`;

const Nav = ({ ativo, setAtivo }) => {
  return (
    <>
      <ListaNav $active={ativo === "listar"} onClick={() => setAtivo("listar")}>
        Listar Contatos
      </ListaNav>

      <ListaNav $active={ativo === "criar"} onClick={() => setAtivo("criar")}>
        Criar Contato
      </ListaNav>
    </>
  );
};

export default Nav;
