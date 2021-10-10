import { Link } from 'react-router-dom';
import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  LoadingScreen,
} from 'react-library';
import { Task } from '../../types/store';
import { Wrapper } from './TasksList.styles';

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
          {sortedTasks.map(({ done, id, title }) => {
            return (
              <ListItem
                contentLeft={
                  <Checkbox
                    id={`check-${id}`}
                    mr={2}
                    onChange={() => onCheck({ id, value: !done })}
                    value={done}
                  />
                }
                key={id}>
                <ListItemText component={Link} to={`/${id}`}>
                  {title}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      );
    }
  }

  return <Wrapper>{content}</Wrapper>;
};

export default TasksList;
