import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ArrayPage from '../pages/ArrayPage';
import Stringp from '../pages/Stringp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',  // Typically use lowercase for paths
        element: <Home />,
      },
      {
        path: 'array',  // Typically use lowercase for paths
        element: <ArrayPage />,
      },
      {
        path:"string",
        element:<Stringp/>
      }
    ],
  },
]);

export default router;
