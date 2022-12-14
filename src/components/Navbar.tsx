import {BsPersonCircle} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="profile-nav-container">
        <BsPersonCircle className="profile-icon" />
        <h2>Bhavik Agarwal</h2>
      </div>
    </nav>
  );
};

export default Navbar;
