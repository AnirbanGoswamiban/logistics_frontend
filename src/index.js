import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Account from './Pages/Account'
import Tasks from './Pages/Tasks'
import Vendors from './Pages/Vendors';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:"/Accounts",
      element:<Account/>
      },
      {
        path:'/Tasks',
        element:<Tasks/>
      },
      {
        path:'/Vendors',
        element:<Vendors/>
      }
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


