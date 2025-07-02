import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

type ArticleRiskCardProps = {
  high: number
  middle: number
  low: number
}

export default function ArticleRiskCard({ high, middle, low }: ArticleRiskCardProps) {
  return (
    <>
      <h2 className="mx-auto mb-3 w-full max-w-[800px] text-3xl font-bold">Análisis de afirmaciones</h2>
      <div className="bg-card mx-auto mb-10 w-full max-w-[800px] rounded-2xl p-4 text-sm shadow-md transition-transform">
        <h3 className="mb-2 border-b-1 border-gray-200 text-lg font-bold">Nivel de riesgo de la afirmaciones del artículo </h3>

        <div className="text-md flex justify-between p-6 font-bold tracking-tight">
          {/* Risk lable  */}
          <div className="m-2 w-full rounded-lg bg-gray-100">
            <div className="w-full rounded-lg bg-red-200 px-4 py-2 text-center text-lg text-red-600">
              <FontAwesomeIcon icon={faCircleXmark} className="me-2" />
              <span>Riesgo Alto</span>
            </div>

            <div className="p-4 text-center">
              <span className="text-3xl font-bold">{high} </span>
              <p>Requiere acción inmediata</p>
            </div>
          </div>
          {/* Risk lable  */}
          <div className="m-2 w-full rounded-lg bg-gray-100">
            <div className="w-full rounded-xl bg-orange-100 px-4 py-2 text-center text-lg text-orange-400">
              <FontAwesomeIcon icon={faTriangleExclamation} className="me-2" />
              <span>Riesgo Medio</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-bold">{middle} </span>
              <p>Requiere medidas correctivas</p>
            </div>
          </div>
          {/* Risk lable  */}
          <div className="m-2 w-full rounded-lg bg-gray-100">
            <div className="w-full rounded-xl bg-green-200 px-4 py-2 text-center text-lg text-green-600">
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              <span>Riesgo Bajo</span>
            </div>
            <div className="p-4 text-center">
              <span className="text-3xl font-bold">{low} </span>
              <p>No requiere acción</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
