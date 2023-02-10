import './App.scss';
import CardList from './components/containers/CardList/CardList';
import beers from './data/punk';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeerInfo from './components/containers/BeerInfo/BeerInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/beer/:beerId' element={<BeerInfo beerArr = {beers}/>}/>

          <Route path='/' element={<CardList  beerArr = {beers} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
