import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Note from 'components/Note/Note'
import styles from './noteList.module.css'

const NoteList = () => {
  const noteList = useSelector(store => store.notesSlice.noteList)
  const navigate = useNavigate()
  return (
    <div className={styles.cards_container}>
      {noteList.map(note => (
        <div key={note.id} className={styles.card_container}>
          <Note
            title={note.title}
            subtitle={note.created_at}
            content={note.content}
            onClickTrash={() => alert('onClickTrash()')}
            onClickNote={() => navigate(`note/${note.id}`)}
          />
        </div>
      ))}
    </div>
  )
}
export default NoteList
