import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import IndexPage from './mainPage/indexPage';
import Navbar from './navbar/navbar';


const router = createBrowserRouter(
  [{
    path:"/",
    element:<IndexPage/>
  },
  {
    path:"/CV",
    element:<IndexPage/>
  },
  {
    path:"/Blog",
    element:<IndexPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-3xl'>
    <RouterProvider router={router}>
    </RouterProvider>
    </div>

);
reportWebVitals();
