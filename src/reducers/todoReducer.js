const nextTodoId = (todoList) => {
  const maxId = todoList.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}
const initialState = [
 {
   id: 0,
   text : 'Learn Redux',
   completed: false,
 }
]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/todoAdded' :
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.text,
          completed: false,
        }
      ];

    case 'todo/todoDeleted' :
      return state.filter(todo=> todo.id !== action.id);

    case 'todo/todoCompleted' :
      return state.map(todo=> {
        if(todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      });

    case 'todo/completedCleared' :
      return state.filter(todo=> !todo.completed);
    default :
      return state;
  }
}

export default todoReducer;