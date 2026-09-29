import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      
      <nav style={{
        backgroundColor: "#222",
        padding: "15px"
      }}>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "25px",
            textDecoration: "none"
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            marginRight: "25px",
            textDecoration: "none"
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;