import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Outlet } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider
  
} from "react-router-dom";
import IndexPage from './mainPage/indexPage';
import Blog from './Blog/Blog';
import CV from './CV/CV';
import ContactForm from './Email/Email'
import blogEntries from './Blog/blogPosts/blogList';
import Navbar from './navbar/navbar';


const Layout = () => (
  <div className="text-3xl">
    <Navbar />
    <Outlet /> {}
    <ContactForm />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "",
        element: <IndexPage />, 
      },
      {
        path: "CV",
        element: <CV />, 
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      ...blogEntries,
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />


);
reportWebVitals();
