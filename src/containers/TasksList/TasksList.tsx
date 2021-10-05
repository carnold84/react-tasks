import { Link } from 'react-router-dom';
import { Task } from '../../types/store';
import { Wrapper } from './TasksList.styles';

type Props = {
  isLoading: boolean;
  selectedId?: string;
  tasks: Array<Task>;
};

const TasksList = ({ isLoading = false, selectedId, tasks = [] }: Props) => {
  let content = <p>Loading...</p>;

  if (!isLoading) {
    if (tasks.length === 0) {
      content = <p>No tasks</p>;
    } else {
      const sortedTasks = [...tasks];
      sortedTasks.sort((x, y) => {
        return x.done === y.done ? 0 : x.done ? 1 : -1;
      });

      content = (
        <ul>
          {sortedTasks.map(({ done, id, title }) => {
            return (
              <li key={id}>
                <input
                  checked={done}
                  onChange={() => console.log('change')}
                  type={'checkbox'}
                />
                <Link
                  style={{
                    backgroundColor: selectedId === id ? 'pink' : 'white',
                  }}
                  to={`/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }
  return <Wrapper>{content}</Wrapper>;
};

export default TasksList;
