import React, { useState } from 'react';  
import { useDispatch } from 'react-redux';  
import { addProduct } from '../slice/productsSlice.js';  

const AddProduct = () => {  
  const dispatch = useDispatch();  
  const [name, setName] = useState('');  
  const [description, setDescription] = useState('');  
  const [price, setPrice] = useState('');  
  const [available, setAvailable] = useState(false);  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    const newProduct = {  
      id: Date.now(),  
      name,  
      description,  
      price: parseFloat(price),  
      available,  
    };  
    dispatch(addProduct(newProduct));  
    setName('');  
    setDescription('');  
    setPrice('');  
    setAvailable(false);  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required />  
      <textarea placeholder="Описание" value={description} onChange={e => setDescription(e.target.value)} required />  
      <input type="number" placeholder="Цена" value={price} onChange={e => setPrice(e.target.value)} required />  
      <label>  
        Доступен:  
        <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />  
      </label>  
      <button type="submit">Добавить продукт</button>  
    </form>  
  );  
};  

export default AddProduct;