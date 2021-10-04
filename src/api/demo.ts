import { Task } from '../types/store';

type TasksResponse = {
  tasks: Array<Task>;
};

const getState = async () => {
  const response = await localStorage.getItem('react_tasks');

  return response
    ? JSON.parse(response)
    : {
        tasks: [
          {
            id: '1',
            title: 'Task 1',
          },
          {
            id: '2',
            title: 'Task 2',
          },
          {
            id: '3',
            title: 'Task 3',
          },
        ],
      };
};

const api = {
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
