import React from 'react';
import './App.scss';
import ShoppingCartForm from "./components/ShoppingCartForm";
import DetailedShoppingList from "./components/DetailedShoppingList";
import BriefShoppingList from "./components/BriefShoppingList";

function App() {
  return (
    <div className="App">
        <div className="row">
            <div className="col-md-12"><ShoppingCartForm/></div>
        </div>
        <div className="row">
          <div className="col-md-9"><DetailedShoppingList/></div>
          <div className="col-md-3"><BriefShoppingList/></div>
        </div>
    </div>
  );
}

export default App;
