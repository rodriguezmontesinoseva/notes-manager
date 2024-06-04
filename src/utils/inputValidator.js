export const minCharacters = (inputValue, min, t) => {
  if (inputValue.length < min) {
    return t('input-validator.min-characters.message', { min })
  }
}

export const maxCharacters = (inputValue, max, t) => {
  if (inputValue.length > max) {
    return t('input-validator.max-characters.message', { max })
  }
}
