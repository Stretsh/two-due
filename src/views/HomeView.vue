<script setup>
import TaskInput from '@/components/TaskInput.vue'
import TaskList from '@/components/TaskList.vue'
import { useTaskStore } from '@/stores/taskStore.js'

const store = useTaskStore()
</script>

<template>
  <div class="max-w-md mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4">My To-Do List</h1>
    <input v-model="store.searchQuery" placeholder="Search tasks..." class="border rounded-md px-4 py-2 w-full mb-2">

    <select v-model="store.selectedCategory" class="border rounded-md px-4 py-2 w-full mb-4">
        <option>All</option>
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
    </select>
    <TaskInput/>
    <TaskList/>
  </div>
</template>
