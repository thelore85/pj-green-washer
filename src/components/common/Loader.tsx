import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'

export default function Loader() {
  // Utility

  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(40), 1000)
    const timer2 = setTimeout(() => setProgress(70), 2000)
    const timer3 = setTimeout(() => setProgress(100), 2300)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="bg-primary flex h-dvh items-center">
      <div className="m-auto text-center">
        <div className="mb-3">
          <h1 className="text-4xl font-bold tracking-tight text-white">MASKA</h1>
          <p className="text-center text-xs font-light tracking-tight text-white">Green Impact Metrics.</p>
        </div>
        <Progress value={progress} />
      </div>
    </div>
  )
}
