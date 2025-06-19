import { useStore } from '@/store/appStore'
import type { ClaimCards } from '@/types/compTypes'
import ClaimCard from './ClaimCard'
import { useState } from 'react'
import ClaimDetailsModal from './ClaimDetailsModal'

export default function ClaimList() {
  // Store
  const urlSelected = useStore((store) => store.urlSelected)
  const claimCards = useStore((store) => store.claimCards)

  // state
  const [selectedClaim, setSelectedClaim] = useState<null | ClaimCards>(null)
  const claimListBySelecton = claimCards.filter((claim) => claim.url === urlSelected)

  return (
    <>
      <div className="flex-1 overflow-auto py-10">
        {claimListBySelecton.map((card) => (
          <ClaimCard key={card.id} card={card} setSelectedClaim={setSelectedClaim} />
        ))}
      </div>

      {/* Modal */}
      <ClaimDetailsModal card={selectedClaim} isOpen={selectedClaim ? true : false} setIsOpen={setSelectedClaim} />
    </>
  )
}
