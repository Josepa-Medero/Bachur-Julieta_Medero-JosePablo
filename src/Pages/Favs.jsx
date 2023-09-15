import React from 'react'
import { useGlobal } from '../Context/Context'
import Card from '../Complements/Card'

const Favs = () => {

  const {state} = useGlobal()
  
return (
  <div>
      {state.favs.map(fav => <Card dentista={fav} key={fav.id}/> )}
  </div>
)
}

export default Favs