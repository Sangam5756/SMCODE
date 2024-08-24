import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import StringPage from '../pages/StringPage';
import Home from '../pages/Home';

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
        path: 'string',  // Typically use lowercase for paths
        element: <StringPage />,
      },
    ],
  },
]);

export default router;
