import React, { useState } from 'react';  
import { useDispatch } from 'react-redux';  
import { updateProduct } from '../slice/productsSlice';  

const EditProduct = ({ product }) => {  
  const dispatch = useDispatch();  
  const [name, setName] = useState(product.name);  
  const [description, setDescription] = useState(product.description);  
  const [price, setPrice] = useState(product.price);  
  const [available, setAvailable] = useState(product.available);  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    const updatedProduct = { ...product, name, description, price, available };  
    dispatch(updateProduct(updatedProduct));  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <input type="text" value={name} onChange={e => setName(e.target.value)} required />  
      <textarea value={description} onChange={e => setDescription(e.target.value)} required />  
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />  
      <label>  
        Доступен:  
        <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />  
      </label>  
      <button type="submit">Редактировать продукт</button>  
    </form>  
  );  
};  

export default EditProduct;