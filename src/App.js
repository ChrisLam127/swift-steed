import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Signup from "./pages/signup/Signup";
import Driver from "./pages/driver/Driver";
import Owner from "./pages/owner/Owner";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/drivers' element={<Driver />} />
        <Route path='/owners' element={<Owner />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
