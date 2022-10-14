import React from 'react';
import {Link} from 'react-scroll';
import cmslogo from '../images/cms-logo.png';
import cernlogo from '../images/cern-logo.png';
import bmbf from '../images/BMBF.png'
import rwth from '../images/rwth_logo.png'

function NavBar() {
  return (
    <div>
        <nav>
            <Link to='main' className='logo'>
                 <img src={cmslogo} alt='logo'></img>
                 <img src={cernlogo} alt='logo2'></img>
                 <img src={bmbf} alt=''></img>
                 <img src={rwth} alt=''></img>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'></input>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            
            <ul className='menu'>
                <li>
                    <Link to='introduction' offset={-100} className='active'>Introduction</Link>
                </li>
                <li>
                    <Link to='ticl' offset={-100} className='active'>TICL</Link>
                </li>
                <li>
                    <Link to='clue3d' offset={-100} className='active'>CLUE3D</Link>
                </li>
                <li>
                    <Link to='linking' offset={-100} className='active'>Linking</Link>
                </li>
                <li>
                    <Link to='conclusions' offset={-100} className='active'>Conclusions</Link>
                </li>
                <li>
                    <Link to='reference' offset={-100} className='active'>Reference</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;