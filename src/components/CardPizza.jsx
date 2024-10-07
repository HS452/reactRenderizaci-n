// CardPizza.jsx
import React from 'react';

const CardPizza = ({ pizza }) => {
  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default CardPizza;





/* import '../assets/css/CardPizza.css'
const CardPizza = ({ name, price, ingredients, img }) => {
    return (
      <div className="card" id='carta' style={{ width: '18rem' }}>
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes: {ingredients.join(', ')}</p> 
          <hr />         
          <p className="card-text">Precio: ${price.toLocaleString()}</p>
          <br />
          
          <a id='boton' href="#" className="btn btn-primary">Ver Más</a> 
          <a id='boton' href="#" className="btn btn-success">Añadir</a>
        </div>
      </div>
    );
  };

  export default CardPizza; */

  
