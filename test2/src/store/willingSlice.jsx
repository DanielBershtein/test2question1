removeWilling(state, action) {
      const id = action.payload
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    updateWilling(state, action) {
      const { id, text } = action.payload
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      if (exitingTodo) {
        exitingTodo.text = text
      }
      state.editedTodo = null
    },
    setEditedWilling(state, action) {
      const id = action.payload
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      state.editedTodo = exitingTodo
    },
    toggleWilling(state, action) {
      const id = action.payload
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      if (exitingTodo) {
        exitingTodo.isDone = !exitingTodo.isDone
      }
    },
    selectWilling(state, action) {
      const id = action.payload
      if (!id) {
        state.selectedTodo = null
        return
      }
      const exitingTodo = state.todos.find((todo) => todo.id === id)
      if (!exitingTodo) return
      state.selectedTodo = exitingTodo
    },
  },
})

export const {
  addTodo,
  removeTodo,
  updateTodo,
  toggleTodo,
  selectTodo,
  setEditedTodo,
} = todoSlice.actions