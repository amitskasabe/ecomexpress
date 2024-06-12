import React from 'react'
import axios from 'axios'
const App = () => {
  const fetchProducts = async () => {
    const fetchProduct = await axios.get("http://localhost/ecom/backend/products/kookaboora-bat" ).then((Response) => {
      console.log(Response.data);
    })
    
  }
  fetchProducts();

  return (
    <div>App</div>
  )
}

export default App