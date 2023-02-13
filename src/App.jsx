import './App.scss';
import beers from './data/punk';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeerInfo from './components/containers/BeerInfo/BeerInfo';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

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
      <Nav/>
        <Routes>
          <Route path='/beer/:beerId' element={<BeerInfo beerArr = {beers}/>}/>

          <Route path='/' element={<Main  beerArr = {filteredBeer}  handleInput={handleInput} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
