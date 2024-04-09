import { createBrowserRouter } from 'react-router-dom';
import Header from '../layout/Header';
import HomePage from '../components/Home';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);

export default router;
