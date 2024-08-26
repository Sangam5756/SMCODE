import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import DisplayPage from '../pages/DisplayPage';

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
        path: '/:id',  // Typically use lowercase for paths
        element: <DisplayPage />,
      },
      
    ],
  },
]);

export default router;
