import BackupCard from '@/components/cards/HeroCard'
import ScraperCard from '@/components/cards/ScraperCard'
import ScraperForm from '@/components/form/ScraperForm'
import FooterApp from '@/components/navigation/FooterApp'
import NavMain from '@/components/navigation/NavMain'
import Loader from '@/components/common/Loader'
import SidebarLayout from '@/layouts/dashboard/SidebarLayout'
import { useInitApp } from '@/hooks/hooks'

export default function App() {
  const init = useInitApp()

  if (!init) return <Loader />

  if (init) {
    return (
      <>
        <SidebarLayout>
          <NavMain />
          <ScraperCard />
          <BackupCard />
          <FooterApp />
        </SidebarLayout>

        {/* // Modals and Pop-Up used in the App  */}
        <ScraperForm />
      </>
    )
  }
}
