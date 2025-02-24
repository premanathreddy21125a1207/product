import React, { useState } from "react";

const products = [
  { name: "Printed Cotton Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Blue Faux Leather", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Tribal Waterfall Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Braver Bomber Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Olive Drape Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Black Denim Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Army Green Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
];

const ProductTable = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="flex space-x-2 mb-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Active</button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded">Inactive</button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded">All</button>
        </div>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Select</th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Tags</th>
              <th className="p-2 border">Var</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Stock</th>
              <th className="p-2 border">Low</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">
                  <input
                    type="checkbox"
                    checked={selected.includes(index)}
                    onChange={() => toggleSelect(index)}
                  />
                </td>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">{product.tags.join(", ")}</td>
                <td className="p-2 border">{product.var}</td>
                <td className="p-2 border">{product.price}</td>
                <td className="p-2 border">{product.stock}</td>
                <td className="p-2 border">{product.low}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
