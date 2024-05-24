import Note from 'components/Note/Note'
import { useNavigate } from 'react-router-dom'

const NoteList = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Note
        title="Super note"
        subtitle="01/01/2022"
        content="Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla Blabla bla Blabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla blaBlabla bla"
        onClickNote={() => navigate('note/8')}
        onClickTrash={() => alert('OnClickTrash !')}
      />
    </div>
  )
}

export default NoteList
