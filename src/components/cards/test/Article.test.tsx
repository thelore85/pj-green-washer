import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

// Mock del tuo store
vi.mock('@/store/appStore', () => ({
  useStore: vi.fn((selector) =>
    selector({
      articleSelected: '123',
      articleList: [
        {
          article_id: '123',
          title: 'Fake Article Title',
          text_summary: 'This is a summary.',
          url: 'https://example.com',
          claims: [],
        },
      ],
    }),
  ),
}))

import ArticleMain from '../ArticleMain'

describe('ArticleMain', () => {
  it('renders article title from store', () => {
    render(<ArticleMain />)
    expect(screen.getByText('Fake Article Title')).toBeInTheDocument()
  })

  it('renders article summary and url', () => {
    render(<ArticleMain />)
    expect(screen.getByText('This is a summary.')).toBeInTheDocument()
    expect(screen.getByText('https://example.com')).toBeInTheDocument()
  })

  it('renders risk level section', () => {
    render(<ArticleMain />)
    expect(screen.getByText('Nivel de riesgo de la afirmacione del articulo')).toBeInTheDocument()
  })
})
