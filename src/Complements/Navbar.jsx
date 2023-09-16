import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../Context/Context'
<<<<<<< HEAD
import   '../../src/index.css'
import   '../../src/App.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {
  
  const {dispatch, state} = useGlobal();

  
  const {theme} = state;
  const cambioTema = theme ? 'light' : 'dark';
  const btnTheme = 'btn rounded '+ cambioTema
  const opNav = 'mx-3 '+ cambioTema
  
=======

const Navbar = () => {
  
  const {dispatch} = useGlobal();
>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee

  const cambioTheme=() => { 
    dispatch({type: 'SWITCH_THEME'});

  };

  return (
<<<<<<< HEAD
    <nav className={cambioTema}>
      <div className='d-flex flex-row justify-content-around container-fluid align-items-center'>        
        <div  className='fs-4'>
          <span className='text-danger'>D</span>H ODONTO
        </div>
        <div>        
          <Link className={opNav} to = '/'><span>Home</span></Link>
          <Link className={opNav} to = '/contact'>Contact</Link>
          <Link className={opNav} to = '/favs'>Favs</Link>
          <button className={btnTheme} onClick={cambioTheme}>{theme ? < MdDarkMode className='text-black' size={30}/> : <MdLightMode className='text-warning' size={30}/>}</button>
        </div>
      </div>
    </nav>
=======
    <div>
        <Link to = '/'>Home</Link>
        <Link to = '/contact'>Contact</Link>
        <Link to = '/favs'>Favs</Link>
        <button onClick={cambioTheme}>🌗</button>
    </div>
>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee
  )
}

export default Navbar