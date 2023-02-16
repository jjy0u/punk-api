import React from 'react'
import CardList from '../containers/CardList/CardList'
import SideNav from '../SideNav/SideNav'
import "./Main.scss"

const Main = (props) => {

    const {beerArr, handleInput, handleCheck, checkAbvClass, checkClassicClass, checkAcidClass,} = props



  return (
    <div className='main'>
        <SideNav handleInput={handleInput} handleCheck={handleCheck} checkAbvClass={checkAbvClass} checkClassicClass={checkClassicClass} checkAcidClass ={checkAcidClass}/>
        <CardList  beerArr = {beerArr} />
    </div>
  )
}

export default Main