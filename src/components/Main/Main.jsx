import React from 'react'
import CardList from '../containers/CardList/CardList'
import QuickLookInfo from '../QuickLookInfo/QuickLookInfo'
import SideNav from '../SideNav/SideNav'
import "./Main.scss"

const Main = (props) => {
    const {beerArr, handleInput, handleCheck, checkAbvClass, checkClassicClass, checkAcidClass, image, title} = props

  return (
    <div className='main'>
        <SideNav handleInput={handleInput} handleCheck={handleCheck} checkAbvClass={checkAbvClass} checkClassicClass={checkClassicClass} checkAcidClass ={checkAcidClass}/>
        <CardList  beerArr = {beerArr} />
        <QuickLookInfo image = {image} title={title}/>
    </div>
  )
}

export default Main