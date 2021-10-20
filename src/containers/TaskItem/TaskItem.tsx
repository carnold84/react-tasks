import { Link } from 'react-router-dom';
import { Checkbox, ListItem, ListItemText } from 'versify-react';
import { Task } from '../../store/types';

type Props = {
  isActive?: boolean;
  task: Task;
};

const TaskItem = ({ isActive = false, task }: Props) => {
  const onCheck = () => {
    console.log(task.id, task.done);
  };

  return (
    <ListItem
      contentLeft={
        <Checkbox
          id={`check-${task.id}`}
          mr={2}
          onChange={onCheck}
          value={task.done}
        />
      }
      isActive={isActive}
      key={task.id}>
      <ListItemText component={Link} to={`/${task.id}`}>
        {task.title}
      </ListItemText>
    </ListItem>
  );
};

export default TaskItem;
