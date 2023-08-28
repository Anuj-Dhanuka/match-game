import {Component} from 'react'
import Navbar from '../Navbar'
import TabItems from '../TabItems'
import ImageItems from '../ImageItems'
import ResultsSection from '../ResultsSection'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      time: 60,
      selectedTab: 'FRUIT',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      imageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    }
  }

  componentDidMount() {
    const {time} = this.state
    if (time > 0) {
      this.timerID = setInterval(this.tick, 1000)
    } else {
      clearInterval(this.timerID)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    const {time} = this.state
    if (time > 0) {
      this.setState(prevState => ({
        time: prevState.time - 1,
      }))
    }
  }

  clickingTab = tabId => {
    this.setState({selectedTab: tabId})
  }

  onClickingPlayAgain = () => {
    this.setState({
      time: 60,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      imageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      score: 0,
    })
  }

  onClickingThumbnail = (imagesList, id) => {
    const {imageId} = this.state
    if (id === imageId) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({time: 0})
    }
    const imageListLength = imagesList.length
    const randomImageNum =
      imagesList[Math.floor(Math.random() * imageListLength)]
    const randomImageUrl = randomImageNum.imageUrl
    const randomImageId = randomImageNum.id
    this.setState({imageUrl: randomImageUrl, imageId: randomImageId})
  }

  render() {
    const {score, selectedTab, imageUrl, time} = this.state
    const {tabsList, imagesList} = this.props

    const filteredImageList = imagesList.filter(
      each => each.category === selectedTab,
    )

    return (
      <ul className="main-ul-container">
        <li>
          <Navbar score={score} time={time} />
        </li>
        <li>
          {time <= 0 && (
            <ResultsSection
              score={score}
              onClickingPlayAgain={this.onClickingPlayAgain}
            />
          )}
        </li>

        {time > 0 && (
          <div className="match-game-bg-container">
            <img src={imageUrl} alt="match" className="given-image" />
            <li>
              <ul className="tab-list-ul-container">
                {tabsList.map(each => (
                  <TabItems
                    tabsList={each}
                    key={each.tabId}
                    clickingTab={this.clickingTab}
                    selectedTab={selectedTab}
                  />
                ))}
              </ul>
            </li>

            <ul className="image-items-ul-container">
              {filteredImageList.map(each => (
                <ImageItems
                  eachImagesList={each}
                  key={each.id}
                  imagesList={imagesList}
                  onClickingThumbnail={this.onClickingThumbnail}
                />
              ))}
            </ul>
          </div>
        )}
      </ul>
    )
  }
}

export default MatchGame
