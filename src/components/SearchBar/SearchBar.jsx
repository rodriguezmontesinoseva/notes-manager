import PropTypes from 'prop-types'
import searchIcon from 'assets/images/search.png'
import styles from './searchBar.module.css'

const SearchBar = ({ onTextChange, placeholder }) => {
  return (
    <>
      <img src={searchIcon} alt="search icon" className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        onChange={e => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  )
}

SearchBar.propTypes = {
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default SearchBar
