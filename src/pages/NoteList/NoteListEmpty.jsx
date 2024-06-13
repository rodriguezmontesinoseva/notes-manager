import { Link } from 'react-router-dom'

const NoteListEmpty = () => {
  return (
    <div className="d-flex justify-content-center">
      <span>
        {`You don't have any note, do you want to `}
        <Link to="/note/new">create one? </Link>
      </span>
    </div>
  )
}

export default NoteListEmpty
