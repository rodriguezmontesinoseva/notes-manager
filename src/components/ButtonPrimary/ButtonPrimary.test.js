import { render, screen } from '@testing-library/react'
import ButtonPrimary from './ButtonPrimary'

describe('Button Primary component', () => {
  it('has a button displayed', () => {
    const buttonText = 'Click Me'
    render(<ButtonPrimary>{buttonText} </ButtonPrimary>)
    const buttonElement = screen.getByText(buttonText)
    expect(buttonElement).toBeInTheDocument()
  })
})
