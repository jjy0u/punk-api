import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeerInfo from './components/containers/BeerInfo/BeerInfo';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { useEffect } from 'react';

const App = () => {
  const [beers, setBeers] = useState([])
  const [searchFilteredBeer, setSearchFilteredBeer] = useState()
  const [beerABV, setBeerABV] = useState("0")
  const [beerClassic, setBeerClassic] = useState("02-2023")
  const [abvChecked,setAbvChecked] = useState(false)
  const [classicChecked,setClassicChecked] = useState(false)
  //const [acidChecked,setAcidChecked] = useState(false)



  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url + `?abv_gt=${beerABV}` + `&brewed_before=${beerClassic}`);
    const data = await res.json();
    console.log("this is data", data)
    setBeers(data)
  };

  useEffect(() =>{
    getBeers(beerABV, beerClassic)
  }, [beerABV, beerClassic])

  const handleInput = (event) => {
  const searchTerm = event.target.value.toLowerCase()
  const searchFilteredArray = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm))
  setSearchFilteredBeer(searchFilteredArray)
  }

  const handleCheck = (event) => {  
    if (event.target.value ==="abv" && abvChecked === false) {
      setBeerABV(6)
      setAbvChecked(true)
    } else if (event.target.value ==="abv") {
      setBeerABV("0")
      setAbvChecked(false)
    }

    if (event.target.value === "classic" && classicChecked === false) {
      setBeerClassic("12-2010")
      setClassicChecked(true)
    } else if (event.target.value ==="classic"){
      setBeerClassic("02-2023")
      setClassicChecked(false)

    }
    //if (event.target.innerHTML.includes("Acid")) {
    //  setBeerABV(6)
    //}
  }

  return (
    <Router>
      <div className="App">
      <Nav/>
        <Routes>
          <Route 
          path='/beer/:beerId' 
          element={<BeerInfo 
          beerArr = {beers}/>} />

          <Route 
          path='/' 
          element={<Main  
          beerArr = {searchFilteredBeer? searchFilteredBeer : beers}  
          handleInput={handleInput}
          handleCheck={handleCheck}/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
