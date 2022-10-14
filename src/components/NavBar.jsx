import React from 'react';
import {Link} from 'react-scroll';
import cmslogo from '../images/cms-logo.png';
import cernlogo from '../images/cern-logo.png';
function NavBar() {
  return (
    <div>
        <nav>
            <Link to='main' className='logo'>
                 <img src={cmslogo} alt='logo'></img>
                 <img src={cernlogo} alt='logo2'></img>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'></input>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li>
                    <Link to='introduction' className='active'>Introduction</Link>
                </li>
                <li>
                    <Link to='ticl' className='active'>TICL</Link>
                </li>
                <li>
                    <Link to='clue3d' className='active'>CLUE3D</Link>
                </li>
                <li>
                    <Link to='linking' className='active'>Linking</Link>
                </li>
                <li>
                    <Link to='conclusions' className='active'>Conclusions</Link>
                </li>
                <li>
                    <Link to='reference' className='active'>Reference</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;