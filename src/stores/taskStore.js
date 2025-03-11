import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([])
  const searchQuery = ref('')
  const selectedCategory = ref('All')
  
  const addTask = (text, category = 'General', dueDate = null) => {
    if (!text.trim()) return
    tasks.value.push({ id: Date.now(), text, category, dueDate, completed: false })
  }
  
  const filteredTasks = computed(() => {
    return tasks.value.filter(task => {
      const matchesSearch = task.text.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesCategory = selectedCategory.value === 'All' || task.category === selectedCategory.value
      return matchesSearch && matchesCategory
    })
  })
  
  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }
  
  const toggleTask = (id) => {
    const task = tasks.value.find(task => task.id === id)
    if (task) task.completed = !task.completed
  }
  
  return { tasks, addTask, deleteTask, toggleTask, searchQuery, selectedCategory, filteredTasks }
})
