import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, LoadingScreen, Typography } from 'react-library';
import TasksList from '../../containers/TasksList';
import { useAddTask, useTasks } from '../../hooks';
import Task from '../Task';
import { ContentLeft, ContentRight, Wrapper } from './Home.styles';

type Params = { id: string };

const Home = () => {
  const { id: selectedId }: Params = useParams();
  const { isLoading, tasks } = useTasks();
  const { addTask, isSaving } = useAddTask();
  const history = useHistory();

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
    rightContent = <LoadingScreen />;
  } else {
    if (tasks.length === 0) {
      rightContent = <button onClick={onNewTask}>Add a task</button>;
    } else {
      if (selectedId) {
        const task = tasks?.filter(({ id }) => {
          return id === selectedId;
        })[0];
        console.log(task);
        if (task) {
          rightContent = <Task isSaving={isSaving} task={task} />;
        } else {
          rightContent = <p>Couldn't find the task!</p>;
        }
      }
    }
  }

  return (
    <Wrapper>
      <ContentLeft>
        <Typography component={'h1'} mx={3} my={2} variant={'h5'}>
          Tasks
        </Typography>
        {leftContent}
        {!isLoading && (
          <Button isPrimary={true} m={3} onClick={onNewTask}>
            New Task
          </Button>
        )}
      </ContentLeft>
      <ContentRight>{rightContent}</ContentRight>
    </Wrapper>
  );
};

export default Home;
