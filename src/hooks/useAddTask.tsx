import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import api from '../api';
import { NewTask, Task } from '../types/store';
import useStore from './useStore';

const useTasks = () => {
  const { dispatch } = useStore();
  const [isSaving, setIsSaving] = useState(false);

  console.log('useTasks');

  const saveTask = async (task: Task) => {
    const { error } = await api.createTask(task);

    console.log('saveTask');

    setIsSaving(false);

    if (error) {
      console.error("Couldn't save");
    }
  };

  const addTask = (payload: NewTask) => {
    setIsSaving(true);

    const task = {
      ...payload,
      done: false,
      id: uuidv4(),
      notes: '',
      subTasks: [],
    };

    dispatch({
      payload: task,
      type: 'add-task',
    });

    console.log(task);

    saveTask(task);

    return task;
  };

  return { addTask, isSaving };
};

export default useTasks;
