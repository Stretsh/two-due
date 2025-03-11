<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import IconCheckmark from '@/components/icons/IconCheckmark.vue'
import IconCancel from '@/components/icons/IconCancel.vue'

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

    <div class="flex gap-2">
      <select v-model="currentTask.category"
              class="border rounded-md px-4 py-2 w-1/3 min-w-[100px] dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
      </select>

      <input type="date" v-model="currentTask.dueDate" class="border rounded-md px-4 py-2 w-1/3 min-w-[120px] placeholder-gray-500
     dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400
     dark:[&::-webkit-calendar-picker-indicator]:invert dark:[&::-webkit-calendar-picker-indicator]:brightness-75"/>

      <button @click="saveTask" class="px-4 py-2 rounded-md text-green-500 hover:text-green-700 transition">
        <IconCheckmark/>
      </button>
      <button v-if="task" @click="store.cancelEditing()" class="text-red-500 hover:text-red-700 transition">
        <IconCancel/>
      </button>
    </div>
  </div>
</template>
