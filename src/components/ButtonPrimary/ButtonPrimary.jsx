import PropTypes from 'prop-types'
import styles from './buttonPrimary.module.css'

const ButtonPrimary = ({
  children,
  onClick = () => {},
  type = 'button',
  isDisabled,
}) => {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

ButtonPrimary.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default ButtonPrimary
