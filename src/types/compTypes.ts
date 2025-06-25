///////////////////////////////////////////
///////////////////////////////////////////

// Primitive structures
export type EvaluationResult = 'Sí' | 'Parcial' | 'Actual' | 'Interna' | string

export type AnalysisDetail = {
  result: EvaluationResult
  explanation: string
}

// Analysis block
export type ClaimAnalysis = {
  existence: AnalysisDetail
  sufficiency: AnalysisDetail
  actuality: AnalysisDetail
  independence: AnalysisDetail
}

// Legal reasoning block
export type LegalReasoning = {
  norma_infringida: string
  razonamiento: string
  consecuencia: string
  overall: {
    color: string
    recommendation: string
  }
}

// Claim structure
export type TClaimCard = {
  claim_id: number
  claim: string
  categories: string[]
  relevant_laws: string
  evidence_needed: string
  analysis: ClaimAnalysis
  legal_reasoning: LegalReasoning
}

// Main article structure
export type ArticleCard = {
  article_id: number
  title: string
  url: string
  evaluation_summary: string
  text_summary: string
  claims: TClaimCard[]
}

///////////////////////////////////////////
///////////////////////////////////////////

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

// export type LegalReasoning = {
//   norma_infringida: string
//   razonamiento: string
//   consecuencia: string
//   overall: {
//     color: string
//     recommendation: string
//   }
// }

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

////////////////////////////////////////////
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
