import './App.scss';
import CardList from './components/containers/CardList/CardList';
import beers from './data/punk';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeerInfo from './components/containers/BeerInfo/BeerInfo';
import SearchFilter from './components/SearchFilter/SearchFilter';
import { useState } from 'react';

function App() {

  const [filteredBeer, setFilteredBeer] = useState(beers)

  const handleInput = (event) => {
  const searchTerm = event.target.value.toLowerCase()
  const filteredArray = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm))
  setFilteredBeer(filteredArray)
  }

  return (
    <Router>
      <div className="App">

      <SearchFilter handleInput={handleInput}/>

        <Routes>
          <Route path='/beer/:beerId' element={<BeerInfo beerArr = {beers}/>}/>

          <Route path='/' element={<CardList  beerArr = {filteredBeer} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
