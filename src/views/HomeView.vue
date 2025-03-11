<script setup>
import TaskInput from '@/components/TaskInput.vue'
import TaskList from '@/components/TaskList.vue'
</script>

<template>
  <div class="max-w-md mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4">My To-Do List</h1>
    <TaskInput/>
    <TaskList/>
  </div>
</template>
