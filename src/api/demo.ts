import { Task } from '../types/store';

type TasksResponse = {
  tasks: Array<Task>;
};

type CreateTaskResponse = {
  error?: string;
  task: Task;
};

const getState = async () => {
  const response = await localStorage.getItem('react_tasks');

  return response
    ? JSON.parse(response)
    : {
        tasks: [
          /* {
            done: true,
            id: '1',
            notes:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ornare urna. Phasellus viverra pulvinar tortor. Fusce ornare euismod augue in scelerisque. Curabitur dolor augue, feugiat ac pellentesque id, venenatis non dui. Duis aliquet quis neque ut vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            title: 'Task 1',
          },
          {
            done: false,
            id: '2',
            notes:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ornare urna. Phasellus viverra pulvinar tortor. Fusce ornare euismod augue in scelerisque. Curabitur dolor augue, feugiat ac pellentesque id, venenatis non dui. Duis aliquet quis neque ut vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            subTasks: [
              {
                id: 'sub-1',
                title: 'Sub Task 1',
              },
              {
                id: 'sub-2',
                title: 'Sub Task 2',
              },
              {
                id: 'sub-3',
                title: 'Sub Task 3',
              },
            ],
            title: 'Task 2',
          },
          {
            done: false,
            id: '3',
            title: 'Task 3',
          }, */
        ],
      };
};

const saveState = async (state: TasksResponse) => {
  await localStorage.setItem('react_tasks', JSON.stringify(state));
};

const api = {
  async createTask(task: Task) {
    return new Promise<CreateTaskResponse>(async (resolve, reject) => {
      const state = await getState();
      const nextState = {
        ...state,
        tasks: [task, ...state.tasks],
      };

      await saveState(nextState);

      setTimeout(() => {
        resolve({
          task,
          error: undefined,
        });
      }, 1000);
    });
  },
  async fetchTasks() {
    return new Promise<TasksResponse>(async (resolve, reject) => {
      const state = await getState();
      setTimeout(() => {
        resolve({
          tasks: state?.tasks,
        });
      }, 1000);
    });
  },
};

export default api;
