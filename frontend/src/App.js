import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} /> 
            <Route path="/register" element={<RegistrationPage />} /> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
