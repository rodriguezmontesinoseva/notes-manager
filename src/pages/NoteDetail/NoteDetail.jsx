import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import NoteForm from 'components/NoteForm/NoteForm'

const NoteDetail = () => {
  const { noteId } = useParams()
  const { t } = useTranslation('translator')
  const [isEditable, setIsEditable] = useState(false)

  const note = useSelector(
    store => store.notesSlice.noteList.find(note => note.id === noteId), //esto solo retorna una nota, no todo el listado
  )
  console.log('note ', note)

  return (
    <>
      {note && (
        <NoteForm
          title={note.title}
          // onSubmit={handleSubmit}
          t={t} // hay que pasarsela porque noteform la recibe para la label de los inputs
          // otra opcione es meterle el usetranslation en el noteform
          note={note}
          onClickDelete={() => alert('delete')}
          onClickEdit={() => setIsEditable(!isEditable)}
          isEditable={isEditable}
        />
      )}
    </>
  )
}

export default NoteDetail
