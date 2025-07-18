import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {IoSunnySharp} from 'react-icons/io5'
import {FaMoon, FaCartPlus} from 'react-icons/fa'
import {SiShopify} from 'react-icons/si'

import ShopForProductContext from '../../context/ShopForProductContext'

import {HeaderContainer, CartIconLink, ThemeButton} from './StyledComponents'
import './index.css'

const Header = props => {
  const {cartList, darkTheme, changeTheme} = useContext(ShopForProductContext)

  const onClickThemeButton = () => {
    changeTheme()
  }

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('loginCredentials')
    history.replace('/login')
  }

  return (
    <HeaderContainer className="header-container" darkTheme={darkTheme}>
      <Link to="/" className="header-website-link">
        <h1 className="header-logo">ShopForProduct</h1>
        <SiShopify className="header-icon" />
      </Link>
      <div className="header-button-container">
        <div className="cart-icon-count-container">
          <CartIconLink to="/productscart" darkTheme={darkTheme}>
            <FaCartPlus />
          </CartIconLink>
          <span className="cart-items-count">{cartList.length}</span>
        </div>
        <ThemeButton
          type="button"
          onClick={onClickThemeButton}
          darkTheme={darkTheme}
        >
          {darkTheme ? <IoSunnySharp /> : <FaMoon />}
        </ThemeButton>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </HeaderContainer>
  )
}

export default withRouter(Header)
