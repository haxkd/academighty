import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom"
import NotFound from './components/NotFound';
import AdminHome from './components/AdminHome';
import AdminLogin from './components/AdminLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
