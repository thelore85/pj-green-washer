import { useStore } from '@/store/appStore'

type UrlCardProps = {
  url: string
}

export default function ArticlePreviewCard({ url }: UrlCardProps) {
  const selectUrl = useStore((state) => state.selectUrl)
  const handleUrlPreviewClick = () => {
    selectUrl(url)
  }

  const shortUrl = url.split('/')
  return (
    <div onClick={handleUrlPreviewClick} className={`bg-card mb-3 flex items-center rounded-2xl border-l-4 px-4 py-2`}>
      <div className="">
        <h3 className="mb-1 font-bold">{shortUrl[2]}</h3>
      </div>
    </div>
  )
}
