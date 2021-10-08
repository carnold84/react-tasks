import { ChangeEvent, useState } from 'react';
import { Typography, CaretDown } from 'react-library';
import { Task as TaskType } from '../../types/store';
import { Wrapper } from './Task.styles';

type Props = {
  isSaving?: boolean;
  task?: TaskType;
};

const Task = ({ isSaving = false, task }: Props) => {
  const [values, setValues] = useState({ ...task });

  console.log(CaretDown);

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
      <CaretDown />
      {isSaving && 'Saving...'}
      {!isSaving && 'Saved'}
      <Typography
        component={'input'}
        variant={'h3'}
        onChange={onTitleChange}
        type={'text'}
        value={values?.title ?? 'New Task'}
      />
      <Typography
        component={'textarea'}
        variant={'p'}
        onChange={onNotesChange}
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
