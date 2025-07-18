import {useContext} from 'react'

import ShopForProductContext from '../../context/ShopForProductContext'

import {FailureHeading, FailureDescription} from './StyledComponents'
import './index.css'

const FetchFailureView = props => {
  const {darkTheme} = useContext(ShopForProductContext)

  const {onClickRetryButton} = props

  return (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-13_200343_xnhdcg.png"
        alt="failure view"
        className="failure-img"
      />
      <FailureHeading darkTheme={darkTheme}>
        Something went wrong
      </FailureHeading>
      <FailureDescription darkTheme={darkTheme}>
        We couldn&#39;t fetch the data. Please check your internet connection or
        try again.
      </FailureDescription>
      <button
        type="button"
        className="failure-retry-button"
        onClick={onClickRetryButton}
      >
        Retry
      </button>
    </div>
  )
}

export default FetchFailureView
