import axios from 'axios'

const createNewNote = ({ title, content }) => {
  return axios.post('http://localhost:3200/notes', {
    title,
    content,
    created_at: new Date().toLocaleDateString(),
  })
}

export default createNewNote
