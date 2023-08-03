import React from 'react'
import { Button } from '@mui/material'

const SingleProduct = ({oneProduct, handleGoBack}) => {
    return (
        <>
        <h1>BOOTLEG AMAZON</h1>
        <div id="card">
            <h2>{oneProduct.title}</h2>
            <img src={oneProduct.thumbnail} alt={oneProduct.title} />
            <p>Brand: {oneProduct.brand}</p>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <p>Rating: {oneProduct.rating}/5</p>
            <p>Stock: {oneProduct.stock}</p>
            <button onClick={handleGoBack }>Go Back</button>
            <Button>Add To Cart</Button>
        </div>
      </> 
    )
}

export default SingleProduct