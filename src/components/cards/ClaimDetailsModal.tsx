import { Modal } from '../ui/Modal'
import type { ClaimCards } from '@/types/compTypes'

type ClaimDetailsProps = {
  card: ClaimCards | null
  isOpen: boolean
  setIsOpen: (data: null) => void
}

export default function ClaimDetailsModal({ card, isOpen, setIsOpen }: ClaimDetailsProps) {
  console.log('//// card: ', card)
  return (
    <Modal open={isOpen} onOpenChange={() => setIsOpen(null)} title="Claim Details">
      <div className="text-md text-gray-700">
        <div className="mt-4 mb-4 border-b">
          <div className="mb-2 text-2xl font-bold tracking-tight">{card?.claim}</div>
          <div className="mb-2">
            <strong>URL:</strong>{' '}
            <a href={card?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {card?.url}
            </a>
          </div>
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
          <h3 className="mb-2 text-2xl font-semibold">Analysis</h3>
          {Object.entries(card?.analysis || {}).map(([key, value]) => (
            <div key={key} className="mb-2 border-l-2 border-gray-300 pl-2">
              <div>
                <strong>{key}:</strong>
              </div>
              <div>Result: {value?.result}</div>
              <div>Source: {value?.source}</div>
              <div>Explanation: {value?.explanation}</div>
            </div>
          ))}
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
