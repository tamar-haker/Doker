import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import TodosComponent from './components/TodosComponent';
import Home from './components/Home';
import Users from './components/Users';
import { useSelector } from 'react-redux';
import Error from './components/Error';
import { useEffect } from 'react';

const App = () => {

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/todos" activeClassName="active">Todos  </NavLink>
        <NavLink to="/users" activeClassName="active">Users  </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodosComponent />} />
        <Route path="/users" element={<Users />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
