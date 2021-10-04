import { Action, State } from '../types/store';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add-task':
      return {
        tasks: [...state.tasks, action.payload],
      };

    case 'set-tasks':
      return {
        tasks: action.payload,
      };

    default:
      throw new Error();
  }
};

export default reducer;
