import { useEffect, useState } from "react"

function BrowserInfo() {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const userAgent = encodeURIComponent(navigator.userAgent)

    fetch(`https://api.apicagent.com/?ua=${userAgent}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data)
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error)
      })
  }, [])

  if (!info) {
    return null;
  }

  return (
    <div className="card">
      <h2>Informações do Navegador</h2>

      <p>
        <strong>Browser Family:</strong> {info.browser_family}
      </p>
      <p>
        <strong>Version:</strong> {info.client.version}
      </p>
      <p>
        <strong>Brand:</strong> {info.device.brand}
      </p>
      <p>
        <strong>Type:</strong> {info.client.type}
      </p>
      <p>
        <strong>OS Family:</strong> {info.os_family}
      </p>
    </div>
  )
}

export default BrowserInfo
