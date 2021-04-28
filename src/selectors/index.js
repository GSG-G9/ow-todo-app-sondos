import { createSelector } from 'reselect';

const getFilter = state => state.filterReducer;
const getTodos = state => state.todoReducer;

const selectVisibleTodos = createSelector(
  [getFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'showAll':
        return todos
      case 'showCompleted':
        return todos.filter(todo => todo.completed)
      case 'showActive':
        return todos.filter(todo => !todo.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)
const selectVisibleTodoIds = createSelector(
  selectVisibleTodos,
  filteredTodos => filteredTodos.map(todo => todo.id)
)

// const selectActiveCount = (state) => {
//   const activeTodos = state.todoReducer.filter(todo=> !todo.completed);
//   return activeTodos.length;
// }

const selectActiveTodosCount = createSelector(
  getTodos,
  (todos) => {
    const activeTodos = todos.filter(todo=> !todo.completed);
    return activeTodos.length;
  }
)

export  {selectVisibleTodoIds, selectActiveTodosCount, getFilter};
