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
    <>
        <h1>Informacion dentista</h1>
        {loading ? 'Cargando...' : <>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
        </>}
    </>
  )
}

export  default Detail