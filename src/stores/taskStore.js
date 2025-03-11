import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([])
  
  const addTask = (text, category = 'General') => {
    if (!text.trim()) return
    tasks.value.push({ id: Date.now(), text, category, completed: false })
  }
  
  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }
  
  const toggleTask = (id) => {
    const task = tasks.value.find(task => task.id === id)
    if (task) task.completed = !task.completed
  }
  
  return { tasks, addTask, deleteTask, toggleTask }
})
