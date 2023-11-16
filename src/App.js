import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import NotFound from './components/NotFound';
import AdminHome from './components/AdminHome';
import AdminLogin from './components/AdminLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCourse from './components/AddCourse';
import AdminCourse from './components/AdminCourse';
import AddBatch from './components/AddBatch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/addcourse" element={<AddCourse />} />
        <Route path="/admin/course/:id" element={<AdminCourse />} />
        <Route path="/admin/addbatch" element={<AddBatch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
