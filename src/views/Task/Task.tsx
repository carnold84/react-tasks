import { ChangeEvent, useState } from 'react';
import SaveState from '../../components/SaveState';
import TextField from '../../components/TextField';
import useUpdateTask from '../../hooks/useUpdateTask';
import { Task as TaskType } from '../../store/types';
import { ActionBar, Wrapper } from './Task.styles';

type Props = {
  isSaving?: boolean;
  task: TaskType;
};

const DEBOUNCE_MS = 3000;

const Task = ({ isSaving = false, task }: Props) => {
  const [values, setValues] = useState<TaskType>({ ...task });
  const [timeoutId, setTimeoutId] = useState<number>();
  const { isUpdating, updateTask } = useUpdateTask();

  const updateValue = (key: string, value: string) => {
    const nextValues = {
      ...values,
      [key]: value,
    };

    setValues(nextValues);

    clearTimeout(timeoutId);

    const nextTimeoutId: number = window.setTimeout(() => {
      console.log('SAVE!');
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

  return (
    <Wrapper>
      <ActionBar>
        <SaveState isSaving={isSaving || isUpdating} />
      </ActionBar>
      <TextField mb={4} onChange={onTitleChange} value={values?.title ?? ''} />
      <TextField
        onChange={onNotesChange}
        type={'textarea'}
        value={values?.notes ?? ''}
      />
    </Wrapper>
  );
};

export default Task;
