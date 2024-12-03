import PropTypes from 'prop-types';
import Styles from "./SearchBox.module.css"

const SearchBox = ({onSearch}) => {


  return (
    <div className='SearchBox'>
        <p className={Styles["find-contact"]}>Find contacts by name</p>
        <input type="text" className="search-input" onChange={onSearch} />
    </div>
  )
}

SearchBox.propTypes={
    onSearch: PropTypes.func.isRequired
};

export default SearchBox