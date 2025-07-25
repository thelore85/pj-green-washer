import { useStore } from '@/store/appStore'
import ArticlePreviewCard from './ArticlePreviewCard'

export default function ArticlePreviewList() {
  const articleList = useStore((store) => store.articleList)

  return (
    <div className="h-full overflow-auto p-4">
      {articleList?.length !== 0 && <h2 className="mb-5 text-center font-bold tracking-tight">Páginas Analizadas</h2>}
      {articleList?.map((article) => {
        return <ArticlePreviewCard key={article.article_id} article={article} />
      })}
    </div>
  )
}
