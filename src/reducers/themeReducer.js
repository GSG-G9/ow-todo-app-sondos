const themeReducer = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case 'theme/themeChanged':
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

export default themeReducer;