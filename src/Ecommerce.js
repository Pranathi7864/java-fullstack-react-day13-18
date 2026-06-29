import React, { useState, useEffect } from "react";

export const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  useEffect(() => {
    fetch("http://localhost:8081/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading food menu:", err));
  }, []);

  // Handler: Runs when clicking "Add to Cart" for the first time
  const handleAddToCart = (productId) => {
    // 1. Instantly update cart quantity to 1
    setCart((prevCart) => ({ ...prevCart, [productId]: 1 }));

    // 2. Instantly reduce the displayed screen stock by 1
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  // Handler: Runs when clicking the "+" button
  const handleIncrement = (product) => {
    // Check if the current screen stock has run out
    if (product.quantity <= 0) {
      alert(`Cannot add more! Exceeds the available warehouse stock.`);
      return;
    }

    // 1. Instantly increment cart quantity
    setCart((prevCart) => ({ ...prevCart, [product.id]: (prevCart[product.id] || 0) + 1 }));

    // 2. Instantly reduce the displayed screen stock by 1
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  // Handler: Runs when clicking the "-" button
  const handleDecrement = (productId) => {
    const currentCartQty = cart[productId] || 0;

    // 1. Instantly return 1 item back to the displayed screen stock
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
      )
    );

    // 2. Decrement or completely clear the item from cart state
    if (currentCartQty <= 1) {
      const updatedCart = { ...cart };
      delete updatedCart[productId];
      setCart(updatedCart);
    } else {
      setCart((prevCart) => ({ ...prevCart, [productId]: currentCartQty - 1 }));
    }
  };

  // Logic: Send updated quantities back to PostgreSQL database all at once
  const handlePlaceOrder = () => {
    // Collect all backend fetch calls into an array
    const updatePromises = Object.keys(cart).map((id) => {
      const product = products.find((p) => p.id === parseInt(id));
      
      if (product) {
        // Since product.quantity is already reduced on screen, we send it directly to the database
        return fetch(`http://localhost:8081/${id}/update/${product.quantity}`, {
          method: "POST"
        });
      }
      return null;
    });

    // Wait until all database update calls complete across the network
    Promise.all(updatePromises.filter(Boolean))
      .then(() => {
        alert("Order placed successfully! Warehouse inventory metrics synced.");
        setCart({}); // Empty out the checkout cart block
        
        // Re-fetch master numbers from database to guarantee absolute synchronization
        fetch("http://localhost:8081/product")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      })
      .catch((err) => console.error("Error synchronizing stock:", err));
  };

  // Compute live billing summary tallies
  let totalItems = 0;
  let totalPrice = 0;
  let billDetailsList = [];

  Object.keys(cart).forEach((id) => {
    // Find matching items from state using initial database configuration fields
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      const qtyInCart = cart[id];
      totalItems += qtyInCart;
      // We calculate price using the cart quantity against product object unit price
      const originalProductFetch = products.find((p) => p.id === parseInt(id));
      totalPrice += originalProductFetch.price * qtyInCart;
      billDetailsList.push({
        name: originalProductFetch.name,
        qty: qtyInCart,
        subtotal: originalProductFetch.price * qtyInCart,
      });
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1><center>FOOD STALL</center></h1>
      <div style={
        { display: "grid",
         gridTemplateColumns: "repeat(3, 1fr)", 
         gap: "20px", 
         marginTop: "20px" }}>
        {products.map((product, index) => {
          const isItemInCart = cart[product.id] !== undefined;
          const cartQuantity = cart[product.id] || 0;
          const extension = index === 7 ? ".avif" : ".jpg";
          const imagePath = `/pic${index + 1}${extension}`;

          return (
            <div key={product.id} style={{ border: "1px solid black", padding: "15px", textAlign: "center" }}>
              <img 
                src={imagePath} 
                style={{ width: "150px", height: "150px", objectFit: "cover", display: "block", margin: "0 auto 10px" }} 
              />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Stock Available: {product.quantity}</p>
              {product.quantity === 0 && !isItemInCart ? (
                <span style={{ color: "red", fontWeight: "bold" }}>OUT OF STOCK</span>
              ) : !isItemInCart ? (
                <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
              ) : (
                <div>
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <span style={{ margin: "0 15px", fontWeight: "bold" }}>{cartQuantity}</span>
                  <button onClick={() => handleIncrement(product)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {totalItems > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            border: "2px solid green",
            padding: "15px",
            backgroundColor: "white",
            minWidth: "280px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            zIndex: 1000
          }}
        >
          <h3>Order Bill</h3>
          <hr />
          {billDetailsList.map((item, idx) => (
            <p key={idx} style={{ margin: "5px 0" }}>
              {item.name} x {item.qty}: ₹{item.subtotal.toFixed(2)}
            </p>
          ))}
          <hr />
          <h4>Total Items: {totalItems}</h4>
          <h4 style={{ color: "green", marginTop: "5px" }}>Total Cost: ₹{totalPrice.toFixed(2)}</h4>
          <hr />
          <button 
            onClick={handlePlaceOrder} 
            style={{ width: "100%", padding: "10px", backgroundColor: "green", color: "white", fontWeight: "bold", border: "none", cursor: "pointer" }}
          >
            PLACE ORDER
          </button>
        </div>
      )}
    </div>
  );
};
