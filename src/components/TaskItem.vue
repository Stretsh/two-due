<script setup>
import { useTaskStore } from '@/stores/taskStore'
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
import IconCancel from '@/components/icons/IconCancel.vue'

const store = useTaskStore()
const props = defineProps(['task'])
</script>

<template>
  <div class="flex justify-between items-center p-3 bg-white shadow-md rounded-md transition-all">
    <span :class="{ 'line-through': task.completed }" class="text-lg">{{ task.text }}</span>
    <div class="flex gap-2">
      <button @click="store.toggleTask(task.id)" class="text-green-500 hover:text-green-700 transition"><IconCheckmark/></button>
      <button @click="store.deleteTask(task.id)" class="text-red-500 hover:text-red-700 transition"><IconCancel /></button>
    </div>
  </div>
</template>
