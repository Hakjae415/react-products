import React from 'react'
import { Button } from '@mui/material'

const AllProducts = ({listProducts, handleClick}) => {
    return (
        <>
          <h1>BOOTLEG AMAZON</h1>
          <ul id="container">
            {
              listProducts.map((products) => {
                return (
                    <div id="card" key={products.id} >
                     <h2>{products.title}</h2>
                     <img src={products.thumbnail}/>
                     <p>Brand: {products.brand}</p>
                     <p>Price: ${products.price}</p>
                     <p>Rating: {products.rating}/5</p>
                     <Button variant="contained" color="success" onClick={() => handleClick(products.id)}>Get Details</Button>
                     <Button>Add To Cart</Button>
                    </div>
                )
              })  
            }
          </ul>  
        </>
    )
}

export default AllProducts