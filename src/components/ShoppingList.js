import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const valueUpdate = function (e) {
		setSelectedCategory(e.target.value);
	};

	const displayItem = items.filter((item) => {
		if (selectedCategory === "All") {
			return true;
		} else {
			return item.category === selectedCategory;
		}
	});

  return (
    <div className="ShoppingList">
      <div className="Filter">
      <select name="filter" onChange={valueUpdate}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
