import './App.scss';
//import beers from './data/punk';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeerInfo from './components/containers/BeerInfo/BeerInfo';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import SideNav from './components/SideNav/SideNav';

const App = () => {
  const [beers, setBeers] = useState([])
  const [filteredBeer, setFilteredBeer] = useState([])

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    console.log("this is data", data)
    setBeers(data)
    setFilteredBeer(data)
  };

  useEffect(() =>{
    getBeers()
  }, [])

  console.log("this is filtered beer",filteredBeer)

  const handleInput = (event) => {
  const searchTerm = event.target.value.toLowerCase()
  const filteredArray = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm))
  setFilteredBeer(filteredArray)
  }

  console.log("This is beers", beers)


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
