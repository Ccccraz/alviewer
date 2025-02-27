<script setup lang="ts">
import { NImage, NImageGroup } from 'naive-ui'
</script>

<template>
  <div class="flex flex-wrap overflow-y-auto">
    <n-image-group>
      <n-image
        class="h-40 border rounded-xl m-4"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-image
        class="h-40 border rounded-xl m-4"
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </n-image-group>
  </div>
</template>
