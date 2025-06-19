export type SchedulerForm = {
  checkbox: boolean
  day: boolean
  week: boolean
  monthly: boolean
}

export type ScraperCardDetails = {
  claimType: string
  description: string
  findings: string[]
  riskLevel: string
  complianceScore: string
}

///////////////////////
export type AnalysisResult = {
  result: string
  source: string
  explanation: string
}

export type Analysis = {
  existence: AnalysisResult
  sufficiency: AnalysisResult
  actuality: AnalysisResult
  independence: AnalysisResult
}

export type LegalReasoning = {
  norma_infringida: string
  razonamiento: string
  consecuencia: string
  overall: {
    color: string
    recommendation: string
  }
}

export type ClaimCards = {
  id: number
  url: string
  claim: string
  categories: string[]
  relevant_laws: string
  evidence_needed: string
  analysis: Analysis
  legal_reasoning: LegalReasoning
}
