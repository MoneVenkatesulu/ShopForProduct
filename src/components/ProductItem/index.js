import {useContext} from 'react'
import {Link} from 'react-router-dom'

import {IoStarHalfSharp} from 'react-icons/io5'

import ShopForProductContext from '../../context/ShopForProductContext'

import {
  ProductItemTitle,
  ProductItemPrice,
  ProductItemRating,
} from './StyledComponents'
import './index.css'

const ProductItem = props => {
  const {darkTheme} = useContext(ShopForProductContext)
  const {eachProduct} = props
  const {id, image, title, price, rating} = eachProduct
  const {rate} = rating

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="product-item-link">
        <img src={image} alt={title} className="product-img" />
        <ProductItemTitle darkTheme={darkTheme}>{title}</ProductItemTitle>
        <div className="price-rating-container">
          <ProductItemPrice darkTheme={darkTheme}>
            RS/-&nbsp;{price}
          </ProductItemPrice>
          <ProductItemRating darkTheme={darkTheme}>
            <IoStarHalfSharp className="star-icon" />
            {rate}
          </ProductItemRating>
        </div>
      </Link>
    </li>
  )
}

export default ProductItem
