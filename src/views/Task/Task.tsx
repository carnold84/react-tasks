import { Task as TaskType } from '../../types/store';
import { Wrapper } from './Task.styles';

type Props = {
  isSaving?: boolean;
  task?: TaskType;
};

const Task = ({ isSaving = false, task }: Props) => {
  return (
    <Wrapper>
      {isSaving && 'Saving...'}
      {!isSaving && 'Saved'}
      <input
        onChange={() => console.log('change')}
        type={'text'}
        value={task?.title ?? 'New Task'}
      />
      <textarea
        onChange={() => console.log('change')}
        value={task?.notes ?? ''}
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
