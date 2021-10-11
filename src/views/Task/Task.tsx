import { ChangeEvent, useEffect, useState } from 'react';
import { TrashFull } from 'react-library';
import { useHistory } from 'react-router';
import { SaveState, TextField } from '../../components';
import { useDeleteTask, useUpdateTask } from '../../hooks';
import { Task as TaskType } from '../../store/types';
import { ActionBar, Content, IconButton, Wrapper } from './Task.styles';

type Props = {
  isSaving?: boolean;
  task: TaskType;
};

const DEBOUNCE_MS = 1500;

const Task = ({ isSaving = false, task }: Props) => {
  console.log(task);
  const history = useHistory();
  const [values, setValues] = useState<TaskType>({ ...task });
  const [timeoutId, setTimeoutId] = useState<number>();
  const { deleteTask } = useDeleteTask();
  const { isUpdating, updateTask } = useUpdateTask();

  useEffect(() => {
    setValues({ ...task });
  }, [task]);

  const updateValue = (key: string, value: string) => {
    const nextValues = {
      ...values,
      [key]: value,
    };

    setValues(nextValues);

    clearTimeout(timeoutId);

    const nextTimeoutId: number = window.setTimeout(() => {
      updateTask(nextValues);
    }, DEBOUNCE_MS);

    setTimeoutId(nextTimeoutId);
  };

  const onNotesChange = (evt: ChangeEvent<HTMLInputElement>) => {
    updateValue('notes', evt.currentTarget.value);
  };

  const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    updateValue('title', evt.currentTarget.value);
  };

  const onCheck = () => {
    console.log(task.id, task.done);
  };

  const onDelete = () => {
    console.log(task.id, task.done);
    deleteTask(task);

    history.replace('/');
  };

  return (
    <Wrapper>
      <ActionBar>
        <IconButton mr={3} onClick={onDelete}>
          <TrashFull height={20} width={20} />
        </IconButton>
        <SaveState isSaving={isSaving || isUpdating} />
      </ActionBar>
      <Content>
        <TextField
          mb={4}
          onChange={onTitleChange}
          value={values?.title ?? ''}
        />
        <TextField
          onChange={onNotesChange}
          type={'textarea'}
          value={values?.notes ?? ''}
        />
      </Content>
    </Wrapper>
  );
};

export default Task;
