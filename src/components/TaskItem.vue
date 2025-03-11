<script setup>
import { useTaskStore } from '@/stores/taskStore'
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
import IconCancel from '@/components/icons/IconCancel.vue'
import TaskInput from '@/components/TaskInput.vue'

const store = useTaskStore()
const props = defineProps(['task'])
</script>

<template>
  <div class="flex justify-between items-center p-3 bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-md transition-all">
    <div class="flex-1">
      <template v-if="store.editingTaskId === task.id">
        <TaskInput :task="task"/>
      </template>

      <template v-else>
        <span class="text-sm font-semibold text-gray-500">{{ task.category }}</span>
        <p :class="{ 'line-through': task.completed }" class="text-lg" @dblclick="store.setEditingTask(task.id)">{{ task.text }}</p>
        <p v-if="task.dueDate" class="text-xs text-gray-500">Due: {{ task.dueDate }}</p>
      </template>
    </div>

    <div v-if="!store.editingTaskId" class="flex gap-2">
      <button @click="store.toggleTask(task.id)" class="text-green-500 hover:text-green-700 transition"><IconCheckmark/></button>
      <button @click="store.deleteTask(task.id)" class="text-red-500 hover:text-red-700 transition"><IconCancel /></button>
    </div>
  </div>
</template>
