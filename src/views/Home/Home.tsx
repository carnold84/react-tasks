import { useParams } from 'react-router';
import useTasks from '../../hooks/useTasks';

const Home = () => {
  console.log('Home');
  const params = useParams();
  const { data: tasks, isLoading } = useTasks();

  console.log(params, tasks, isLoading);

  return (
    <div>
      <div>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          tasks?.map(({ id, title }) => {
            return <div key={id}>{title}</div>;
          })}
      </div>
      <div>Details</div>
    </div>
  );
};

export default Home;
