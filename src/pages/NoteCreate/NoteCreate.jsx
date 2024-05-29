import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import NoteForm from 'components/NoteForm/NoteForm'
import { addNote } from 'store/notes/notes-slice'
import { createNote } from 'api/note'

const NoteCreate = () => {
  const { t } = useTranslation('translator')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async formValues => {
    const createdNote = await createNote({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    })
    dispatch(addNote(createdNote))
    alert('The note has been created')
    navigate('/')
  }

  return (
    <NoteForm title={t('form.new-note.title')} onSubmit={handleSubmit} t={t} />
  )
}

export default NoteCreate
