import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";
import { v4 as uuidv4 } from 'uuid';

interface TodoState {
    todos: Todo[];
    trash: Todo[];
  }
  
  const initialState: TodoState = {
    todos: [],
    trash: [],
  };

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      addTodo: {
        reducer: (state, action: PayloadAction<Todo>) => {
          state.todos.push(action.payload);
        },
        prepare: (description: string) => ({
          payload: {
            id: uuidv4(),
            description,
            completed: false,
          } as Todo,
        }),
      },
      removeTodo(state, action: PayloadAction<string>) {
        const index = state.todos.findIndex((todo) => todo.id === action.payload);
        if(index !== -1){
            const [removedTodo] = state.todos.splice(index, 1);
            state.trash.push(removedTodo);
        }
      },
      setTodoStatus(
        state,
        action: PayloadAction<{ completed: boolean; id: string }>
      ) {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if(index !== -1) {

            state.todos[index].completed = action.payload.completed;
        }
      },
      clearTodo(state){
        state.todos.length = 0;
        state.trash.length = 0
      },
      restoreTodo(state, action: PayloadAction<string>){
        const index = state.trash.findIndex((todo) => todo.id === action.payload);
        if(index !== -1){
            const [restoredTodo] = state.trash.splice(index, 1);
            state.todos.push(restoredTodo)
        }
      }
    },
  });
   
  export const { addTodo, removeTodo, setTodoStatus,clearTodo,restoreTodo } = todoSlice.actions;
  export default todoSlice.reducer;