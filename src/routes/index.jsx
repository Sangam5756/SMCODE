import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import StringPage from '../pages/StringPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'string',  // Typically use lowercase for paths
        element: <StringPage />,
      },
    ],
  },
]);

export default router;
