import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function daysToHoursConverter(days) {
    return days * 24
  }

  return (
    <>
      <div className="card">
        <h2>Days to Hours Converter</h2>
        <p>Enter the number of days to convert to hours</p>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <p>
          {count} day(s) is equal to {daysToHoursConverter(count)} hour(s)
        </p>
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
