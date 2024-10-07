
import React from 'react';
import { pizzas } from './pizza';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div className="pizza-gallery">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;


