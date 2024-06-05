
import { useState } from 'react'
import './App.css'
import ProductForm from './components/productForm.jsx/ProductForm'






function App() {

  
  const [initialProducts, setInitialProducts] =  useState ([
    {
      name : "Camisa",
      price : 2000,
      stock: 30,
    },
    {
      name : "Short",
      price : 1000,
      stock: 20,
    },
    {
      name : "Pantalon",
      price : 3000,
      stock: 10,
    }
  ])
  return (
    <>
    {
      initialProducts.map((product, i) => (
        
          <div key={i}>
            <h3>Nombre : {product.name}</h3>
            <h3>Precio : {product.price}</h3>
            <h3>Stock : {product.stock}</h3>
          </div>
        

      
      ))
    }

    <ProductForm initialProducts={initialProducts} setInitialProducts={setInitialProducts}/>
    </>
  )
}

export default App
