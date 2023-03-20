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

  const [abvClassName, setAbvClassName] = useState(false)
  const [classicClassName, setClassicClassName] = useState(false)
  const [acidClassName, setAcidClassName] = useState(false)

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url + `?abv_gt=${beerABV}&brewed_before=${beerClassic}&beer_name=${searchFilteredBeer}`);
    const data = await res.json();
    console.log("this is data", data)
    setBeers(data)
  };

  useEffect(() =>{
    getBeers()
  }, [beerABV, beerClassic, searchFilteredBeer])

  const handleInput = (event) => {
    if(acidChecked) {
      if (!classicChecked && abvChecked){
        const searchTerm = event.target.value.toLowerCase()
        const searchFilteredArray = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm) && beer.ph <= 4 && beer.abv >6)
        setBeerAcid(searchFilteredArray)
      } else if (classicChecked && !abvChecked){
          const searchTerm = event.target.value.toLowerCase()
          const searchFilteredArray = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm) && beer.ph <= 4 && beer.first_brewed.at(-2)=== "0")
          setBeerAcid(searchFilteredArray)
      } else if (classicChecked && abvChecked){
        const searchTerm = event.target.value.toLowerCase()
        const searchFilteredArray = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm) && beer.ph <= 4 && beer.abv >6 && beer.first_brewed.at(-2)=== "0")
        setBeerAcid(searchFilteredArray)
      }else{
          const searchTerm = event.target.value.toLowerCase()
          const searchFilteredArray = beers.filter(beer => beer.name.toLowerCase().includes(searchTerm) && beer.ph <= 4)
          setBeerAcid(searchFilteredArray)
      }
    }else {
      let searchTerm = "."
      if(event.target.value === ""){
        searchTerm = "."
      } else{
        searchTerm = event.target.value.replaceAll(" ", "_")
      }
      setSearchFilteredBeer(searchTerm)
    }
  }

  const handleCheck = (event) => {  
    if(event.target.value ==="abv" && !abvChecked && acidChecked){
      setAbvChecked(true)
      setAbvClassName(true)
      if(classicChecked) {
        const acidFilteredArray = beers.filter(beer => beer.ph <= 4 && beer.abv >6 && beer.first_brewed.at(-2)=== "0")
        setBeerAcid(acidFilteredArray)
      } else {
        const acidFilteredArray = beers.filter(beer => beer.ph <= 4 && beer.abv >6)
        setBeerAcid(acidFilteredArray)
      }
    }else if (event.target.value ==="abv" && !abvChecked) {
      setBeerABV(6)
      setAbvChecked(true)
      setAbvClassName(true)
    } else if (event.target.value ==="abv") {
      setBeerABV("0")
      setAbvChecked(false)
      setAbvClassName(false) 
      if(acidChecked && classicChecked){
        const acidFilteredArray = beers.filter(beer => beer.ph <=4 && beer.first_brewed.at(-2)=== "0")
        setBeerAcid(acidFilteredArray)
      } else if (acidChecked){
        const acidFilteredArray = beers.filter(beer => beer.ph <=4)
        setBeerAcid(acidFilteredArray)
      }
    }


    if(event.target.value ==="classic" && !classicChecked && acidChecked){
      setClassicChecked(true)
      setClassicClassName(true)
      if(abvChecked) {
        const acidFilteredArray = beers.filter(beer => beer.ph <= 4 && beer.abv >6 && beer.first_brewed.at(-2)=== "0")
        setBeerAcid(acidFilteredArray)
      } else {
        const acidFilteredArray = beers.filter(beer => beer.ph <= 4 && beer.first_brewed.at(-2)=== "0")
        setBeerAcid(acidFilteredArray)
      }
    } else if (event.target.value === "classic" && !classicChecked) {
      setBeerClassic("12-2010")
      setClassicChecked(true)
      setClassicClassName(true)
    } else if (event.target.value ==="classic"){
      setBeerClassic("02-2023")
      setClassicChecked(false)
      setClassicClassName(false)
      if(acidChecked){
        const acidFilteredArray = beers.filter(beer => beer.ph <=4)
        setBeerAcid(acidFilteredArray)
      }
      if(acidChecked && classicChecked){
        const acidFilteredArray = beers.filter(beer => beer.ph <=4 && beer.abv > 6)
        setBeerAcid(acidFilteredArray)
      } else if (acidChecked){
        const acidFilteredArray = beers.filter(beer => beer.ph <=4)
        setBeerAcid(acidFilteredArray)
      }
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
          path='/punk-api' 
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
