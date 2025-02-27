import { http } from './http'

export const userLogin = (params: { username: string; password: string }) => {
  return http.post<string>('/auth-token', params)
}
