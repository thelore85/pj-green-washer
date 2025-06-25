import { useStore } from '@/store/appStore'
import type { ArticleCard } from '@/types/compTypes'

type ArticlePreviewCardProps = {
  article: ArticleCard
}

export default function ArticlePreviewCard({ article }: ArticlePreviewCardProps) {
  const selectArticle = useStore((state) => state.selectArticle)
  const articleSelected = useStore((state) => state.articleSelected)

  const handleUrlPreviewClick = () => {
    selectArticle(article.article_id)
  }

  const activeCard = articleSelected === article.article_id

  return (
    <div onClick={handleUrlPreviewClick} className={`${activeCard ? 'bg-gray-200' : 'bg-card'} mb-3 flex items-center rounded-2xl border-l-4 border-blue-950 px-4 py-2`}>
      <div className="">
        <h3 className="mb-1 font-bold">{article.title}</h3>
      </div>
    </div>
  )
}
