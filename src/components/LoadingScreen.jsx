import { useEffect, useState } from 'react'

function LoadingScreen() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPercent((current) => Math.min(current + 12, 100))
    }, 140)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-frame">
        <p className="loading-kicker">Portfolio</p>
        <h1>Prashanna Maharjan</h1>
        <div className="loading-bar" aria-label="Loading portfolio">
          <span style={{ width: `${percent}%` }} />
        </div>
        <div className="loading-meta">
          <span>Frontend Developer x Photographer x Videographer</span>
          <span>{percent}%</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
