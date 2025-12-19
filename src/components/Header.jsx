import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <img src="https://cataas.com/cat" alt="Gato" width="50" />

      <nav>
        <Link to="/">NAVEGADOR</Link>

        <Link to="/chuck">CHUCK NORRIS</Link>

        <Link to="/sobre">SOBRE</Link>
      </nav>
    </header>
  )
}

export default Header
