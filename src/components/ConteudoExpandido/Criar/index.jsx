import { DivExpandido } from '../Listar'

const Criar= ({ativo}) => {
  return (
    <>
    {ativo === "criar" && (
            <DivExpandido>
              <h2>Criar Novo Contato</h2>
              <p>Aqui vai o formulário para criar contato...</p>
            </DivExpandido>
          )}
          </>
  );
};

export default Criar;
