import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './assets/styles/styles.css'
import App from './App.jsx';
import Home from './pages/Home';
import Canvas from '../src/components/canvas/canvas.jsx'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ErrorPage from './pages/Error.jsx';
import Premium from './pages/premium.jsx';
import PaymentSuccessful from './pages/paymentSuccessful.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/canvas',
        element: <Canvas />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/premium',
        element: <Premium/>
      },
      {
        path:'/paymentSuccessful',
        element: <PaymentSuccessful/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
