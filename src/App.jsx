import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // ✅ Global Navbar
import Home from './pages/Home';
import Facility from './pages/Facility';
import Events from './pages/Events';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-500">
        <Navbar /> {/* ✅ Appears on every page */}

        <div className="p-5">
          <Routes>
            <Route path="/little-scholars-tutorial-school/" element={<Home />} />
            <Route path="/little-scholars-tutorial-school/facility" element={<Facility />} />
            <Route path="/little-scholars-tutorial-school/events" element={<Events />} />
            <Route path='/little-scholars-tutorial-school/about'element={<About/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
