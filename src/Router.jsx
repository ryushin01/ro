import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList/TodoList';

const Router = () => {
  return (
    <BrowserRouter basename="/ro">
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
