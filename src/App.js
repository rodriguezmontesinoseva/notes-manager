import { Outlet } from 'react-router-dom'
import { useFetchAllNotes } from 'hooks/useFetchAllNotes'
import Header from 'components/Header/Header'
import styles from './app.module.css'

function App() {
  const { loading, error } = useFetchAllNotes()

  if (error) return <p>Error: {error.message}</p> // pageNotFound?
  return (
    <div>
      <Header />
      <main className={styles.main_container}>
        {loading ? 'loading...' : <Outlet />}
      </main>
    </div>
  )
}

export default App
