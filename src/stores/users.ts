import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { userLogin } from '@/api/users'
import type { User, Token } from '@/types/users'

export const useAuthStore = defineStore('user', () => {
  const token = ref<Token>()

  async function login(user: User) {
    token.value = await userLogin(user)

    localStorage.setItem('token', token.value?.token || '')
  }

  return { token, login }
})
