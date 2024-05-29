import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

let mockLanguage = 'es'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
    i18n: {
      get language() {
        return mockLanguage
      },
      changeLanguage: jest.fn(),
    },
  }),
}))

describe('Header component', () => {
  it('redirects to home page when clicking logo', () => {
    const { useNavigate } = require('react-router-dom')
    const navigate = jest.fn()
    useNavigate.mockReturnValue(navigate)

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    const logoElement = screen.getByText('logo.title')
    fireEvent.click(logoElement)
    expect(navigate).toHaveBeenCalledWith('/')
  })

  it('redirects to new-note page when clicking button', () => {
    const { useNavigate } = require('react-router-dom')
    const navigate = jest.fn()
    useNavigate.mockReturnValue(navigate)

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const buttonElement = screen.getByText('button-primary.new-note')
    fireEvent.click(buttonElement)
    expect(navigate).toHaveBeenCalledWith('note/new')
  })

  it('changes language and image when clicking language flag', () => {
    const { rerender } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const flagElement = screen.getByAltText('img.flag')
    expect(flagElement).toHaveAttribute('src', 'flag-spain.png')
    fireEvent.click(flagElement)
    mockLanguage = 'en'
    rerender(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    expect(flagElement).toHaveAttribute('src', 'flag-britain.png')
    fireEvent.click(flagElement)
    mockLanguage = 'es'
    rerender(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )
    expect(flagElement).toHaveAttribute('src', 'flag-spain.png')
  })
})
