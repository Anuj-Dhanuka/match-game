import './index.css'

const TabItems = props => {
  const {tabsList, clickingTab, selectedTab} = props

  const {displayText, tabId} = tabsList

  const isSelectedTab = tabId === selectedTab

  const newClass = isSelectedTab ? 'tab-button-style' : ''

  const onClickingTabButton = () => {
    clickingTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-item-button ${newClass}`}
        onClick={onClickingTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
