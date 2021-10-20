import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Editor, Trash } from 'versify-react';
import { useHistory } from 'react-router';
import { SaveState, TextField } from '../../components';
import { useDeleteTask, useUpdateTask } from '../../hooks';
import { Task as TaskType } from '../../store/types';
import { Content, IconButton, Wrapper } from './Task.styles';
import ActionBar from '../../components/ActionBar';

type Props = {
  isSaving?: boolean;
  task: TaskType;
};

const DEBOUNCE_MS = 1500;

const Task = ({ isSaving = false, task }: Props) => {
  const history = useHistory();
  const [values, setValues] = useState<TaskType>({ ...task });
  const initialNotes = useMemo(() => {
    return { html: task.notes ?? '' };
  }, []);
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

  const onNotesChange = (content: string) => {
    updateValue('notes', content);
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
      <ActionBar style={{ justifyContent: 'flex-end' }}>
        <IconButton mr={3} onClick={onDelete}>
          <Trash height={20} width={20} />
        </IconButton>
        <SaveState isSaving={isSaving || isUpdating} />
      </ActionBar>
      <Content>
        <TextField
          mb={4}
          onChange={onTitleChange}
          value={values?.title ?? ''}
        />
        <Editor content={initialNotes} onUpdate={onNotesChange} />
      </Content>
    </Wrapper>
  );
};

export default Task;
