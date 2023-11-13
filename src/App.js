import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom"
import NotFound from './components/NotFound';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
