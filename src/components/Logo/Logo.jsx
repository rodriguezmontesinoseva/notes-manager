import PropTypes from 'prop-types'
import styles from './logo.module.css'

const Logo = ({ onClick, image, alt, title, subtitle }) => {
  return (
    <div className={styles.container} onClick={onClick} role="link">
      <div>
        <img className={styles.img} src={image} alt={alt} />
        <span className={styles.logo_txt}>{title}</span>
      </div>

      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  )
}

Logo.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.node.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Logo
