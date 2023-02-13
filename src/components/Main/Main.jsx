import React from 'react'
import CardList from '../containers/CardList/CardList'
import SearchFilter from '../SearchFilter/SearchFilter'
import "./Main.scss"

const Main = (props) => {
    const {beerArr, handleInput} = props

  return (
    <div className='main'>
        <SearchFilter handleInput={handleInput}/>
        <CardList  beerArr = {beerArr} />
    </div>
  )
}

export default Main