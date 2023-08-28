import './index.css'

const Navbar = props => {
  const {score, time} = props
  return (
    <div className="nav-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo-image"
      />
      <div className="nav-score-time-container">
        <p className="nav-score">
          Score: <span className="nav-running-time">{score}</span>
        </p>
        <div className="nav-timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="nav-timer"
          />
          <p className="nav-running-time">{time} Sec</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
