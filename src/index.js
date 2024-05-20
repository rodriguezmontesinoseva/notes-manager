import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import NoteList from './pages/NoteList/NoteList'
import NoteDetail from './pages/NoteDetail/NoteDetail'
import NoteCreate from './pages/NoteCreate/NoteCreate'
import PageNotFound from './pages/PageNotFound/PageNotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <NoteList /> },
      { path: 'note/:id', element: <NoteDetail /> },
      { path: 'note/new', element: <NoteCreate /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
