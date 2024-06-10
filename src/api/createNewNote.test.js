import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import createNewNote from './createNewNote'

describe('createNewNote', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should make a POST request to /notes with the correct data', async () => {
    const noteData = {
      title: 'Test Title',
      content: 'Test Content',
    }

    mock.onPost('http://localhost:3200/notes').reply(201, {
      message: 'Note created',
    })

    await createNewNote(noteData)

    expect(mock.history.post[0].url).toBe('http://localhost:3200/notes')
    expect(JSON.parse(mock.history.post[0].data)).toEqual({
      title: 'Test Title',
      content: 'Test Content',
      created_at: new Date().toLocaleDateString(),
    })
  })
})
