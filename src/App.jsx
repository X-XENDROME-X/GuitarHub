import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Chords from "./pages/Chords";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Discussion from "./pages/Discussion";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/chords" element={<Chords />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/discussion" element={<Discussion />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;