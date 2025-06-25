import { render, screen } from '@testing-library/react'
import NavMain from '../NavMain'
import FooterApp from '../FooterApp'

describe('Navigation section test', () => {
  it('Render NavMain with correct title', () => {
    render(<NavMain />)
    expect(screen.getByText('Green Impact Metrics')).toBeInTheDocument()
  })
  it('Render Footer component', () => {
    render(<FooterApp />)
    expect(screen.getByText('This is the footer disclaimer')).toBeInTheDocument()
  })
})
