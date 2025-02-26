<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: "<p>I'm <code>running</ code> Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
})
</script>

<template>
  <div class="card bg-base-300 rounded-box grid grow place-items-center">
    <editor-content
      class="p-4 border rounded-b-lg min-h-[300px] prose max-w-none focus:outline-none"
      :editor="editor"
    />
  </div>
</template>
