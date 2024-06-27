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

  const filteredNoteList = noteList.filter(
    note =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.content.toLowerCase().includes(searchText.toLowerCase()) ||
      note.created_at.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <>
      <div className={styles.searchBar_container}>
        {noteList?.length !== 0 && (
          <SearchBar
            onTextChange={setSearchText}
            placeholder={t('search-bar.placeholder')}
          />
        )}
      </div>

      <div className={styles.cards_container}>
        {noteList?.length === 0 ? (
          <NoteListEmpty t={t} />
        ) : (
          <NoteList noteList={filteredNoteList} />
        )}
      </div>
    </>
  )
}
export default NoteListContainer
