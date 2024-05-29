import PropTypes from 'prop-types'
import styles from './buttonPrimary.module.css'

const ButtonPrimary = ({ children, onClick, type = 'button' }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

ButtonPrimary.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default ButtonPrimary
