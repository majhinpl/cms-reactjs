import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/blog/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import SingleBlog from "./pages/blog/SingleBlog";
import EditBlog from "./pages/blog/EditBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs/create" element={<AddBlog />} />
          <Route path="/blogs/edit" element={<EditBlog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
