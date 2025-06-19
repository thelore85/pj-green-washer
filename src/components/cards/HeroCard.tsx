import { useStore } from '@/store/appStore'
import Button from '../cta/Buttons'
import { CheckCircle } from 'lucide-react'

export default function BackupCard() {
  const cardSelected = useStore((state) => state.urlSelected)

  const greenWasherBullets = [
    'Analyze your brand’s sustainability claims for regulatory compliance',
    'Detect potential greenwashing risks in your marketing content',
    'Get actionable insights to improve transparency and credibility',
    'Ensure alignment with EU Green Claims Directive and ESG standards',
  ]

  if (!cardSelected) {
    return (
      <div className="flex h-full items-center overflow-auto p-4 md:py-10">
        <div className="from-card to-muted ring-border relative m-auto w-full max-w-[800px] rounded-3xl bg-gradient-to-br p-10 shadow-2xl ring-1">
          <h2 className="text-foreground mb-3 text-6xl font-extrabold tracking-tight">Green Impact Metrics</h2>
          <h3 className="text-muted-foreground mb-8 text-xl font-medium">Measure your green communication impact.</h3>

          <ul className="text-foreground mb-10 space-y-4 text-left text-base">
            {greenWasherBullets.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 h-5 w-5" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <Button variant="primary">Start Now</Button>
        </div>
      </div>
    )
  }
}
