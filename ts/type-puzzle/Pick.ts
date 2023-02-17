interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyPick<T, K extends k keyof T> = {
       
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>
