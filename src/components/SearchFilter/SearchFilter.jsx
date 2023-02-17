import searchLogo from "../../assets/images/search-logo.jpg"
import "./SearchFilter.scss"

const SearchFilter = (props) => {

    const {handleInput} = props

    return(
        <div className="search">
            <label htmlFor="search-bar">
                <img className="search__logo" src={searchLogo} alt="" />
            </label>
            <input className="search__input" type="text" id="search-bar" onInput={handleInput} placeholder="Search Beers..."/>
        </div>
    )
}

export default SearchFilter