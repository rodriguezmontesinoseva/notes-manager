import { useState } from 'react'
import PropTypes from 'prop-types'
import pencil from 'assets/images/pencil.png'
import trashBlack from 'assets/images/trash-black.png'
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary'
import styles from './noteForm.module.css'

const NoteForm = ({ title, onSubmit, note, onClickEdit, onClickDelete }) => {
  const [formValues, setFormValues] = useState({
    title: note?.title || '',
    content: note?.content || '',
  })
  // const [formErrors, setFormErrors] = useState({
  //   title: note?.title ? undefined : true,
  //   content: note?.content ? undefined : true,
  // })

  const editButton = () => {
    console.log('clic editar')
  }

  const deleteButton = () => {
    console.log('clic delete')
  }

  const updateFormValues = e => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(formValues)
  }

  const actionIcons = (
    <div className={styles.actionIcons_container}>
      {onClickEdit && (
        <button type="button" className={styles.icon} onClick={editButton}>
          <img src={pencil} alt="edit icon" />
        </button>
      )}
      {onClickDelete && (
        <button type="button" className={styles.icon} onClick={deleteButton}>
          <img src={trashBlack} alt="delete icon" />
        </button>
      )}
    </div>
  )

  const titleInput = (
    <>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={updateFormValues}
        value={formValues.title}
      />
    </>
  )

  const contentInput = (
    <>
      <label htmlFor="content">Contenido</label>
      <textarea
        type="text"
        name="content"
        id="content"
        rows="5"
        onChange={updateFormValues}
        value={formValues.content}
      />
    </>
  )

  const submitBtn = <ButtonPrimary type="submit">Submit</ButtonPrimary>

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <header className={styles.header_content}>
        <h2>{title}</h2>
        {actionIcons}
      </header>
      <div className={styles.title}>{titleInput}</div>
      <div className={styles.content}>{contentInput}</div>
      <div className={styles.submit_btn}>{onSubmit && submitBtn}</div>
    </form>
  )
}

export default NoteForm

NoteForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  note: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
}
