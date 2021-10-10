import { ChangeEvent, useState } from 'react';
import { Progress, Typography } from 'react-library';
import TextField from '../../containers/TextField';
import { Task as TaskType } from '../../types/store';
import { Wrapper } from './Task.styles';

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
      {isSaving && <Progress />}
      {!isSaving && 'Saved'}
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
