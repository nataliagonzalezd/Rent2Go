import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'
import Favorites from '../component/favorites.jsx'

const ViewFavorites = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className='card mx-5 my-5'>
            <h2 className='mx-3 my-3 fw-bold  fs-2 text-dark'> Mis favoritos </h2> <Favorites />
            <Favorites />
            <Favorites />
        </div>
    )
}

export default ViewFavorites
