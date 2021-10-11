import { useState } from 'react';
import api from '../api';
import { UpdatedTask } from '../store/types';
import useStore from './useStore';

const useUpdateTask = () => {
  const { dispatch } = useStore();
  const [isUpdating, setIsUpdating] = useState(false);

  const saveTask = async (task: UpdatedTask) => {
    const { error } = await api.updateTask(task);

    setIsUpdating(false);

    if (error) {
      console.error("Couldn't save");
    }
  };

  const updateTask = (task: UpdatedTask) => {
    setIsUpdating(true);

    dispatch({
      payload: task,
      type: 'update-task',
    });

    saveTask(task);

    return task;
  };

  return { updateTask, isUpdating };
};

export default useUpdateTask;
