import React from 'react'
import CardList from '../containers/CardList/CardList'
import SideNav from '../SideNav/SideNav'
import "./Main.scss"

const Main = (props) => {
    const {beerArr, handleInput, handleCheck} = props

  return (
    <div className='main'>
        <SideNav handleInput={handleInput} handleCheck={handleCheck}/>
        <CardList  beerArr = {beerArr} />
    </div>
  )
}

export default Main