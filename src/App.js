import CarouselContainer from './components/CarouselContainer';
import FilterNavbar from './components/FilterNavbar';
import MainContent from './components/MainContent';
import GridContainer from './components/GridContainer';
import { HousesProvider } from './context/HousesContext';

function App() {
  return (
    <div className="App">
      <HousesProvider>
        <CarouselContainer/>
        <MainContent>
          <FilterNavbar/>
          <GridContainer/>
        </MainContent>
      </HousesProvider>
    </div>
  );
}

export default App;
