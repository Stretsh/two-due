<script setup>
import TaskInput from '@/components/TaskInput.vue'
import TaskList from '@/components/TaskList.vue'
import { useTaskStore } from '@/stores/taskStore.js'
import { onMounted, ref } from 'vue'
import IconSun from '@/components/icons/IconSun.vue'
import IconMoonStars from '@/components/icons/IconMoonStars.vue'

const store = useTaskStore()
const isDark = ref(localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))

const toggleTheme = () => {
  isDark.value = !isDark.value
  const newTheme = isDark.value ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', newTheme)
}

// Ensure the correct theme is applied on mount
onMounted(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})

</script>

<template>
  <div class=" bg-white dark:bg-gray-900 dark:text-white min-h-screen p-4 transition-all">
    <div class="max-w-xl mx-auto mt-10">

      <button @click="toggleTheme" class="mb-4 p-2 border rounded-md">
        <IconSun v-if="isDark"/>
        <IconMoonStars v-else/>
      </button>

      <h1 class="text-2xl font-bold mb-4">My To-Do List</h1>
      <input v-model="store.searchQuery" placeholder="Search tasks..."
             class="border rounded-md px-4 py-2 w-full mb-2 placeholder-gray-500
              dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400">

      <select v-model="store.selectedCategory"
              class="border rounded-md px-4 py-2 w-full mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <option>All</option>
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
      </select>
      <TaskInput v-if="!store.editingTaskId"/>
      <TaskList/>
    </div>
  </div>

</template>
