
import React from "react";
import './../styles/App.css';
import Autocomplete from "./Autocomplete";

const App = () => {
  return (
    <div className="App">
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <Autocomplete></Autocomplete>
    </div>
  )
}

export default App;
