import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import NoteList from './NoteList'
import NoteListEmpty from './NoteListEmpty'

import styles from './noteListContainer.module.css'
import SearchBar from 'components/SearchBar/SearchBar'

const NoteListContainer = () => {
  const { t } = useTranslation('translator')
  const noteList = useSelector(store => store.notesSlice.noteList)
  const [searchText, setSearchText] = useState('')

  const filteredNoteList = noteList.filter(note => {
    const titleUppercase = note?.title?.trim().toUpperCase()
    const containsTitle = titleUppercase.includes(
      searchText.trim().toUpperCase(),
    )

    const contentUppercase = note?.content?.trim().toUpperCase()
    const containsContent = contentUppercase.includes(
      searchText.trim().toUpperCase(),
    )

    const containsCreatedAt = note.created_at.includes(searchText.trim())

    return containsTitle || containsContent || containsCreatedAt
  })

  return (
    <>
      <div className={styles.searchBar_container}>
        {
          <SearchBar
            onTextChange={setSearchText}
            placeholder={t('search-bar.placeholder')}
          />
        }
      </div>

      <div className={styles.cards_container}>
        {noteList?.length === 0 ? (
          <NoteListEmpty />
        ) : (
          <NoteList noteList={filteredNoteList} />
        )}
      </div>
    </>
  )
}
export default NoteListContainer
