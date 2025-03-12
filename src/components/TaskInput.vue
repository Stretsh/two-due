<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
import IconUndo from '@/components/icons/IconUndo.vue'

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
  <div class="flex flex-col gap-2 mb-4 w-full">
    <input v-model="currentTask.text" @keyup.enter="saveTask" placeholder="Enter task..."
           class="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500
            dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400">

    <div class="flex flex-wrap gap-2">
      <select v-model="currentTask.category"
              class="border rounded-md px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white flex-grow sm:w-1/3">
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
      </select>

      <input type="date" v-model="currentTask.dueDate" class="border rounded-md px-2 py-1 flex-grow sm:w-1/3 placeholder-gray-500
     dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400
     dark:[&::-webkit-calendar-picker-indicator]:invert dark:[&::-webkit-calendar-picker-indicator]:brightness-75"/>

      <button @click="saveTask" class="px-3 py-1 rounded-md text-green-500 hover:text-green-700 transition w-10">
        <IconCheckmark/>
      </button>
      <button v-if="task" @click="store.cancelEditing()" class="px-3 py-1 rounded-md text-red-500 hover:text-red-700 transition w-10">
        <IconUndo />
      </button>
    </div>
  </div>
</template>
