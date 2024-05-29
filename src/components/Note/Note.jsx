import PropTypes from 'prop-types'
import { useState } from 'react'

import trashGrey from 'assets/images/trash-grey.png'
import trashRed from 'assets/images/trash-red.png'

import styles from './note.module.css'

const Note = ({ title, content, subtitle, onClickNote, onClickTrash }) => {
  const [isNoteHovered, setIsNoteHovered] = useState(false)
  const [isTrashHovered, setIsTrashHovered] = useState(false)

  function onClickTrash_(e) {
    onClickTrash()
    e.stopPropagation()
  }
  return (
    <div
      onClick={onClickNote}
      className={styles.container}
      onMouseEnter={() => setIsNoteHovered(true)}
      onMouseLeave={() => setIsNoteHovered(false)}
    >
      <div className={styles.title_row}>
        <h5 className={styles.title}>{title}</h5>

        {isNoteHovered && (
          <img
            className={styles.trash_icon}
            src={isTrashHovered ? trashRed : trashGrey}
            alt="trash"
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
            onClick={onClickTrash_}
          />
        )}
      </div>
      <h6 className={styles.subtitle}>{subtitle}</h6>
      <p className={styles.text_content}>{content}</p>
    </div>
  )
}

Note.propTypes = {
  onClickNote: PropTypes.func,
  onClickTrash: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
}

export default Note
