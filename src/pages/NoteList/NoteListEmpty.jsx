import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NoteListEmpty = ({ t }) => {
  return (
    <div className="d-flex justify-content-center">
      <span>
        {t('list-empty.message')}
        <Link to="/note/new"> {t('list-empty.link')}</Link>
      </span>
    </div>
  )
}

NoteListEmpty.propTypes = {
  t: PropTypes.func,
}

export default NoteListEmpty
