import type { ISurgery } from './surgery'

export interface ISurgeries {
  count: number
  next: unknown
  previous: unknown
  results: ISurgery[]
}
