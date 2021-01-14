import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="container">
      <NavLink to="/" className="text-white"><p>NADER</p></NavLink>
    </div>
  );
}

export default Header;