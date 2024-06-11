import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import NoteForm from 'components/NoteForm/NoteForm'
import { updateNoteById } from 'api/note'
import { updateNote } from 'store/notes/notes-slice'
import PageNotFound from 'pages/PageNotFound/PageNotFound'

const NoteDetail = () => {
  const { noteId } = useParams()
  const { t } = useTranslation('translator')
  const [isEditable, setIsEditable] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const note = useSelector(
    store => store.notesSlice.noteList.find(note => note.id === noteId), //esto solo retorna una nota, no todo el listado
  )

  const submit = async formValues => {
    const response = await updateNoteById(note.id, {
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    })
    dispatch(updateNote(response))
    setIsEditable(false)
    alert(t('form.update-note.modal')) // tengo que aceptarlo 2 veces para que desaparezca
    navigate('/')
  }

  return (
    <>
      {note ? (
        <NoteForm
          t={t}
          isEditable={isEditable}
          title={isEditable ? t('form.update-note.title') : note.title}
          note={note}
          onClickDelete={() => alert('delete')}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      ) : (
        <PageNotFound />
      )}
    </>
  )
}

export default NoteDetail
