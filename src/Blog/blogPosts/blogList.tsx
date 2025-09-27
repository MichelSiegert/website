import TodoPost from './BlogPost1/BlogPost1.tsx';
import FinanceBlog from './pythonFinanaceIdeas/financeChapter1.tsx';

const blogEntries = [
  { path: '/Blog/helloworld1', element: <TodoPost /> },
  { path: '/Blog/finance1', element: <FinanceBlog /> },
];
export default blogEntries;
