import logo from '@/assets/logos/logo_full_white_bg.jpeg'
import { useStore } from '@/store/appStore'

export default function LogoMain() {
  const resetUrlSelection = useStore((store) => store.selectArticle)
  const resetArticleList = useStore((store) => store.resetArticleList)

  const handleLogoClick = () => {
    resetUrlSelection(null)
    resetArticleList()
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center rounded-full bg-white" onClick={handleLogoClick}>
        <img src={logo} className="rounded-full" />
      </div>
    </div>
  )
}
