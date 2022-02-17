import Carousel from './components/Carousel';
import GridContainer from './components/GridContainer'
import NavBar from './components/NavBar'
import { HousesProvider } from './context/HousesContext'

function App() {
  return (
    <div className="App">
      <HousesProvider>
        <Carousel/>
        <NavBar/>
        <GridContainer/>
      </HousesProvider>
    </div>
  );
}

export default App;
