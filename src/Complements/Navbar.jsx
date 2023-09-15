import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../Context/Context'

const Navbar = () => {
  
  const {dispatch} = useGlobal();

  const cambioTheme=() => { 
    dispatch({type: 'SWITCH_THEME'});

  };

  return (
    <div>
        <Link to = '/'>Home</Link>
        <Link to = '/contact'>Contact</Link>
        <Link to = '/favs'>Favs</Link>
        <button onClick={cambioTheme}>🌗</button>
    </div>
  )
}

export default Navbar