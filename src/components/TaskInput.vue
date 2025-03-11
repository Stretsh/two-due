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
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task..." class="border p-2 w-full">
    <button @click="addTask" class="bg-blue-500 text-white px-4 py-2">Add</button>
  </div>
</template>
