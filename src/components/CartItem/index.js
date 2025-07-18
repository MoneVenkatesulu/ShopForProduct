import {useContext} from 'react'

import ShopForProductContext from '../../context/ShopForProductContext'

import {Title, CartItemDescription, ItemCount} from './StyledComponents'
import './index.css'

const CartItem = props => {
  const {darkTheme, updateCartList} = useContext(ShopForProductContext)
  const {eachProduct} = props
  const {id, title, price, image, itemCount} = eachProduct

  const onClickRemoveItem = () => {
    updateCartList({removeId: id})
  }

  const onClickDecrement = () => {
    const productDetails = {id, decrementItemBy1: 1}
    updateCartList(productDetails)
  }

  const onClickIncrement = () => {
    const productDetails = {id, incrementItemBy1: 1}
    updateCartList(productDetails)
  }

  return (
    <li className="cart-item">
      <div className="image-title-container">
        <img src={image} alt="title" className="cart-item-img" />
        <div className="title-quantity-container">
          <Title darkTheme={darkTheme}>{title}</Title>
          <CartItemDescription darkTheme={darkTheme}>
            <span className="cart-item-quantity">Quantity &nbsp; : &nbsp;</span>
            <span>{itemCount}</span>
          </CartItemDescription>

          <div className="increment-decrement-buttons-container">
            <button
              type="button"
              className="increment-decrement-buttons"
              onClick={onClickDecrement}
              disabled={itemCount === 1}
            >
              -
            </button>
            <ItemCount darkTheme={darkTheme}>{itemCount}</ItemCount>
            <button
              type="button"
              className="increment-decrement-buttons"
              onClick={onClickIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <CartItemDescription darkTheme={darkTheme}>
          {`${price * itemCount} /-`}
        </CartItemDescription>
        <button
          type="button"
          className="cart-item-remove-button"
          onClick={onClickRemoveItem}
        >
          remove
        </button>
      </div>
    </li>
  )
}

export default CartItem
