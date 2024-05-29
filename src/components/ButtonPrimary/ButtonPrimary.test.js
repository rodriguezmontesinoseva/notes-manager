import { render, screen, fireEvent } from '@testing-library/react'
import ButtonPrimary from './ButtonPrimary'

describe('Button Primary component', () => {
  it('has a button displayed', () => {
    const buttonText = 'Click Me'
    render(<ButtonPrimary>{buttonText} </ButtonPrimary>)
    const buttonElement = screen.getByText(buttonText)
    expect(buttonElement).toBeInTheDocument()
  })
  it('is clicked', () => {
    const handleClick = jest.fn()
    render(<ButtonPrimary onClick={handleClick}>Test</ButtonPrimary>)

    fireEvent.click(screen.getByText('Test'))
    expect(handleClick).toHaveBeenCalled()
  })
})
