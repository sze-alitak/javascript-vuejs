import { defineStore } from 'pinia'
import { useData } from '@/composables/useData'
import { createApi } from '@/services/api'

export const useTasksStore = defineStore('tasks', () => useData(createApi('tasks')))
