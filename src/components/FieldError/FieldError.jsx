import PropTypes from 'prop-types'
import styles from './fieldError.module.css'

export const FieldError = ({ message }) => {
  return <span className={styles.messageError}>{message}</span>
}

FieldError.propTypes = {
  message: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}
