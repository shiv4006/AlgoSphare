import { Route, Routes } from "react-router-dom"
import LogIn from "./components/LogIn/LogIn"
import Navbar from "./components/Navbar/Navbar"
import SignUp from "./components/SignUp/SignUp"
import Home from "./pages/Home/Home"
import Cp from "./pages/CP/Cp"
import Dsa from "./pages/DSA/DSA"
import Interview from "./pages/Interview/Interview"
import Algorithm from "./pages/Algorithm/Algorithm"
import Footer from "./components/Footer/Footer"
import { useContext } from "react"
import { ThemeContext } from "."
import Profile from "./pages/Profile/Profile"
import Notes from "./pages/Notes/Notes"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import TermAndConditions from "./pages/TermAndConditions/TermAndConditions"

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`flex flex-col ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black"} z-[-10]`}>
        <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cp" element={<Cp />} />
          <Route path="/dsa" element={<Dsa />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/algorithm" element={<Algorithm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/t&c" element={<TermAndConditions />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
