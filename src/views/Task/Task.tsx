import { ChangeEvent, useState } from 'react';
import { Progress } from 'react-library';
import SaveState from '../../components/SaveState';
import TextField from '../../components/TextField';
import { Task as TaskType } from '../../types/store';
import { ActionBar, Wrapper } from './Task.styles';

type Props = {
  isSaving?: boolean;
  task?: TaskType;
};

const Task = ({ isSaving = false, task }: Props) => {
  const [values, setValues] = useState({ ...task });

  const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      title: evt.target.value,
    });
  };

  const onNotesChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      notes: evt.target.value,
    });
  };

  return (
    <Wrapper>
      <ActionBar>
        <SaveState isSaving={isSaving} />
      </ActionBar>
      <TextField mb={4} onChange={onTitleChange} value={values?.title ?? ''} />
      <TextField
        onChange={onNotesChange}
        type={'textarea'}
        value={values?.notes ?? ''}
      />

      {task?.subTasks && (
        <ul>
          {task.subTasks.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default Task;
