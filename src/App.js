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
import AdminBatch from './components/AdminBatch';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';


function App() {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/course/" element={<Courses />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/addcourse" element={<AddCourse />} />
        <Route path="/admin/course/:id" element={<AdminCourse />} />
        <Route path="/admin/addbatch" element={<AddBatch />} />
        <Route path="/admin/batch/:id" element={<AdminBatch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
