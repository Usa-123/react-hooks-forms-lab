// src/components/ItemForm.js
import React from "react";

function ItemForm({ onItemFormSubmit }) {
  return (
    <form onSubmit={onItemFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="category">Category:</label>
      <select id="category" name="category">
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ItemForm;
