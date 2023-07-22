import { ReactNode, createContext, useState } from "react";

type Task = {
    description: string;
    completed: boolean;
}

interface TaskContextProps {
    tasks: Task[];
    tasksCreated: number;
    tasksCompleted: number;
    addNewTask: (value: string) => void;
    toggleMarkingTaskCompleted: (task: string) => void;
    removeTask: (taskName: string) => void;
}

export const TaskContext = createContext({} as TaskContextProps)

interface TaskProviderProps {
    children: ReactNode
}

const INITIAL_DATA = [{
    description: '01 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '02 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '03 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '04 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '05 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '06 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '07 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '08 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
},{
    description: '09 Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false
}]

export function TaskProvider({children}: TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([])
    const tasksCompleted = tasks.filter(task => task.completed === true).length
    const tasksCreated = tasks.length

    function addNewTask(value: string) {
        const taskAlreadyExists = tasks.filter(task => task.description === value)[0]

        if (taskAlreadyExists) {
            return
        }

        const newTask: Task = {
            description: value,
            completed: false
        }

        setTasks(previewState => [newTask, ...previewState ])
    }

    function toggleMarkingTaskCompleted(taskDescription: string) {
        const tasksList = tasks.map(task => {
            if (task.description === taskDescription) {
                return {
                    description: task.description,
                    completed: !task.completed
                }
            }

            return task
        })

        setTasks(tasksList)
    }

    function removeTask(taskName: string) {
        const filteredTasks = tasks.filter(task => task.description !== taskName)
        setTasks(filteredTasks)
    }
    
    return(
        <TaskContext.Provider value={{
            tasks,
            tasksCompleted,
            tasksCreated,
            toggleMarkingTaskCompleted,
            addNewTask,
            removeTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}