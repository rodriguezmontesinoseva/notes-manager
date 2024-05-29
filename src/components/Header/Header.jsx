import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoSrc from './../../assets/images/logo.png'
import flagBritain from 'assets/images/flag-britain.png'
import flagSpain from 'assets/images/flag-spain.png'
import Logo from 'components/Logo/Logo'
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary'
import styles from './header.module.css'

const Header = () => {
  const { t, i18n } = useTranslation('translator')
  const navigate = useNavigate()

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const goNoteList = () => {
    navigate('/')
  }
  const goNoteCreate = () => {
    navigate('note/new')
  }

  return (
    <header className={styles.container}>
      <Logo
        image={logoSrc}
        alt={t('logo.alt')}
        title={t('logo.title')}
        subtitle={t('logo.subtitle')}
        onClick={goNoteList}
      />

      <div>
        <ButtonPrimary onClick={goNoteCreate}>
          {t('button-primary.new-note')}
        </ButtonPrimary>
        <img
          alt={t('img.flag')}
          src={i18n.language === 'es' ? flagSpain : flagBritain}
          onClick={switchLanguage}
          className={styles.languageFlag}
        />
      </div>
    </header>
  )
}

export default Header
