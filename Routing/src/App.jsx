
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Link to="/">ALLEN </Link>
        <Link to="/Online-material/class-11th">Class 11 </Link>
        <Link to="/Online-material/class-12th">Class 12 </Link>

        <Routes>
          <Route path="/Online-material/class-11th" element={< Class11Program />} />
          <Route path="/Online-material/class-12th" element={< Class12Program />} />
          <Route path="/" element={< Landing />} />
          <Route path="/*" element={<ERROR />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

function Class12Program() {

  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      THIS IS MY CLASS 12 PAGE
      <button onClick={redirectUser}>go back to landing page</button>
    </div>
  )
}

function Class11Program() {
  return (
    <div>
      THIS IS MY class 11 page
    </div>
  )
}

function Landing() {
  return (
    <div>
      this is the landing page.
    </div>)
}

function ERROR() {
  return (
    <div>
      <h2> Sorry Page NOT found</h2>
    </div>
  )
}
export default App
