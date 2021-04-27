const addTodo = (text) => ({type: 'todo/todoAdded', text});
const deleteTodo = (id) => ({type: 'todo/todoDeleted', id});
const editTodo = (id, text) => ({type: 'todo/todoEdited', id, text});
const completeTodo = (id) => ({type: 'todo/todoCompleted', id});
const clearCompletedTodo = () => ({type: 'todo/completedCleared'});
const setVisibilityFilter = (filter) => ({type: 'filter/filterChanged', filter});
const toggleDarkTheme = () => ({type: 'theme/themeChanged'});

export {addTodo, deleteTodo, editTodo, clearCompletedTodo, completeTodo, setVisibilityFilter, toggleDarkTheme};
