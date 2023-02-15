import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BeerInfo from './components/containers/BeerInfo/BeerInfo';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { useEffect } from 'react';

const App = () => {
  const [beers, setBeers] = useState([])
  const [searchFilteredBeer, setSearchFilteredBeer] = useState(".")
  const [beerABV, setBeerABV] = useState("0")
  const [beerClassic, setBeerClassic] = useState("02-2023")
  const [beerAcid, setBeerAcid] = useState("")
  const [abvChecked,setAbvChecked] = useState(false)
  const [classicChecked,setClassicChecked] = useState(false)
  const [acidChecked,setAcidChecked] = useState(false)

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url + `?abv_gt=${beerABV}` + `&brewed_before=${beerClassic}` +  `&beer_name=${searchFilteredBeer}`);
    console.log(res)
    const data = await res.json();
    console.log("this is data", data)
    setBeers(data)
  };

  useEffect(() =>{
    getBeers(beerABV, beerClassic, searchFilteredBeer)
  }, [beerABV, beerClassic, searchFilteredBeer])

  const handleInput = (event) => {
    let searchTerm = "."
    if(event.target.value == ""){
      searchTerm = "."
    } else{
      searchTerm = event.target.value.replaceAll(" ", "_")
    }
    setSearchFilteredBeer(searchTerm)
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

    if (event.target.value === "acid" && acidChecked === false) {
      const acidFilteredArray = beers.filter(beer => beer.ph <= 4)
      setBeerAcid(acidFilteredArray) 
      setAcidChecked(true)
    } else if (event.target.value === "acid") {
      setBeerAcid(false)
      setAcidChecked(false)
    }
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
          beerArr = {beerAcid? beerAcid :beers}
          handleInput={handleInput}
          handleCheck={handleCheck}/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
