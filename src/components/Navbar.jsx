import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6">
      <Link to="/little-scholars-tutorial-school/" className="text-lg font-semibold text-blue-600">Home</Link>
      <Link to="/little-scholars-tutorial-school/facility" className="text-lg text-blue-600">Facility</Link>
      <Link to="/little-scholars-tutorial-school/events" className="text-lg text-blue-600">Events</Link>
       <Link to="/little-scholars-tutorial-school/about" className="text-lg text-blue-600">About us </Link>
    </nav>
  );
}

export default Navbar;
