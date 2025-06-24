import { useStore } from '@/store/appStore'
import UrlCard from './ArticlePreviewCard'

export default function ArticlePreviewList() {
  const urlList = useStore((store) => store.urlList)

  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="mb-5 text-center font-bold tracking-tight">Articulos Analizado</h2>
      {urlList?.map((url) => {
        return <UrlCard key={url} url={url} />
      })}
    </div>
  )
}
