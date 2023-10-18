import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Categories from "./pages/Categories";
import MyStuff from "./pages/MyStuff";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvshows' element={<TV />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/mystuff' element={<MyStuff />} />
      </Routes>
    </>
  );
}

export default App;