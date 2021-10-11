import { Action, State, Task, TasksById } from '../types/store';

const reducer = ({ tasks }: State, { payload, type }: Action) => {
  let byId: TasksById = {};

  switch (type) {
    case 'add-task':
      return {
        tasks: {
          ...tasks,
          allIds: [...tasks.allIds, payload.id],
          byId: {
            ...tasks.byId,
            [payload.id]: payload,
          },
        },
      };

    case 'delete-task':
      byId = {
        ...tasks.byId,
      };
      delete byId[payload];

      return {
        tasks: {
          ...tasks,
          allIds: tasks.allIds.filter((id) => {
            return id !== payload;
          }),
          byId,
        },
      };

    case 'set-tasks':
      const allIds: Array<string> = [];
      byId = {};

      payload.forEach((task: Task) => {
        allIds.push(task.id);
        byId[task.id] = task;
      });

      return {
        tasks: {
          ...tasks,
          allIds,
          byId,
        },
      };

    default:
      throw new Error();
  }
};

export default reducer;
