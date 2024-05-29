import axios from 'axios'

const BASE_URL = 'http://localhost:3200/notes'

export async function fetchAllNotes() {
  const response = await axios.get(`${BASE_URL}`)
  return response.data
}

export async function createNote(formValues) {
  const response = await axios.post(`${BASE_URL}`, formValues)
  return response.data
}

export async function deleteNoteById(noteId) {
  return await axios.delete(`${BASE_URL}/${noteId}`)
}

export async function updateNoteById(id, values) {
  const response = await axios.patch(`${BASE_URL}/${id}`, values)
  return response.data
}

export async function fetchNoteById(noteId) {
  const response = await axios.get(`${BASE_URL}/${noteId}`)
  return response.data
}
