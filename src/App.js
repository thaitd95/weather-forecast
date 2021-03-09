import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import ForecastList from "./app/containers/ForecatList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ForecastList />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
