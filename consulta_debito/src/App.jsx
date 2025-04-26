import './App.css'

function App() {

  return (
    <div className="cd-container">
      <header>
        <a href="https://portal.fazenda.sp.gov.br/">
          <img src="https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/Images/logo.jpg" alt="logo da secretaria da Fazenda e Planejamento" />
        </a>
        <img src="https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/Images/header_bg.jpg" alt="" />
      </header>

      <div className="cd-title">
        <h1>Consulta</h1>
        <h1>Débitos vinculados ao veículo</h1>
      </div>
      <div className="cd-close">
        <button>
          <img src="https://www.ipva.fazenda.sp.gov.br/ipvanet_consulta/Images/Icones/botao_sair.gif" alt="Botão fechar painel" />
        </button>
      </div>
      <main>
        <form action="" className=''>
          <h3>Identificação do veículo</h3>
          <fieldset>
            <div className="label">
              <label htmlFor="renavam:">Renavam:</label>
            </div>
            <div className="input">
              <input type="text" name="renavam" id="renavam"/>
            </div>
          </fieldset>
          <fieldset>
            <div className="label">
              <label htmlFor="placa:">Placa:</label>
            </div>
            <div className='input'>
              <input type="text" name="placa" id="placa" />
            </div>
          </fieldset>
          <button className='consultar'>Consultar</button>
        </form>
      </main>
    </div>
  )
}

export default App
