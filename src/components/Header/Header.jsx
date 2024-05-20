import { useNavigate } from 'react-router-dom'
import logoSrc from './../../assets/images/logo.png'
import Logo from '../Logo/Logo'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import styles from './header.module.css'

const Header = () => {
  const navigate = useNavigate()

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
        alt="logo Notomatic"
        title="Notomatic"
        subtitle="Manage your notes"
        onClick={goNoteList}
      />
      <ButtonPrimary onClick={goNoteCreate}>New note +</ButtonPrimary>
    </header>
  )
}

export default Header
