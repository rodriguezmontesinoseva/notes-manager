import PropTypes from 'prop-types'
import styles from './buttonPrimary.module.css'

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

ButtonPrimary.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default ButtonPrimary
