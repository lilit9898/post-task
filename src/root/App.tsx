import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from '../shared/containers/AppHeader/AppHeader';
import routers from './routers';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
