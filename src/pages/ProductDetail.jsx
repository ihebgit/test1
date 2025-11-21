//src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import { useCart } from "../context/CartContext";
export default function ProductDetail(){
const { id } = useParams();
const product = productsData.find(p => String(p.id) === String(id));
const [qty, setQty] = useState(1);
const { addToCart } = useCart();
if (!product) return <div>Produit introuvable</div>;
return (
<div style={{display:"flex", gap:20}}>
<img src={product.image} alt={product.title} style={{width:360, height:360, objectFit:"cover"}}/>
<div>
<h2>{product.title}</h2>
<p>{product.description}</p>
<p><strong>{product.price.toFixed(2)} €</strong></p>
<div style={{marginTop:12}}>
<label>Quantité: </label>
<input type="number" min="1" value={qty} onChange={e=>setQty(Math.max(1, Number(e.target.value)))}
style={{width:60}}/>
</div>
<button style={{marginTop:8}} onClick={() => addToCart(product, qty)}>Ajouter au panier</button>
</div>
</div>
);
}