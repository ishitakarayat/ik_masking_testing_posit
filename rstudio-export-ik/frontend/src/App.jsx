import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  const fetchMsg = async () => {
    const res = await fetch(`/api/hello/${name}`)
    const data = await res.json()
    setMsg(data.message)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>React + FastAPI Demo</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name"/>
      <button onClick={fetchMsg}>Say Hello</button>
      <p>{msg}</p>
    </div>
  )
}

