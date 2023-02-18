import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'
import Favorites from '../component/favorites.jsx'

const ViewFavorites = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()

    useEffect(() => {
        actions.getFavorites(params.costumer_id)
        console.log(params.costumer_id)
    }, [])

    return (
        <div className='card mx-5 my-5'>
            <h2 className='mx-3 my-3 fw-bold  fs-2 text-dark'> Mis favoritos </h2>{' '}
            {store.productsFavorites.map((cadaProducto, index) => (
                <Favorites
                    key={index}
                    id={cadaProducto.productinfo.id}
                    name={cadaProducto.productinfo.name}
                    price={cadaProducto.productinfo.price}
                    description={cadaProducto.productinfo.description}
                    image={cadaProducto.productinfo.image}
                    costumer_id={cadaProducto.productinfo.costumer_id}
                />
            ))}{' '}
        </div>
    )
}

export default ViewFavorites
