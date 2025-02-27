export interface ISurgery {
  id: string
  subject: string
  name: string
  json: string
  narrative: string
  start_time: string
  end_time: string
  outcome_type: unknown
  implant_weight: number
  lab: string
  location: string
  users: string[]
  procedures: string[]
}
