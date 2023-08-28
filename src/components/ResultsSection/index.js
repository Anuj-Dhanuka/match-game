import './index.css'

const ResultsSection = props => {
  const {score, onClickingPlayAgain} = props

  const onClickingPlayAgainButton = () => {
    onClickingPlayAgain()
  }

  return (
    <div className="results-section-bg-container">
      <div className="results-inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image-style"
        />
        <p className="your-score-title">YOUR SCORE</p>
        <p className="your-score-title">{score}</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickingPlayAgainButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ResultsSection
