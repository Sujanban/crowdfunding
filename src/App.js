import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
// import { More } from './pages/More';
// import { Howitwork } from "./pages/howitwork/Howitwork";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} exact />
        {/* <Route path="/more" element={<More/>}/> */}
        {/* <Route path="/how-it-works" element={<Howitwork/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
