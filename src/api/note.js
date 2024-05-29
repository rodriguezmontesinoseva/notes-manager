import axios from 'axios'

const BASE_URL = 'http://localhost:3200/notes'

export async function fetchAllNotes() {
  const response = await axios.get(`${BASE_URL}`)
  return response.data
}

// const createNote = async formValues => {
//   return (await axios.post(`${BASE_URL}`, formValues)).data
// }

// const deleteNoteById = async noteId => {
//   return (await axios.delete(`${BASE_URL}/${noteId}`)).data
// }

// const updateNoteById = async (id, values) => {
//   return (await axios.patch(`${BASE_URL}/${id}`, values)).data
// }

// const fetchNoteById = async noteId => {
//   return (await axios.get(`${BASE_URL}/${noteId}`)).data
// }
