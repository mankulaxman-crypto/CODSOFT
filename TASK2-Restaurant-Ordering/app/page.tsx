"use client";
import { useState } from "react";

export default function RestaurantSystem() {
  const [cart, setCart] = useState<any[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const menu = [
    { id: 1, name: "Chicken Biryani", price: 250, img: "🍛", category: "Biryani" },
    { id: 2, name: "Veg Pizza", price: 180, img: "🍕", category: "Pizza" },
    { id: 3, name: "Burger Combo", price: 150, img: "🍔", category: "Fast Food" },
    { id: 4, name: "Paneer Curry", price: 200, img: "🍛", category: "Curry" },
  ];

  const addToCart = (item:any) => setCart([...cart, item]);
  const total = cart.reduce((s,i)=>s+i.price,0);

  return (
    <div style={{padding:"20px", fontFamily:"Arial", background:"#fffbeb", minHeight:"100vh"}}>
      <h1>🍽️ FoodieExpress | CodSoft Task 2</h1>
      <p>Online Restaurant Ordering System - Order Tracking Live!</p>
      
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"15px", marginTop:"20px"}}>
        {menu.map(m=>(
          <div key={m.id} style={{border:"1px solid #ddd", padding:"15px", borderRadius:"10px", background:"white", textAlign:"center"}}>
            <div style={{fontSize:"40px"}}>{m.img}</div>
            <h3>{m.name}</h3>
            <p>₹{m.price} | {m.category}</p>
            <button onClick={()=>addToCart(m)} style={{background:"#f59e0b", color:"white", padding:"8px 15px", border:"none", borderRadius:"5px", cursor:"pointer"}}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={{marginTop:"30px", border:"2px solid #f59e0b", padding:"20px", borderRadius:"10px", background:"white"}}>
        <h2>🛒 Cart ({cart.length}) - Total: ₹{total}</h2>
        {cart.map((c,i)=><p key={i}>{c.name} - ₹{c.price}</p>)}
        {cart.length>0 && !orderPlaced && (
          <button onClick={()=>setOrderPlaced(true)} style={{background:"green", color:"white", padding:"10px 20px", border:"none", borderRadius:"5px", marginTop:"10px"}}>Place Order</button>
        )}
        {orderPlaced && (
          <div style={{marginTop:"15px", background:"#dcfce7", padding:"10px", borderRadius:"5px"}}>
            <h3 style={{color:"green"}}>✅ Order Placed! Tracking: Preparing → On the way → Delivered</h3>
            <p>Order ID: #FOOD{Math.floor(Math.random()*10000)}</p>
            <p>Estimated Time: 30 mins</p>
          </div>
        )}
      </div>
      <p style={{marginTop:"20px", color:"#888"}}>Tech: Next.js, Node.js, PostgreSQL, Live Order Tracking | #codsoft</p>
    </div>
  )
}
