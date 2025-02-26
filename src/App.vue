<script lang="ts">
// import ImgViewer from './components/ImgViewer.vue'
// import TiptapEditor from './components/TiptapEditor.vue'
// import { ref } from 'vue'
// import type { TreeOption, NTree } from 'naive-ui'
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { defineComponent, ref } from 'vue'
import { NTree, NConfigProvider, darkTheme, NDivider } from 'naive-ui'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level) return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      whateverLabel: createLabel(level),
      whateverKey: key,
      whateverChildren: createData(level - 1, key),
    }
  })
}

function createLabel(level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}

export default defineComponent({
  components: {
    NTree,
    NConfigProvider,
    NDivider,
  },
  setup() {
    return {
      data: createData(),
      defaultExpandedKeys: ref(['40', '41']),
      darkTheme,
    }
  },
})
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div class="flex flex-row h-screen">
      <div
        class="card border border-base-300 rounded-xl h-[calc(100vh-2*theme(spacing.4))] m-4 shadow-sm flex-3 flex flex-col"
      >
        <input
          type="text"
          placeholder="搜索"
          class="input rounded-xl m-4 mb-0 min-h-10 place-self-center"
        />
        <!-- <div class="divider"></div> -->
        <n-divider />
        <div class="flex justify-start w-full p-8 pt-0 overflow-y-auto">
          <n-tree
            class="w-full"
            block-line
            :data="data"
            :default-expanded-keys="defaultExpandedKeys"
            key-field="whateverKey"
            label-field="whateverLabel"
            children-field="whateverChildren"
            selectable
          />
        </div>
      </div>
      <div
        class="card border border-base-300 rounded-xl h-[calc(100vh-2*theme(spacing.4))] m-4 flex-7 flex flex-col overflow-y-auto"
      >
        <ImgViewer class="min-h-screen" />
        <div class="divider"></div>
        <TiptapEditor class="min-h-screen" />
      </div>
    </div>
  </n-config-provider>
</template>
