import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobal } from '../Context/Context'

const Detail = () => {
    const {state, dispatch} = useGlobal()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const {name, email, phone, website} = state.dentista
    console.log(id)
    const url = 'https://jsonplaceholder.typicode.com/users/' + id
  
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'GET_DENTISTA', payload: data})
            setLoading(false)
        })
    }, [])
  
    return (
<<<<<<< HEAD
    <div className='d-flex flex-column justify-content-center flex-wrap mt-5'>
        <h1>Informacion dentista</h1>
        <div className='m-5 '>
            {loading ? 'Cargando...' : <>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col" className="text-center">Nombre</th>
                    <th scope="col" className="text-center">Email</th>
                    <th scope="col" className="text-center">Teléfono</th>
                    <th scope="col" className="text-center">Website</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row" className="text-center">{name}</th>
                    <td className="text-center">{email}</td>
                    <td className="text-center">{phone}</td>
                    <td className="text-center">{website}</td>
                </tr>
                </tbody>
            </table>
            </>}
        </div>
        
    </div>
=======
    <>
        <h1>Informacion dentista</h1>
        {loading ? 'Cargando...' : <>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
        </>}
    </>
>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee
  )
}

export  default Detail