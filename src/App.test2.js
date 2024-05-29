import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe.skip('App component', () => {
  it.skip('renders Header and Outlet correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('banner')).toBeInTheDocument()

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
