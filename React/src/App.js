import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CityCookie from "./citycookie";
import CookieTime from "./citycookietime";
import Categories from "./Category";
import Dishes from "./dish";
function App() {
  return (
    <div className="App">
      <CityCookie />
      <CookieTime />
      <Categories />
      <Dishes />
    </div>
  );
}

export default App;
