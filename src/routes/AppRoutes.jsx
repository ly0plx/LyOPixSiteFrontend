// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogPage from "../pages/BlogPage";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/blog/firstpost"
        element={
          <BlogPage
            details={{
              image: "https://picsum.photos/300/200",
              title: "First Post",
              content:
                "What's Up, y'all? \n My name's Tanner Ordonez, and I'm the founder of LyOPix Coding. If you ever have anything you thing i could help you with, I'm open to suggestions!",
              author: "Tanner Ordonez",
              date: new Date().toLocaleDateString(),
            }}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
