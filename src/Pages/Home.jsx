import React from 'react'
import Card from '../Complements/Card'
import { useGlobal } from '../Context/Context'
<<<<<<< HEAD
import styles from '../../src/index.css'
=======

>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee

const Home = () => {

const { state } = useGlobal()

return (
<<<<<<< HEAD
    <div className='d-flex flex-column justify-content-center flex-wrap mt-5'>
      <h1>Home</h1>
      <div className='d-flex flex-row justify-content-center align-items-center flex-wrap container-fluid card-grid mt-3'>
      {state.dentistas.map(dentista => <Card dentista ={dentista} key ={dentista.id}/>)}
      </div>
      
=======
    <div>
        {state.dentistas.map(dentista => <Card dentista ={dentista} key ={dentista.id}/>)}
>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee
    </div>
  )
} 
export default Home