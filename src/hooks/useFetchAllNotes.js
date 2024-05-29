import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setNoteList } from 'store/notes/notes-slice'
import { fetchAllNotes } from 'api/note'

export const useFetchAllNotes = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const response = await fetchAllNotes()
        dispatch(setNoteList(response))
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    getAllNotes()
  }, [])

  return { loading, error }
}
