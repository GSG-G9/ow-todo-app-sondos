const filterReducer = (state = 'showAll', action) => {
  switch (action.type) {
    case ('filter/filterChanged'):
      return action.filter;
    default :
      return state;

  }
}

export default filterReducer;