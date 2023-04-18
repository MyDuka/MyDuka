import React, { useState, useEffect } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  useEffect(() => {
    // fetch products data from API and set state
    const fetchData = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleAddProduct = async () => {
    // create new product object and add to database
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    setProducts([...products, data]);
  };

  const handleDeleteProduct = async (id) => {
    // delete product from database and remove from state
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return (
    <div>
      <h2>Product Management</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;