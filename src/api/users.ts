import { http } from './http'
import type { User, Token } from '../types/users'
import type { AxiosResponse } from 'axios'

export const userLogin = (params: User) => http.post<Token>('/auth-token', params)
