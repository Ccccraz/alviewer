<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui'
import ImgViewer from './components/ImgViewer.vue'
import TiptapEditor from './components/TiptapEditor.vue'
import DataTree from './components/DataTree.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div class="flex flex-row h-screen">
      <DataTree class="flex-2" />
      <div
        class="card border border-base-300 rounded-xl h-[calc(100vh-2*theme(spacing.4))] m-4 flex-7 flex flex-col"
      >
        <ImgViewer class="flex-7 m-4" />
        <div class="divider -mt-2 -mb-2" />
        <TiptapEditor class="flex-3" />
      </div>
    </div>
  </n-config-provider>
</template>
