import { useStore } from '@/store/appStore'
import BodyCanvas from '../../layouts/sidebar/BodyCanvas'
import Button from '../cta/Buttons'
import { CheckCircle } from 'lucide-react'

export default function BackupCard() {
  const cardSelected = useStore((state) => state.cardSelected)
  const setNewForm = useStore((state) => state.setNewScraperFormOpen)

  const appBullets = [
    'Track prices, trends, and product availability',
    'Extract blog posts, articles, and structured content',
    'Monitor real estate listings and job openings',
    'Collect reviews, opinions, and user sentiment from forums',
  ]
  if (!cardSelected) {
    return (
      <BodyCanvas layout="center">
        <div className="from-card to-muted ring-border relative m-auto w-full max-w-[800px] rounded-3xl bg-gradient-to-br p-10 shadow-2xl ring-1">
          <h2 className="text-foreground mb-3 text-6xl font-extrabold tracking-tight">
            Sky Scraper
          </h2>
          <h3 className="text-muted-foreground mb-8 text-xl font-medium">
            Explore the web. Harvest data. Stay free.
          </h3>

          <ul className="text-foreground mb-10 space-y-4 text-left text-base">
            {appBullets.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 h-5 w-5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <Button variant="primary" onClick={() => setNewForm(true)}>
            Start Scraping Now
          </Button>
        </div>
      </BodyCanvas>
    )
  }
}
