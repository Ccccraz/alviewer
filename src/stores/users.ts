import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { userLogin } from '@/api/users'

export const useAuthStore = defineStore('user', () => {
  const token = ref<string>('')

  async function login(){
  }

  return { token }
})
