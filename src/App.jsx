import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import BrowserInfo from "./pages/BrowserInfo"
import ChuckNorris from "./pages/ChuckNorris"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BrowserInfo />} />
          <Route path="/chuck" element={<ChuckNorris />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
