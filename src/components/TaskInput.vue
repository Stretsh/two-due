<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()
const newTask = ref('')

const addTask = () => {
  store.addTask(newTask.value)
  newTask.value = ''
}
</script>

<template>
  <div class="flex gap-2">
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task..." class="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
    <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Add</button>
  </div>
</template>
