import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemsData from "../data/items"; // or wherever your initial data is

function App() {
  const [items, setItems] = useState(itemsData); // or []
  const [searchText, setSearchText] = useState("");

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter search={searchText} onSearchChange={setSearchText} />
      <ul>
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
