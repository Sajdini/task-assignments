export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          name: action.task.name,
          phase: action.task.phase,
          person: action.task.person,
          date: action.task.date,
          id: Math.floor(Math.random() * 100) + 1,
        },
      ];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
