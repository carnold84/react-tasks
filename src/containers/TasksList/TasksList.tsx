import { List, LoadingScreen } from 'react-library';
import { Task } from '../../types/store';
import { Wrapper } from './TasksList.styles';
import TaskItem from '../TaskItem';

type Props = {
  isLoading: boolean;
  selectedId?: string;
  tasks: Array<Task>;
};

type OnChangeProps = {
  id: string;
  value: boolean;
};

const TasksList = ({ isLoading = false, selectedId, tasks = [] }: Props) => {
  const onCheck = ({ id, value }: OnChangeProps) => {
    console.log(id, value);
  };

  let content;

  if (isLoading) {
    content = <LoadingScreen />;
  } else {
    if (tasks.length === 0) {
      content = <p>No tasks</p>;
    } else {
      const sortedTasks = [...tasks];
      sortedTasks.sort((x, y) => {
        return x.done === y.done ? 0 : x.done ? 1 : -1;
      });

      content = (
        <List width={'100%'}>
          {sortedTasks.map((task) => {
            return (
              <TaskItem
                isActive={task.id === selectedId}
                key={task.id}
                task={task}
              />
            );
          })}
        </List>
      );
    }
  }

  return <Wrapper>{content}</Wrapper>;
};

export default TasksList;
