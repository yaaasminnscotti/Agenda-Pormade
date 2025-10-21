import logo from '../../assets/images/folha.svg'
import './barra.css'

export default function Barra() {
  return (
    <div className="barra">
      <div className="grupinho">
        <img src={logo} alt="logo" />
        <div className="textos">
          <p className="titulo">Pormade</p>
          <p className="subtitulo">agenda</p>
        </div>
      </div>

      <div className="legenda">
        <p>Organize seus contatos, mantenha seu calendário em dia e muito mais</p>
      </div>
    </div>
  )
}


