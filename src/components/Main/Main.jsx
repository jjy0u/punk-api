import React from 'react'
import { useState } from 'react'
import CardList from '../containers/CardList/CardList'
import QuickLookInfo from '../QuickLookInfo/QuickLookInfo'
import SideNav from '../SideNav/SideNav'
import "./Main.scss"

const Main = (props) => {
    const [showQuickLook, setShowQuickLook] = useState(false);

    const {beerArr, handleInput, handleCheck, checkAbvClass, checkClassicClass, checkAcidClass, image, title} = props


    const toggleQuickLook = (event) => {
      event.preventDefault();
      setShowQuickLook(!showQuickLook);
    };

  return (
    <div className='main'>
        <SideNav handleInput={handleInput} handleCheck={handleCheck} checkAbvClass={checkAbvClass} checkClassicClass={checkClassicClass} checkAcidClass ={checkAcidClass}/>
        <CardList  beerArr = {beerArr} toggleQuickLook = {toggleQuickLook} />
        {showQuickLook && <QuickLookInfo image = {image} title={title} toggleQuickLook = {toggleQuickLook}/>}
    </div>
  )
}

export default Main