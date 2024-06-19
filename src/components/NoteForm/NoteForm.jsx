import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import pencil from 'assets/images/pencil.png'
import trashBlack from 'assets/images/trash-black.png'
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary'
import styles from './noteForm.module.css'
import { FieldError } from 'components/FieldError/FieldError'

const NoteForm = ({
  isEditable = true,
  title,
  onSubmit,
  note,
  onClickEdit,
  onClickDelete,
  t,
}) => {
  const [formValues, setFormValues] = useState({
    title: note?.title || '',
    content: note?.content || '',
  })

  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')

  const validate = () => {
    if (formValues?.title) {
      if (formValues.title.length < 3) {
        setTitleError('form.textfield-error-min-chars')
      } else if (formValues.title.length >= 3 && formValues.title.length < 20) {
        setTitleError('')
      } else if (formValues.title.length > 20) {
        setTitleError('form.textfield-error-max-chars')
      }
    }

    if (formValues?.content) {
      if (formValues?.content.length < 3) {
        setContentError('form.textarea-error-min-chars')
      } else setContentError('')
    }
  }

  useEffect(() => {
    validate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues])

  const updateFormValues = e => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(formValues)
  }

  const actionIcons = (
    <div className={styles.actionIcons_container}>
      {!isEditable && (
        <button type="button" className={styles.icon} onClick={onClickEdit}>
          <img src={pencil} alt="edit icon" />
        </button>
      )}
      {onClickDelete && (
        <button type="button" className={styles.icon} onClick={onClickDelete}>
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
      <FieldError message={titleError !== '' ? t(titleError) : ''} />
    </>
  )

  const contentInput = (
    <>
      <label htmlFor="content">{t('form.new-note.input-contain')}</label>
      <textarea
        type="text"
        name="content"
        id="content"
        maxLength={250}
        onChange={updateFormValues}
        value={formValues.content}
      />
      <FieldError message={contentError !== '' ? t(contentError) : ''} />
    </>
  )

  const submitBtn = (
    <ButtonPrimary
      type="submit"
      isDisabled={
        formValues.title === '' ||
        formValues.content === '' ||
        titleError !== '' ||
        titleError !== ''
      }
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
      <div className={styles.title}>{isEditable && titleInput}</div>
      <div className={styles.content}>
        {isEditable ? contentInput : <pre>{note.content}</pre>}
      </div>
      <div className={styles.submit_btn}>{onSubmit && submitBtn}</div>
    </form>
  )
}

export default NoteForm

NoteForm.propTypes = {
  isEditable: PropTypes.bool,
  title: PropTypes.string,
  onSubmit: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  note: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  t: PropTypes.func,
}
