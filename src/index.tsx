import ReactDOM from 'react-dom/client';
import './index.css';

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import IndexPage from './mainPage/indexPage.tsx';
import Blog from './Blog/Blog.tsx';
import CV from './CV/CV.tsx';
import ContactForm from './Email/Email.tsx';
import blogEntries from './Blog/blogPosts/blogList.tsx';
import Navbar from './Navbar/Navbar.tsx';
import Impressum from './Impressum/impressum.tsx';
import Privacy from './Privacy/privacy.tsx';

function Layout() {
  return (
    <div className="text-3xl">
      <Navbar />
      <Outlet />
      <ContactForm />
      <Impressum />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'cv', element: <CV /> },
      { path: 'blog', element: <Blog /> },
      { path: 'privacy', element: <Privacy /> },
      ...blogEntries,
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RouterProvider router={router} />);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js');
  });
}
