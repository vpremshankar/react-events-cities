import { createBrowserRouter } from 'react-router-dom';
import Header from '../layout/Header';
import HomeComponent from '../components/Home';
import EventDetails from '../components/EventDetails';
import NotFound from '../error/NotFound';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <HomeComponent />,
          errorElement: <NotFound />
        },
        {
          path: "/events/:id",
          element: <EventDetails />,
          errorElement: <NotFound />
        },
      ],
    },
  ]);

export default router;
