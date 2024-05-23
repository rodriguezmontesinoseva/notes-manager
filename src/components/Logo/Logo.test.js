import { render, screen, fireEvent } from '@testing-library/react'
import Logo from './Logo'
import logoSrc from './../../assets/images/logo.png'

describe('Logo component', () => {
  const props = {
    onClick: jest.fn(),
    image: logoSrc,
    alt: 'alt',
    title: 'Titulo',
    subtitle: 'Subtitulo',
  }
  beforeEach(() => {
    render(<Logo {...props} />)
  })
  it('has an image, title and subtitle displayed', () => {
    const imgElement = screen.getByRole('img')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute(
      'src',
      expect.stringContaining('logo.png'),
    )

    const altElement = screen.getByAltText(props.alt)
    expect(altElement).toBeInTheDocument()

    const titleElement = screen.getByText(props.title)
    expect(titleElement).toBeInTheDocument()

    const subTitleElement = screen.getByText(props.subtitle)
    expect(subTitleElement).toBeInTheDocument()
  })

  it('calls onClick when the div is clicked', () => {
    const containerElement = screen.getByRole('link')
    fireEvent.click(containerElement)
    expect(props.onClick).toHaveBeenCalled()
  })
})
