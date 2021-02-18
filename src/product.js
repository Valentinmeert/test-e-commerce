import React from "react";

export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <img className="small" src={item.image} alt={item.title}></img>
      <h3>{item.title}</h3>
      <div>${item.price}</div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
