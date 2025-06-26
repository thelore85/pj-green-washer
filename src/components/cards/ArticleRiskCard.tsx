type ArticleRiskCardProps = {
  high: number
  middle: number
  low: number
}

export default function ArticleRiskCard({ high, middle, low }: ArticleRiskCardProps) {
  return (
    <>
      <h2 className="mx-auto mb-3 w-full max-w-[800px] text-3xl font-bold">Analisis de afirmaciones</h2>
      <div className="bg-card mx-auto mb-10 w-full max-w-[800px] rounded-2xl p-4 text-sm shadow-md transition-transform">
        <h3 className="mb-2 border-b-1 border-gray-200 text-lg font-bold">Nivel de riesgo de la afirmacione del articulo </h3>
        <div className="text-md flex justify-between p-6 font-bold tracking-tight">
          {/* Risk lable  */}
          <div className="flex items-center">
            <div className="me-3 h-4 w-4 rounded-full bg-red-600"></div>
            <span>Alto - {high}</span>
          </div>
          {/* Risk lable  */}
          <div className="flex items-center">
            <div className="me-3 h-4 w-4 rounded-full bg-orange-400"></div>
            <span>Medio - {middle}</span>
          </div>
          {/* Risk lable  */}
          <div className="flex items-center">
            <div className="me-3 h-4 w-4 rounded-full bg-green-600"></div>
            <span>Bajo - {low}</span>
          </div>
        </div>
      </div>
    </>
  )
}
