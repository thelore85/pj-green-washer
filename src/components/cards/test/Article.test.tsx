import { render } from '@testing-library/react'

import ArticleMain from '../ArticleMain'

describe('Navigation section test', () => {
  it('Render NavMain with correct title', () => {
    render(<ArticleMain />)
    // expect(screen.getByText('Green Impact Metrics')).toBeInTheDocument()
  })
})
