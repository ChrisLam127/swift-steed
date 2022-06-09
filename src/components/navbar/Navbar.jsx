import "./navbar.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // change bg color on scroll
  const [color, setColor] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className={color ? "container container-bg" : "container "}>
      <nav className='navbar'>
        <div className='left'>
          <div className='logo'>
            <i class='far fa-paper-plane'></i>
            <Link to='/'>
              <span>S</span>wift <span>S</span>teed
            </Link>
            <i class='fa fa-plane' aria-hidden='true'></i>
          </div>
          <div class='media-icons'>
            <Link to='#'>
              <i class='fab fa-facebook-f'></i>
            </Link>
            <Link to='#'>
              <i class='fab fa-instagram'></i>
            </Link>
            <Link to='#'>
              <i class='fab fa-twitter'></i>
            </Link>
            <Link to='https://wa.me/+27604010394' target='_blank'>
              <i class='fab fa-whatsapp'></i>
            </Link>
          </div>
          <div className='toggle' onClick={() => setToggle(true)}>
            <i class='fas fa-align-right'></i>
          </div>
        </div>

        <div className={toggle ? "right active" : "right"}>
          <ul className='links'>
            <span className='close' onClick={() => setToggle(false)}>
              &times;
            </span>
            <li className='link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='link'>
              <Link to='/signup'>Signup</Link>
            </li>
            <li className='link'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='link'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='link'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='link'>
              <Link to='/blogs'>Blogs</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
