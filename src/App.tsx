import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { HomeCtxWrapper } from "./context/HomeContext";

function App() {
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
