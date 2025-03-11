<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()
const props = defineProps(['task'])

const currentTask = ref(store.getBlankTask())

if (props.task) {
  currentTask.value = props.task
}

const saveTask = () => {
  if (props.task) {
    store.editTask(props.task.id)
  } else {
    store.addTask()
  }
}
</script>

<template>
  <div class="flex gap-2 mb-4">
    <input v-model="currentTask.text" @keyup.enter="saveTask" placeholder="Add a new task..."
           class="border rounded-md px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500
            dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400">

    <select v-model="currentTask.category" class="border rounded-md px-4 py-2 w-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <option>General</option>
      <option>Work</option>
      <option>Personal</option>
      <option>Shopping</option>
    </select>

    <input type="date" v-model="currentTask.dueDate" class="border rounded-md px-4 py-2 w-40 placeholder-gray-500
     dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400
     dark:[&::-webkit-calendar-picker-indicator]:invert dark:[&::-webkit-calendar-picker-indicator]:brightness-75" />

    <button @click="saveTask"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Save</button>
    <button v-if="task" @click="store.cancelEditing()"
            class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">Cancel</button>
  </div>
</template>
