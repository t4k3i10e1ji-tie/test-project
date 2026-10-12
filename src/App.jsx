import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
