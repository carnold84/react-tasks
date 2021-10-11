import { useEffect, useState } from 'react';
import api from '../api';
import useStore from './useStore';

const useTasks = () => {
  const { dispatch, state } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  const fetchTasks = async () => {
    setIsLoading(true);
    const data = await api.fetchTasks();

    dispatch({
      payload: data.tasks,
      type: 'set-tasks',
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    isLoading,
    tasks: state.tasks.allIds.map((id) => {
      return state.tasks.byId[id];
    }),
  };
};

export default useTasks;
