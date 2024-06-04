import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import pencil from 'assets/images/pencil.png'
import trashBlack from 'assets/images/trash-black.png'
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary'
import styles from './noteForm.module.css'
import { FieldError } from 'components/FieldError/FieldError'
import { maxCharacters, minCharacters } from 'utils/inputValidator'

const NoteForm = ({ title, onSubmit, note, onClickEdit, onClickDelete, t }) => {
  const [formValues, setFormValues] = useState({
    title: note?.title || '',
    content: note?.content || '',
  })
  const [formErrors, setFormErrors] = useState({
    title: true,
    content: true,
  })

  useEffect(() => {
    console.log('formErrors ', formErrors)
  }, [formErrors])

  const editButton = () => {
    console.log('clic editar')
  }

  const deleteButton = () => {
    console.log('clic delete')
  }

  //CUANDO HAGO CLICK EN LA BANDERA EL ERROR SE RESETEA
  const validator = {
    title: value => {
      return minCharacters(value, 3, t) || maxCharacters(value, 20, t)
    },
    content: value => {
      return minCharacters(value, 3, t)
    },
  }

  const hasError = () => {
    for (const fieldName in formErrors) {
      console.log('fieldName ', fieldName)
      console.log('formErrors ', formErrors)
      console.log('formErrors[fieldName] ', formErrors[fieldName])

      if (formErrors[fieldName]) {
        return true
      }
    }
    return false
  }

  const updateFormValues = e => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormValues({ ...formValues, [inputName]: inputValue })
    validations({ inputName, inputValue })
  }

  const validations = ({ inputName, inputValue }) => {
    setFormErrors({
      ...formErrors,
      [inputName]: validator[inputName](inputValue),
    })
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
      <label htmlFor="title">{t('form.new-note.input-title')}</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={updateFormValues}
        value={formValues.title}
      />
      <FieldError message={formErrors.title} />
    </>
  )

  const contentInput = (
    <>
      <label htmlFor="content">{t('form.new-note.input-contain')}</label>
      <textarea
        type="text"
        name="content"
        id="content"
        rows="5"
        onChange={updateFormValues}
        value={formValues.content}
      />
      <FieldError message={formErrors.content} />
    </>
  )

  const submitBtn = (
    <ButtonPrimary
      type="submit"
      isDisabled={hasError()}
      onClick={() => onSubmit(formValues)}
    >
      {t('form.new-note.save')}
    </ButtonPrimary>
  )

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
  t: PropTypes.func,
}
