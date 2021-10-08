import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Typography } from 'react-library';
import TasksList from '../../containers/TasksList';
import useAddTask from '../../hooks/useAddTask';
import useTasks from '../../hooks/useTasks';
import Task from '../Task';
import { ContentLeft, ContentRight, Wrapper } from './Home.styles';

type Params = { id: string };

const Home = () => {
  const { id: selectedId }: Params = useParams();
  const { data: tasks, isLoading } = useTasks();
  const { addTask, isSaving } = useAddTask();
  const history = useHistory();
  console.log(isSaving);

  const onNewTask = () => {
    const task = addTask({
      title: 'New Task',
    });
    history.push(`/${task?.id}`);
  };

  useEffect(() => {
    if (selectedId === undefined) {
      if (tasks?.length > 0) {
        history.push(tasks[0]?.id);
      }
    } else if (tasks?.length === 0) {
      history.push('');
    }
  }, [history, selectedId, tasks]);

  let leftContent = (
    <TasksList isLoading={isLoading} selectedId={selectedId} tasks={tasks} />
  );
  let rightContent;

  if (isLoading) {
    rightContent = 'Loading...';
  } else {
    if (tasks.length === 0) {
      rightContent = <button onClick={onNewTask}>Add a task</button>;
    } else {
      if (selectedId) {
        if (selectedId === 'new') {
          console.log('new');
          rightContent = <Task isSaving={isSaving} />;
        } else {
          const task = tasks?.filter(({ id }) => {
            return id === selectedId;
          })[0];
          if (task) {
            rightContent = <Task isSaving={isSaving} task={task} />;
          } else {
            rightContent = <p>Couldn't find the task!</p>;
          }
        }
      }
    }
  }

  return (
    <Wrapper>
      <ContentLeft>
        <Typography as={'h1'} variant={'h1'}>
          Tasks
        </Typography>
        {leftContent}
        <button onClick={onNewTask}>New Task</button>
      </ContentLeft>
      <ContentRight>{rightContent}</ContentRight>
    </Wrapper>
  );
};

export default Home;
