import { useEffect, useState } from "react"

function ChuckNorris() {
  const [joke, setJoke] = useState(null)

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data))
  }, [])

  if (!joke) {
    return null;
  }

  return (
    <div className="card">
      <img
        src={joke.icon_url}
        alt="Chuck Norris"
        style={{ display: "block", margin: "0 auto" }}
      />

      <p style={{ fontWeight: "bold", marginTop: "15px" }}>{joke.value}</p>
    </div>
  )
}

export default ChuckNorris
