import React, { useState } from "react";
import "./product.css"; 

const products = [
  { id: 1, name: "Printed Cotton Jacket", price: "$425.00", stock: 999, low: 500, tags: ["Unisex", "Bag"], var: 3 },
  { id: 2, name: "Nike Jordan Shoes", price: "$645.00", stock: 999, low: 500, tags: ["Unisex", "Bag"], var: 3 },
  { id: 3, name: "Fossil Watch", price: "$495.00", stock: 999, low: 500, tags: ["Unisex", "Bag"], var: 3 },
  { id: 4, name: "Balmain printed T-Shirt", price: "$599.00", stock: 999, low: 500, tags: ["Unisex", "Bag"], var: 3 },
  { id: 5, name: "Gucci Glasses", price: "$54.00", stock: 999, low: 500, tags: ["Unisex", "Bag"], var: 3 },
  { id: 6, name: "Black Denim Jacket", price: "$540.00", stock: 999, low: 500, tags: ["Unisex", "Bag"], var: 3 },
  { id: 7, name: "Army Green Jacket", price: "$799.00", stock: 999, low: 500, tags: ["Unisex", "Bag"], var: 3 },
];

const ProductTable = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="container">
      <h2 className="title">Products</h2>
      <p>Dashboard/Products</p>
      <div className="header">

        <button className="tab active">Active</button>
        <button className="tab">Inactive</button>
        <button className="tab">All</button>
        
      </div>

      

      <table className="product-table">
        <thead>
          <tr>

            <th>Select</th>

            <th>Product</th>

            <th>Tags</th>

            <th>Var</th>

            <th>Price</th>

            <th>Stock</th>

            <th>Low</th>

          </tr>
        </thead>

        <tbody>
          
          {products.map((product) => (
            <tr key={product.id}>
              <td>

                <input
                  type="checkbox"
                  checked={selected.includes(product.id)}
                  onChange={() => toggleSelect(product.id)}
                />

              </td>
              <td>{product.name}</td>
              <td>
                {product.tags.map((tag, index) => (
                  <span key={index} className="tag-button">{tag}</span>
                ))}
              </td>

              <td>{product.var}</td>

              <td>{product.price}</td>

              <td>{product.stock}</td>

              <td>{product.low}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
