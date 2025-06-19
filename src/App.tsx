import BackupCard from '@/components/cards/HeroCard'
import FooterApp from '@/components/navigation/FooterApp'
import NavMain from '@/components/navigation/NavMain'
import Loader from '@/components/common/Loader'
import SidebarLayout from '@/layouts/dashboard/SidebarLayout'
import { useInitApp } from '@/hooks/hooks'
import ClaimList from './components/cards/ClaimList'

export default function App() {
  const init = useInitApp()

  if (!init) return <Loader />

  if (init) {
    return (
      <>
        <SidebarLayout>
          <NavMain />
          {/* <ClaimCard /> */}
          <ClaimList />
          <BackupCard />
          <FooterApp />
        </SidebarLayout>
      </>
    )
  }
}
