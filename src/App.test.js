import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import App from './App'

describe('App component', () => {
  test('renders Header and Outlet correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={<div data-testid="outlet-content">Home Page</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    // Verifica que el Header se renderiza
    expect(screen.getByRole('banner')).toBeInTheDocument()

    // Verifica que el Outlet se renderiza
    expect(screen.getByTestId('outlet-content')).toBeInTheDocument()
  })
})
