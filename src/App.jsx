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
  const [beerAcid, setBeerAcid] = useState()
  const [abvChecked,setAbvChecked] = useState(false)
  const [classicChecked,setClassicChecked] = useState(false)
  const [acidChecked,setAcidChecked] = useState(false)

  const [abvClassName, setAbvClassName] = useState(false)
  const [classicClassName, setClassicClassName] = useState(false)
  const [acidClassName, setAcidClassName] = useState(false)


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

    if(event.target.value ==="abv" && !abvChecked && acidChecked){
      setBeerABV(6)
      setAbvChecked(true)
      setAbvClassName(true)
      const beersCopy = [...beers]
      setBeerAcid(beersCopy)
      console.log("this is beer acid set to beers", beerAcid)
      /*
      const acidFilteredArray = beerAcid.filter(beer => beer.ph <= 4)
      setBeerAcid(acidFilteredArray) 
      console.log("this is beer acid after filtering", beerAcid)
      */
    }else if (event.target.value ==="abv" && !abvChecked) {
      setBeerABV(6)
      setAbvChecked(true)
      setAbvClassName(true)
    } else if (event.target.value ==="abv") {
      setBeerABV("0")
      setAbvChecked(false)
      setAbvClassName(false) 
    }

    if (event.target.value === "classic" && !classicChecked) {
      setBeerClassic("12-2010")
      setClassicChecked(true)
      setClassicClassName(true)
    } else if (event.target.value ==="classic"){
      setBeerClassic("02-2023")
      setClassicChecked(false)
      setClassicClassName(false)
    }

    if (event.target.value === "acid" && !acidChecked) {
      const acidFilteredArray = beers.filter(beer => beer.ph <= 4)
      setBeerAcid(acidFilteredArray) 
      setAcidChecked(true)
      setAcidClassName(true)
    } else if (event.target.value === "acid") {
      setBeerAcid(false)
      setAcidChecked(false)
      setAcidClassName(false)
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
          handleCheck={handleCheck}
          checkAbvClass={abvClassName}
          checkClassicClass={classicClassName}
          checkAcidClass ={acidClassName}/>} 
          /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
