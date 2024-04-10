import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold uppercase">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
          Base project
        </span>
      </h1>
    </div>
  )
}

export default App
