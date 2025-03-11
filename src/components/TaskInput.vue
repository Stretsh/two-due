<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()
const newTask = ref('')
const category = ref('General')

const addTask = () => {
  store.addTask(newTask.value, category.value)
  newTask.value = ''
}
</script>

<template>
  <div class="flex gap-2">
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task..."
           class="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
    <select v-model="category" class="border rounded-md px-4 py-2">
      <option>General</option>
      <option>Work</option>
      <option>Personal</option>
      <option>Shopping</option>
    </select>
    <button @click="addTask"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Add</button>
  </div>
</template>
