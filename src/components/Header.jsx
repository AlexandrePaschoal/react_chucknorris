import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <img src="https://cataas.com/cat" alt="Gato" width="50" />

      <nav>
        <Link to="/">Navegador</Link>
        
        <Link to="/chuck">Chuck Norris</Link>
        
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  )
}

export default Header
