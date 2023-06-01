import { createBrowserRouter } from 'react-router-dom';
import { Routers } from '../shared/enums/routers.enum';
import PostList from '../shared/pages/Home/PostList';
import About from '../shared/pages/About/About';
import UserInfo from '../shared/pages/UserInfo/UserInfo';

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
    element: <UserInfo />,
  },
]);

export default routers;
