<script setup>
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from '@/components/TaskItem.vue'

const store = useTaskStore()
</script>

<template>
  <div>
    <TaskItem v-for="task in store.tasks" :key="task.id" :task="task"/>
  </div>
</template>
