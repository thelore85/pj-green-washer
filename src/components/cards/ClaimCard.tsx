import type { TClaimCard } from '@/types/compTypes'

type ClaimCardProps = {
  card: TClaimCard
  setSelectedClaim: (card: TClaimCard) => void
}

export default function ClaimCard({ card, setSelectedClaim }: ClaimCardProps) {
  const status = card.legal_reasoning.overall.color
  const claimCategory = card.categories

  return (
    <div className="mx-auto mb-6 w-full cursor-pointer rounded-2xl bg-gray-100 shadow-md transition-transform hover:scale-[1.01]" onClick={() => setSelectedClaim(card)}>
      <div className="flex items-center gap-4 p-6">
        {/* Semaforo */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className={`mb-2 h-3 w-3 rounded-full ${status === 'Rojo' ? 'bg-red-600' : 'bg-gray-200'}`}></div>
          <div className={`mb-2 h-3 w-3 rounded-full ${status === 'Naranja' ? 'bg-orange-400' : 'bg-gray-200'}`}></div>
          <div className={`h-3 w-3 rounded-full ${status === 'Verde' ? 'bg-green-600' : 'bg-gray-200'}`}></div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-foreground mb-2 text-lg leading-snug font-bold">
            {card.claim?.slice(0, 100)} {card.claim.length > 100 && '...'}
          </h1>
          {claimCategory?.map((category) => (
            <span key={category} className="me-2 truncate text-xs font-light text-gray-400 italic">
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
