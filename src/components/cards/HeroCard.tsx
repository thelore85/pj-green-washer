import { useStore } from '@/store/appStore'
import Button from '../cta/Buttons'
import { CheckCircle } from 'lucide-react'
import { CLAIM_CARD_DB } from '@/lib/db'
import repsolLogo from '@/assets/logos/repsol.jpeg'

export default function BackupCard() {
  const cardSelected = useStore((state) => state.articleSelected)
  const initDataApp = useStore((state) => state.initDataApp)
  const restartApp = useStore((store) => store.restartApp)

  const articleList = CLAIM_CARD_DB
  // const restartApp = useStore((state) => state.restartApp)

  const greenWasherBullets = [
    'Analiza las afirmaciones de sostenibilidad de tu marca para verificar el cumplimiento normativo',
    'Detecta posibles riesgos de greenwashing en tu contenido de marketing',
    'Obtén recomendaciones prácticas para mejorar la transparencia y la credibilidad',
    'Garantiza la alineación con la UCPD y la Dir. 2024/825 de la UE',
  ]

  const handleStartClick = () => {
    restartApp()
    setTimeout(() => {
      initDataApp(articleList)
    }, 5000)
  }

  if (!cardSelected) {
    return (
      <div className="flex h-full items-center overflow-auto p-4 md:py-10">
        <div className="m-auto">
          <div className="from-card to-muted ring-border relative m-auto w-full max-w-[800px] rounded-3xl bg-gradient-to-br p-10 shadow-2xl ring-1">
            <h2 className="text-foreground mb-3 text-6xl font-extrabold tracking-tight">GreenTrust Check</h2>
            <h3 className="text-muted-foreground mb-8 text-xl font-medium">Verifica promesas verdes y evita riesgos legales.</h3>

            <ul className="text-foreground mb-10 space-y-4 text-left text-base">
              {greenWasherBullets.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-0.5 h-5 w-5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" onClick={handleStartClick}>
              Ver Análisis
            </Button>
          </div>

          {/* Repsol card  */}
          <div className="bg-card m-auto mt-8 flex w-full max-w-[800px] items-center rounded-3xl p-4 shadow-2xl">
            <img src={repsolLogo} width="200" />
            <p className="text-sm">
              Este prototipo aplica la Directiva 2024/825 al litigio Iberdrola vs Repsol: rastrea las urls de las páginas de Repsol citadas en la sentencia, detecta las afirmaciones ambientales (“net-zero 2050”, “carburantes sostenibles”, etc.) y las contrasta con la nueva lista negra y los requisitos de evidencia.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
