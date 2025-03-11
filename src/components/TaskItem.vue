<script setup>
import { useTaskStore } from '@/stores/taskStore'
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
import IconCancel from '@/components/icons/IconCancel.vue'

const store = useTaskStore()
const props = defineProps(['task'])
</script>

<template>
  <div class="flex justify-between items-center p-3 bg-white shadow-md rounded-md transition-all">
    <div>
      <span class="text-sm font-semibold text-gray-500">{{ task.category }}</span>
      <p :class="{ 'line-through': task.completed }" class="text-lg">{{ task.text }}</p>
      <p v-if="task.dueDate" class="text-xs text-gray-500">Due: {{ task.dueDate }}</p>
    </div>

    <div class="flex gap-2">
      <button @click="store.toggleTask(task.id)" class="text-green-500 hover:text-green-700 transition"><IconCheckmark/></button>
      <button @click="store.deleteTask(task.id)" class="text-red-500 hover:text-red-700 transition"><IconCancel /></button>
    </div>
  </div>
</template>
