import routes from './routes';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
