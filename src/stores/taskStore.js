import { defineStore } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([])
  const searchQuery = ref('')
  const selectedCategory = ref('All')
  
  const editingTaskId = ref(null)
  const currentTask = ref({})
  const blankTask = ref({
    text: '',
    category: 'General',
    dueDate: '',
  })
  
  const filterStatus = ref('All') // Options: 'All', 'Completed', 'Pending'
  
  onMounted(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      tasks.value = JSON.parse(storedTasks)
    }
  })
  
  const addTask = () => {
    if (!currentTask.value.text.trim()) return
    currentTask.value.id = Date.now()
    tasks.value.push(currentTask.value)
    resetTask()
  }
  
  const filteredTasks = computed(() => {
    return tasks.value.filter(task => {
      const matchesSearch = task.text.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesCategory = selectedCategory.value === 'All' || task.category === selectedCategory.value
      const matchesFilterStatus =
        filterStatus.value === 'All' ||
        (filterStatus.value === 'Completed' && task.completed) ||
        (filterStatus.value === 'Pending' && !task.completed)
      return matchesSearch && matchesCategory && matchesFilterStatus
    })
  })
  
  const setEditingTask = id => {
    editingTaskId.value = id
  }
  
  const cancelEditing = () => {
    editingTaskId.value = null
    resetTask()
  }
  
  const resetTask = () => {
    currentTask.value = { ...blankTask.value }
  }
  
  const getBlankTask = () => {
    currentTask.value = JSON.parse(JSON.stringify(blankTask.value))
    return currentTask
  }
  
  const editTask = (id) => {
    let task = tasks.value.find(task => task.id === id)
    if (task) {
      if (currentTask.value.text.trim()) {
        task = currentTask.value
        cancelEditing()
      }
    }
  }
  
  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }
  
  const toggleTask = (id) => {
    const task = tasks.value.find(task => task.id === id)
    if (task) task.completed = !task.completed
  }
  
  watch(tasks, newTasks => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }, { deep: true })
  
  return {
    tasks, editingTaskId, currentTask, filterStatus,
    addTask, editTask, deleteTask, toggleTask, setEditingTask, cancelEditing, getBlankTask,
    searchQuery, selectedCategory, filteredTasks, }
})
