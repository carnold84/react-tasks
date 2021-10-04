import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import TasksList from '../../containers/TasksList';
import useTasks from '../../hooks/useTasks';
import Task from '../Task';
import { ContentLeft, ContentRight, Wrapper } from './Home.styles';

type Params = { id: string };

const Home = () => {
  const { id: selectedId }: Params = useParams();
  const { data: tasks, isLoading } = useTasks();
  const history = useHistory();

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
      rightContent = <Link to={'new'}>Add a task</Link>;
    } else {
      if (selectedId) {
        if (selectedId === 'new') {
          rightContent = <p>Add A TASK!</p>;
        } else {
          const task = tasks?.filter(({ id }) => {
            return id === selectedId;
          })[0];
          if (task) {
            rightContent = <Task task={task} />;
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
        <h1>Tasks</h1>
        {leftContent}
      </ContentLeft>
      <ContentRight>{rightContent}</ContentRight>
    </Wrapper>
  );
};

export default Home;
