import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Note from 'components/Note/Note'
import { deleteNoteById } from 'api/note'
import { deleteNote } from 'store/notes/notes-slice'
import { useTranslation } from 'react-i18next'

import styles from './noteList.module.css'

const NoteList = () => {
  const { t } = useTranslation('translator')

  const noteList = useSelector(store => store.notesSlice.noteList)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // XX abstraer esta función
  async function deleteNote_(note) {
    if (window.confirm(t('modal.delete-note.contain'))) {
      deleteNoteById(note.id)
      dispatch(deleteNote(note))
      navigate('/')
    }
  }

  return noteList.map(note => (
    <div key={note.id} className={styles.card_container}>
      <Note
        title={note.title}
        subtitle={note.created_at}
        content={note.content}
        onClickTrash={() => deleteNote_(note)}
        onClickNote={() => navigate(`note/${note.id}`)}
      />
    </div>
  ))
}
export default NoteList
