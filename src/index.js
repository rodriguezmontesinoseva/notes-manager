import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'
import './locales/i18n-config'

import App from 'App'
import NoteList from 'pages/NoteList/NoteList'
import NoteDetail from 'pages/NoteDetail/NoteDetail'
import NoteCreate from 'pages/NoteCreate/NoteCreate'
import PageNotFound from 'pages/PageNotFound/PageNotFound'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <NoteList /> },
      { path: 'note/:noteId', element: <NoteDetail /> },
      { path: 'note/new', element: <NoteCreate /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
