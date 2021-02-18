import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="product_block">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price}€</div>
      <div>
        <button onClick={() => onAdd(product)}>Ajouter au panier</button>
      </div>
    </div>
  );
}
