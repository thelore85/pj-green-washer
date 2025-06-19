import { useStore } from '@/store/appStore'
import ClaimPreviewCard from './UrlCard'

export default function UrlList() {
  const urlList = useStore((store) => store.urlList)

  return (
    <div className="h-full overflow-auto p-4">
      {urlList?.map((url) => {
        return <ClaimPreviewCard key={url} url={url} />
      })}
    </div>
  )
}
