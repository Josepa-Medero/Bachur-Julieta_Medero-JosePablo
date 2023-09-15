import React from 'react'
import Card from '../Complements/Card'
import { useGlobal } from '../Context/Context'


const Home = () => {

const { state } = useGlobal()

return (
    <div>
        {state.dentistas.map(dentista => <Card dentista ={dentista} key ={dentista.id}/>)}
    </div>
  )
} 
export default Home