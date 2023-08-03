import React from 'react'
import { Button } from '@mui/material'
const AllProducts = ({listProducts, handleClick}) => {
    return (
        <>
          <ul id="container">
            {
              listProducts.map((products) => {
                return (
                    <div id="card" key={products.id} >
                     <h2>{products.title}</h2>
                     <img src={products.thumbnail}/>
                     <p>Brand: {products.brand}</p>
                     <p>Price: {products.price}</p>
                     <p>Description: {products.description}</p>
                     <p>Rating: {products.rating}/5</p>
                     <p>Stock: {products.stock}</p>
                     <Button variant="contained" color="success" onClick={() => handleClick(products.id)}>Get Details</Button>
                    </div>
                )
              })  
            }
          </ul>  
        </>
    )
}

export default AllProducts