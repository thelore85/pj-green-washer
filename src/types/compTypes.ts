export type SchedulerForm = {
  checkbox: boolean
  day: boolean
  week: boolean
  monthly: boolean
}

export type TScraperCard = {
  id: string
  title: string
  description: string
  running: boolean
  web: string
  script: string
  path: string
  scheduler?: SchedulerForm
  output: string
}
