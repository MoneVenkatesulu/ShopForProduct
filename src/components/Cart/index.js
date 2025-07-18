import {useContext} from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import Header from '../Header'
import ShopForProductContext from '../../context/ShopForProductContext'
import CartItem from '../CartItem'

import {
  CartContent,
  TotalAmountHeading,
  TotalAmountDescription,
  NoProductsHeading,
  NoProductsDescription,
} from './StyledComponents'
import './index.css'

const Cart = () => {
  const {darkTheme, cartList, updateCartList} = useContext(
    ShopForProductContext,
  )

  const onClickRemoveAllItems = () => {
    updateCartList()
  }

  let totalAmount = 0
  cartList.forEach(eachItem => {
    totalAmount += eachItem.itemCount * eachItem.price
  })

  const emptyCartView = () => (
    <div className="empty-cart-container">
      <img
        src="https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-13_200451_akfe4m.png"
        alt="empty cart"
        className="empty-cart-img"
      />
      <NoProductsHeading darkTheme={darkTheme}>
        No Products Added
      </NoProductsHeading>
      <NoProductsDescription darkTheme={darkTheme}>
        No Products added yet! Please add produts.
      </NoProductsDescription>
    </div>
  )

  return (
    <div className="cart-container">
      <Header />
      <CartContent darkTheme={darkTheme}>
        <button
          type="button"
          className="cart-clear-button"
          onClick={onClickRemoveAllItems}
          disabled={cartList.length === 0}
        >
          Remove All
        </button>
        <ul className="cart-list">
          {cartList.length === 0
            ? emptyCartView()
            : cartList.map(eachItem => (
                <CartItem key={eachItem.id} eachProduct={eachItem} />
              ))}
        </ul>
        <div className="orders-placing-container">
          <div>
            <TotalAmountHeading darkTheme={darkTheme}>
              Total Amount
            </TotalAmountHeading>
            <TotalAmountDescription darkTheme={darkTheme}>
              {parseFloat(totalAmount.toFixed(2))} /-
            </TotalAmountDescription>
          </div>
          <Popup
            trigger={
              <button type="button" className="popup-orders-placing-button">
                Place Order
              </button>
            }
            modal
          >
            {close => (
              <div className="orders-placing-popup">
                <div className="orders-placing-popup-inner-container">
                  <img
                    src="https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-18_080049_umfakm.png"
                    alt="order-placed"
                    className="order-placed-img"
                  />
                  <h2 className="orders-placing-popup-heading">Order Placed</h2>
                  <div className="pop-close-container">
                    <Link to="/">
                      <button type="button" className="pop-close-buttons">
                        Move to Home Page
                      </button>
                    </Link>
                    <button
                      type="button"
                      onClick={close}
                      className="pop-close-buttons"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </CartContent>
    </div>
  )
}

export default Cart
