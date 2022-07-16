import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Item from "./Item";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isClicked ? "App dark" : "App light";
  const mode = isClicked ? "LightMode" : "DarkMode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode}</button>
      </header>
      <ShoppingList items={ itemData } />
      <Item/>
    </div>
  );
}

export default App;
