import React from 'react'
import { useGlobal } from '../Context/Context'
import { Link } from 'react-router-dom'


const Card = ({dentista}) => {

  const {dispatch} = useGlobal()
  const addFav = () => {
      dispatch({type: 'ADD_FAV', payload: dentista})
  }
  
    
  return (
    <div>
        <Link to={'/detail/' + dentista.id}>
          <img src="images/doctor.jpg" alt="icono medico" width={200} />
            <h3>{dentista.name}</h3>
            <h3>{dentista.username}</h3>
            <h3>{dentista.id}</h3>
        </Link>
        <button onClick={addFav}>❤️</button>
    </div>
  )
}

export default Card