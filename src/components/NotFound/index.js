import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-page-container">
    <img
      src="https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-15_135423_ht3hty.png"
      alt="not found"
      className="not-found-img"
    />
    <Link to="/" replace className="not-found-heading">
      Move to Home Page
    </Link>
  </div>
)

export default NotFound
