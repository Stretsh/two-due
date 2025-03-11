<script setup>
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from '@/components/TaskItem.vue'

const store = useTaskStore()
</script>

<template>
  <transition-group
    tag="div"
    name="list"
    class="space-y-2"
  >
    <TaskItem v-for="task in store.tasks" :key="task.id" :task="task"/>
  </transition-group>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>