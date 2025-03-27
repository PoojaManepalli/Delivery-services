// src/components/StoreSelection.js
import React from "react";
import { Link } from "react-router-dom";

const StoreSelection = () => {
  const stores = [
    { id: 1, name: "Store 1" },
    { id: 2, name: "Store 2" },
    { id: 3, name: "Store 3" },
  ];

  return (
    <div className="store-selection">
      <h2>Select a Store</h2>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            <Link to={`/store/${store.id}`}>{store.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreSelection;