import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Note from 'components/Note/Note'
import { useDeleteNote } from 'hooks/useDeleteNote'

import styles from './noteList.module.css'

const NoteList = ({ noteList }) => {
  const { t } = useTranslation('translator')

  const navigate = useNavigate()
  const deleteNote_ = useDeleteNote()

  return noteList.map(note => (
    <div key={note.id} className={styles.card_container}>
      <Note
        title={note.title}
        subtitle={note.created_at}
        content={note.content}
        onClickTrash={() => deleteNote_(note, t)}
        onClickNote={() => navigate(`note/${note.id}`)}
      />
    </div>
  ))
}
export default NoteList
