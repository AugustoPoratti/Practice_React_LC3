
import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductForm = ({ initialProducts, setInitialProducts }) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleAddProduct = (e) => {
    e.preventDefault();

    
    const existingProductIndex = initialProducts.findIndex(product => product.name.toLowerCase() === name.toLowerCase());

    if (existingProductIndex !== -1) {
      const updatedProducts = [...initialProducts];
      updatedProducts[existingProductIndex].stock += parseInt(stock);
      updatedProducts[existingProductIndex].price = parseFloat(price);

      
      setInitialProducts(updatedProducts);
    } else {
      
      const newProduct = {
        name: name,
        price: parseFloat(price),
        stock: parseInt(stock)
      };

      setInitialProducts([...initialProducts, newProduct]);
    }

    
    setName('');
    setPrice(0);
    setStock(0);
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

ProductForm.propTypes = {
  initialProducts: PropTypes.array.isRequired,
  setInitialProducts: PropTypes.func.isRequired
};

export default ProductForm;
