import React from 'react'
import { useGlobal } from '../Context/Context'
import Card from '../Complements/Card'

const Favs = () => {

  const {state} = useGlobal()
  
return (
<<<<<<< HEAD
  <div className='d-flex flex-column justify-content-center flex-wrap mt-5'>
    <h1>Favorites</h1>
    <div className='d-flex flex-row justify-content-center align-items-center flex-wrap container-fluid card-grid  mt-3'>
      {state.favs.length == 0 ?  <h2>Todavía no tenés favoritos...</h2> : state.favs.map(fav => <Card dentista={fav} key={fav.id}/>) }
    </div>
      
=======
  <div>
      {state.favs.map(fav => <Card dentista={fav} key={fav.id}/> )}
>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee
  </div>
)
}

export default Favs