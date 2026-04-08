import Breadcrumb from './components/FilmesLista/Breadcrumb';
import FilmesLista from './components/FilmesLista/FilmesLista';
import StatusModal from './components/FilmesLista/StatusModal';

function App() {
  return (
    <div className="App">
      {/* Componente 1: CSS Tradicional */}
      <Breadcrumb /> 

      {/* Componente 2: CSS Modules */}
      <FilmesLista /> 

      {/* Componente 3: Styled-components */}
      <StatusModal /> 
    </div>
  )
}

export default App