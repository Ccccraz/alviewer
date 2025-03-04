<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui'
import ImgViewer from './components/ImgViewer.vue'
import TiptapEditor from './components/TiptapEditor.vue'
import DataTree from './components/DataTree.vue'
import { NDivider } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div class="flex flex-row h-screen">
      <DataTree class="flex-2" />
      <div class="m-4 p-4 rounded-xl flex-7 flex flex-col bg-base-300">
        <ImgViewer class="flex-7" />
        <n-divider />
        <TiptapEditor class="flex-3" />
      </div>
    </div>
  </n-config-provider>
</template>
