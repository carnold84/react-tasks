import { useState } from 'react';
import api from '../api';
import { Task } from '../types/store';
import useStore from './useStore';

const useDeleteTask = () => {
  const { dispatch } = useStore();
  const [isDeleting, setIsDeleting] = useState(false);

  const removeTask = async (task: Task) => {
    const { error } = await api.deleteTask(task.id);

    setIsDeleting(false);

    if (error) {
      console.error("Couldn't save");
    }
  };

  const deleteTask = (payload: Task) => {
    setIsDeleting(true);

    dispatch({
      payload: payload.id,
      type: 'delete-task',
    });

    removeTask(payload);

    return payload;
  };

  return { deleteTask, isDeleting };
};

export default useDeleteTask;
