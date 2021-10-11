import { Link } from 'react-router-dom';
import { Checkbox, ListItem, ListItemText, TrashFull } from 'react-library';
import { Task } from '../../types/store';
import useDeleteTask from '../../hooks/useDeleteTask';
import { IconButton } from './TaskItem.styles';

type Props = {
  isActive?: boolean;
  task: Task;
};

const TaskItem = ({ isActive = false, task }: Props) => {
  const { deleteTask } = useDeleteTask();

  const onCheck = () => {
    console.log(task.id, task.done);
  };

  const onDelete = () => {
    console.log(task.id, task.done);
    deleteTask(task);
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
      contentRight={
        <IconButton onClick={onDelete}>
          <TrashFull height={20} width={20} />
        </IconButton>
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
