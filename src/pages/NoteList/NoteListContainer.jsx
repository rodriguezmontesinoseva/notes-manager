import { useSelector } from 'react-redux'
import NoteList from './NoteList'
import NoteListEmpty from './NoteListEmpty'

import styles from './noteList.module.css'

const NoteListContainer = () => {
  const noteList = useSelector(store => store.notesSlice.noteList)

  console.log('noteList.length ', noteList.length)

  return (
    <div className={styles.cards_container}>
      {noteList?.length === 0 ? <NoteListEmpty /> : <NoteList />}
    </div>
  )
}
export default NoteListContainer
