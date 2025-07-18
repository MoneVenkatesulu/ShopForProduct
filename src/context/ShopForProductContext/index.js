import React from 'react'

const ShopForProductContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  fetchingStatusConstants: {},
  cartList: [],
  updateCartList: () => {},
})

export default ShopForProductContext
