<script setup>
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()
const props = defineProps(['task'])
</script>

<template>
  <div class="flex justify-between p-2 border-b">
    <span :class="{ 'line-through': task.completed }">{{ task.text }}</span>
    <div class="flex gap-2">
      <button @click="store.toggleTask(task.id)" class="text-green-500">✔</button>
      <button @click="store.deleteTask(task.id)" class="text-red-500">✖</button>
    </div>
  </div>
</template>
