import React from "react";
import items from "../db/items";

function AllProducts() {
  return (
    <>
      <div>All Products</div>
      {items.map((el, i) => (
        <p>
          {i + 1}. {el}
        </p>
      ))}
    </>
  );
}

export default AllProducts;
