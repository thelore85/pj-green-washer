import BackupCard from '@/components/cards/HeroCard'
import FooterApp from '@/components/navigation/FooterApp'
import NavMain from '@/components/navigation/NavMain'
import Loader from '@/components/common/Loader'
import SidebarLayout from '@/layouts/dashboard/SidebarLayout'
import { useInitApp } from '@/hooks/hooks'
import ArticleMain from './components/cards/ArticleMain'

export default function App() {
  const init = useInitApp()

  if (!init) return <Loader />

  if (init) {
    return (
      <>
        <SidebarLayout>
          <NavMain />
          <ArticleMain />
          <BackupCard />
          <FooterApp />
        </SidebarLayout>
      </>
    )
  }
}
