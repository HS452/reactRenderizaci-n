import React, { useState } from 'react';
import { pizzaCart } from './pizza'; 

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  // Función para disminuir la cantidad de un producto
  const decreaseQuantity = (id) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      ).filter(item => item.count > 0) // Filtra los productos con cantidad 0
    );
  };

  // Calcular el total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="cart">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img style={{ width: '100px', height: '100px' }} src={item.img} alt={item.name} />
          <h4>{item.name}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.count}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;


