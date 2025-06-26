import { useStore } from '@/store/appStore'
import type { TClaimCard } from '@/types/compTypes'
import ClaimCard from './ClaimCard'
import { useEffect, useState } from 'react'
import ClaimDetailsModal from './ClaimDetailsModal'
import ArticleRiskCard from './ArticleRiskCard'

export default function ArticleMain() {
  // Store
  const articleSelected = useStore((store) => store.articleSelected)
  const articleList = useStore((store) => store.articleList)

  // state
  const [selectedClaim, setSelectedClaim] = useState<null | TClaimCard>(null)
  const article = articleList?.find((article) => article.article_id === articleSelected)

  const [low, setLow] = useState(0)
  const [middle, setMiddle] = useState(0)
  const [high, setHigh] = useState(0)

  useEffect(() => {
    if (!article) return

    setLow(0)
    setMiddle(0)
    setHigh(0)

    article.claims.forEach((claim) => {
      const color = claim.legal_reasoning.overall.color
      if (color === 'Rojo') setHigh((prev) => prev + 1)
      if (color === 'Naranja') setMiddle((prev) => prev + 1)
      if (color === 'Verde') setLow((prev) => prev + 1)
    })
  }, [article])

  if (article)
    return (
      <>
        <div className="flex-1 overflow-auto py-10">
          {/* Article metatada  */}
          <h2 className="mx-auto mb-3 w-full max-w-[800px] text-3xl font-bold">{article?.title}</h2>
          <div className="bg-card mx-auto mb-10 w-full max-w-[800px] rounded-2xl p-4 text-sm shadow-md transition-transform">
            <div className="mb-4">
              <h3 className="mb-2 border-b-1 border-gray-200 text-lg font-bold">Resumen</h3>
              <p>{article?.text_summary}</p>
            </div>
            <div className="mb-4">
              <h3 className="mb-2 border-b-1 border-gray-200 text-lg font-bold">Url</h3>
              <a href={article?.url} target="_blank" className="text-gray-300 italic">
                {article?.url}
              </a>
            </div>
          </div>

          <ArticleRiskCard high={high} middle={middle} low={low} />

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
