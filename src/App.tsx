import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { HomeCtxWrapper } from "./context/HomeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HomeCtxWrapper>
        <Home />
      </HomeCtxWrapper>
    </div>
  );
}

export default App;
