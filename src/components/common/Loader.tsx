import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import LogoMain from '../navigation/LogoMain'

export default function Loader() {
  // Utility

  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(40), 1000)
    const timer2 = setTimeout(() => setProgress(70), 3000)
    const timer3 = setTimeout(() => setProgress(100), 4300)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="bg-primary flex h-dvh items-center">
      <div className="m-auto text-center">
        <div className="m-auto mb-4 max-w-[350px] text-center">
          <LogoMain />
        </div>
        <div className="m-auto mb-10 w-full">
          <p className="text-md m-auto w-full text-center font-light tracking-widest text-white">Verifica promesas verdes y evita riesgos legales</p>
        </div>
        <Progress value={progress} />
      </div>
    </div>
  )
}
