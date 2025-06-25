import { Modal } from '../ui/Modal'
import type { TClaimCard } from '@/types/compTypes'

type ClaimDetailsProps = {
  card: TClaimCard | null
  isOpen: boolean
  setIsOpen: (data: null) => void
}

export default function ClaimDetailsModal({ card, isOpen, setIsOpen }: ClaimDetailsProps) {
  return (
    <Modal open={isOpen} onOpenChange={() => setIsOpen(null)} title="Claim Details">
      <div className="text-md text-gray-700">
        <div className="mt-4 mb-4 border-b">
          <div className="mb-2 text-2xl font-bold tracking-tight">{card?.claim}</div>

          <div className="mb-2">
            <strong>Categories:</strong> {card?.categories.join(', ')}
          </div>
          <div className="mb-2">
            <strong>Relevant Laws:</strong> {card?.relevant_laws}
          </div>
          <div className="mb-2">
            <strong>Evidence Needed:</strong> {card?.evidence_needed}
          </div>
        </div>

        <div className="mt-4 mb-4 border-b">
          <h3 className="mb-2 text-2xl font-semibold">Legal Reasoning</h3>
          <div className="mb-2">
            <strong>Norma Infringida:</strong> {card?.legal_reasoning.norma_infringida || 'N/A'}
          </div>
          <div className="mb-2">
            <strong>Razonamiento:</strong> {card?.legal_reasoning.razonamiento}
          </div>
          <div className="mb-2">
            <strong>Consecuencia:</strong> {card?.legal_reasoning.consecuencia}
          </div>
          <div className="mb-2">
            <strong>Recommendation:</strong>
            {card?.legal_reasoning.overall.recommendation}
          </div>
        </div>
      </div>
    </Modal>
  )
}
