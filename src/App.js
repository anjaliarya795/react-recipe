import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        
        <Search/>
        <Category/>
        <Pages/>

      </div>
    </BrowserRouter>

  );
}

export default App;
