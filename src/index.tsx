import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter, Routes, Route, Navigate, Outlet,
} from 'react-router';
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

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/cv" element={<CV />} />
        <Route path="/" element={<IndexPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {...blogEntries}
      </Route>
    </Routes>
  </BrowserRouter>,
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js');
  });
}
