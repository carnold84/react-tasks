import { Task as TaskType } from '../../types/store';
import { Wrapper } from './Task.styles';

type Props = { task: TaskType };

const Task = ({ task }: Props) => {
  return (
    <Wrapper>
      <h2>{task.title}</h2>
      <p>{task.notes}</p>
      {task.subTasks && (
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
