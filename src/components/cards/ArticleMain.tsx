import { useStore } from '@/store/appStore'
import type { TClaimCard } from '@/types/compTypes'
import ClaimCard from './ClaimCard'
import { useState } from 'react'
import ClaimDetailsModal from './ClaimDetailsModal'

export default function ArticleMain() {
  // Store
  const articleSelected = useStore((store) => store.articleSelected)
  const articleList = useStore((store) => store.articleList)

  // state
  const [selectedClaim, setSelectedClaim] = useState<null | TClaimCard>(null)
  const article = articleList?.find((article) => article.article_id === articleSelected)

  return (
    <>
      <div className="flex-1 overflow-auto py-10">
        {/* Article metatada  */}
        <h2 className="mx-auto mb-3 w-full max-w-[800px] text-3xl font-bold">{article?.title}</h2>
        <div className="bg-card mx-auto mb-10 w-full max-w-[800px] cursor-pointer rounded-2xl p-4 text-sm shadow-md transition-transform">
          <div className="mb-4">
            <h3 className="mb-2 border-b-1 border-gray-200 text-lg font-bold">Resumen</h3>
            <p>{article?.text_summary}</p>
          </div>
          <div className="mb-4">
            <h3 className="mb-2 border-b-1 border-gray-200 text-lg font-bold">Url</h3>
            <span className="text-gray-300 italic">{article?.url}</span>
          </div>
        </div>

        {/* Article risl analytis  */}
        <h2 className="mx-auto mb-3 w-full max-w-[800px] text-3xl font-bold">Analisis de afirmaciones</h2>
        <div className="bg-card mx-auto mb-10 w-full max-w-[800px] cursor-pointer rounded-2xl p-4 text-sm shadow-md transition-transform">
          <h3 className="mb-2 border-b-1 border-gray-200 text-lg font-bold">Nivel de riesgo de la afirmacione del articulo </h3>
          <div className="text-md flex justify-between p-6 font-bold tracking-tight">
            {/* Risk lable  */}
            <div className="flex items-center">
              <div className="me-3 h-4 w-4 rounded-full bg-red-600"></div>
              <span>Alto - 10</span>
            </div>
            {/* Risk lable  */}
            <div className="flex items-center">
              <div className="me-3 h-4 w-4 rounded-full bg-orange-400"></div>
              <span>Medio - 10</span>
            </div>
            {/* Risk lable  */}
            <div className="flex items-center">
              <div className="me-3 h-4 w-4 rounded-full bg-green-600"></div>
              <span>Bajo - 10</span>
            </div>
          </div>
        </div>

        {/* Article claims  */}
        <div className="bg-card mx-auto mb-10 w-full max-w-[800px] cursor-pointer rounded-2xl p-4 text-sm shadow-md transition-transform">
          <h3 className="mb-6 border-b-1 border-gray-200 text-lg font-bold">Listado de afirmaciones</h3>
          {article?.claims.map((claim) => <ClaimCard key={claim.claim_id} card={claim} setSelectedClaim={setSelectedClaim} />)}
        </div>
      </div>

      {/* Modal */}
      <ClaimDetailsModal card={selectedClaim} isOpen={selectedClaim ? true : false} setIsOpen={setSelectedClaim} />
    </>
  )
}
