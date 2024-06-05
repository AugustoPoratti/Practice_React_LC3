
import PropTypes from 'prop-types'
import { useState } from 'react'

const ProductForm = ({ initialProducts, setInitialProducts }) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleAddProduct = (e) => {
    if (name != "" && price != 0 && stock != 0) {
      if (
        initialProducts.some((p) => p.name.toLowerCase() === name.toLowerCase())
      ) {
        const i = initialProducts.findIndex(
          (p) => p.name.toLowerCase() === name.toLowerCase()
        );

        initialProducts[i].price = price;
        initialProducts[i].stock =
          parseInt(initialProducts[i].stock) + parseInt(stock);
        setInitialProducts([...initialProducts]);
      }
    const newProduct = {
      name: name,
      price: price,
      stock: stock,
    }

    setInitialProducts([...initialProducts, newProduct]);

    
    setName('');
    setPrice(0);
    setStock(0);

    e.preventDefault();

  }
}
  return (
    <div>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="">Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label htmlFor="">Stock</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        <button type='submit' onClick={handleAddProduct}>Add</button>
      </form>
    </div>
  )
}

ProductForm.propTypes = {
  initialProducts: PropTypes.array,
  setInitialProducts: PropTypes.func
}


export default ProductForm

