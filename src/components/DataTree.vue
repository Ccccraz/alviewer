<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NTree, NDivider } from 'naive-ui'
import type { TreeOption } from 'naive-ui'
import axios from 'axios'
import type { ISurgeries } from '@/types/surgeries'

const api = axios.create({
  baseURL: 'api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'token f6d36975fca05ef94ab60652d7f48fffb035f11a',
  },
})

const surgeries = ref<ISurgeries>()
const treeData = ref<TreeOption[]>([])

onMounted(() => {
  listSurgeries()
})

async function listSurgeries() {
  try {
    const response = await api.get('/surgeries')
    surgeries.value = response.data
    getTree()
  } catch (error) {
    console.error(error)
  }
}

const defaultExpandedKeys = ref(['40', '41'])

function getTree() {
  listSurgeries()
  const surgeriesMap = new Map<string, Set<string>>()

  surgeries.value?.results.forEach((surgery) => {
    const times = surgeriesMap.get(surgery.subject) || new Set()
    times.add(surgery.start_time)
    surgeriesMap.set(surgery.subject, times)
  })

  treeData.value = Array.from(surgeriesMap.entries()).map(([subject, times], index) => {
    const parentKey = `${index}`
    defaultExpandedKeys.value.push(parentKey)
    return {
      label: subject,
      key: parentKey,
      children: Array.from(times).map((time, index) => ({
        label: time,
        keys: `${parentKey}${index}`,
      })),
    }
  })
}
</script>

<template>
  <div
    class="card border border-base-300 rounded-xl h-[calc(100vh-2*theme(spacing.4))] m-4 shadow-sm flex flex-col"
  >
    <input
      type="text"
      placeholder="搜索"
      class="input rounded-xl m-4 mb-0 min-h-10 h-fit place-self-center"
    />
    <n-divider />
    <div class="flex justify-start w-full p-8 pt-0 overflow-y-auto">
      <n-tree
        class="w-full"
        block-line
        :data="treeData"
        :default-expanded-keys="defaultExpandedKeys"
        selectable
      />
    </div>
  </div>
</template>
