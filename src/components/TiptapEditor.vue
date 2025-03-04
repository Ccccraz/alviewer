<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  editorProps: {
    attributes: {
      class: 'focus:outline-none',
    },
  },
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
})
</script>

<template>
  <div class="overflow-y-auto">
    <editor-content :editor="editor" class="p-4" />
  </div>
</template>
