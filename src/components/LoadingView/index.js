import {TailSpin} from 'react-loader-spinner'

import './index.css'

const LoadingView = () => (
  <div className="loader-container">
    <TailSpin width={60} height={60} color="teal" />
  </div>
)

export default LoadingView
