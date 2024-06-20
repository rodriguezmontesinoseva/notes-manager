import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteNoteById } from 'api/note'
import { deleteNote } from 'store/notes/notes-slice'

export const useDeleteNote = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const deleteNote_ = async (note, t) => {
    if (window.confirm(t('modal.delete-note.contain'))) {
      await deleteNoteById(note.id)
      dispatch(deleteNote(note))
      navigate('/')
    }
  }

  return deleteNote_
}
