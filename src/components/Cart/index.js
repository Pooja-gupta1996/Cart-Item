import React from 'react';
import './style.scss';
import CartItem from '../CartItem';

const Cart = (props) => {
  const { products } = props; 
//this is shortHand way of writing
// const products  = props.products;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          //Passing props from app.js to next level child component CartItem
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
  );
}

export default Cart;