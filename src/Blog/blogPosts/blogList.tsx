import { Route } from 'react-router';
import TodoPost from './BlogPost1/BlogPost1.tsx';
import FinanceBlog from './pythonFinanaceIdeas/financeChapter1.tsx';

const blogEntries = [
  (<Route key="hw1" path="/blog/helloworld1" element={<TodoPost />} />),
  (<Route key="fin1" path="/blog/finance1" element={<FinanceBlog />} />),
];
export default blogEntries;
