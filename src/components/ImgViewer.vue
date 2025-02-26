<script setup lang="ts">
import { NImage, NImageGroup, NSpace } from 'naive-ui'
</script>

<template>
  <div class="card rounded-box grid grow place-items-center">
    <n-image-group>
      <n-space>
        <n-image
          class="border-2 rounded-2xl"
          width="100"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <n-image
          width="100"
          class="border-2 rounded-2xl"
          src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        />
      </n-space>
    </n-image-group>
  </div>
</template>
