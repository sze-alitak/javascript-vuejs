import { ref, computed } from 'vue'

export function useTasks() {
    let tasks = ref([
        {id: 1, title: 'Task manager alapok', 'is_completed': false},
        {id: 2, title: 'Task listázás', 'is_completed': true},
        {id: 3, title: 'Task létrehozás', 'is_completed': false},
    ])

    let newTaskId = tasks.value.length + 1
    let selectedFilter = ref('all')

    let filteredTasks = computed(() =>
        tasks.value.filter(
            (task) => 
            (selectedFilter.value == 'all') ||
            (selectedFilter.value == 'completed' ? task.is_completed : !task.is_completed)
        )
    )

    function addTask(data) {
        tasks.value.push({
            id: newTaskId++,
            title: data.task_name,
            is_completed: false,
        })
    }

    let removeTask = (id) => {
        tasks.value = tasks.value.filter(task => task.id !== id)
    }

    let toggleTask = (id) => {
        const task = tasks.value.find((task) => task.id == id)
        task.is_completed = !task.is_completed
    }

    return {filteredTasks, selectedFilter, addTask, removeTask, toggleTask}
}