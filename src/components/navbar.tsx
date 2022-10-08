import {BsPersonCircle} from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="./src/assets/logo.png" alt="" />
      <div className="profile-nav-container">
        <BsPersonCircle className="profile-icon" />
        <h2>Bhavik Agarwal</h2>
      </div>
    </nav>
  );
};

export default Navbar;
