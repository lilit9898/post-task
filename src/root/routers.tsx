import { createBrowserRouter } from 'react-router-dom';
import { Routers } from '../shared/enums/routers.enum';
import PostList from '../shared/pages/Home/PostList';
import About from '../shared/pages/About/About';

const routers = createBrowserRouter([
  {
    path: Routers.HOME,
    element: <PostList />,
  },
  {
    path: Routers.ABOUT,
    element: <About />,
  },
  {
    path: Routers.POST,
    element: <div />,
  },
]);

export default routers;
