import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { ISurgeries } from '@/types/surgeries'
import { http } from '@/api/http'

export const useSurgeriesStore = defineStore('surgeries', () => {
  const surgeries = ref<ISurgeries>()

  async function fetchSurgeries() {
    try {
      const response = await http.get('/surgeries')
      surgeries.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  const surgeriesMap = computed(() => {
    const map = new Map<string, Set<string>>()

    surgeries.value?.results?.forEach(({ subject, start_time }) => {
      const times = map.get(subject) || new Set()
      times.add(start_time)
      map.set(subject, times)
    })

    return map
  })

  return { surgeries, surgeriesMap }
})
