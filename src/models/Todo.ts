export interface Todo {
    id:string
    description: string
    completed: boolean
}

export interface IAffairsProps {
    todoList: Todo[];
    isTrash?: boolean;
  }