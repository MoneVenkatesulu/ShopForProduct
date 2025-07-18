import {Suspense, lazy, useState, useEffect, useCallback} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ShopForProductContext from './context/ShopForProductContext'
import ProtectedRoute from './components/ProtectedRoute'
import LazyLoadingView from './components/LazyLoadingView'

import './App.css'

const Login = lazy(() => import('./components/Login'))
const Home = lazy(() => import('./components/Home'))
const ProductItemDetails = lazy(() => import('./components/ProductItemDetails'))
const NotFound = lazy(() => import('./components/NotFound'))
const Cart = lazy(() => import('./components/Cart'))

const constantsObject = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [fetchingStatusConstants] = useState(constantsObject)
  const [cartList, setCartList] = useState([])

  useEffect(() => {
    document.title = 'Shop for Products | E-commerce Platform'
  }, [])

  useEffect(() => {
    const list = localStorage.getItem('cartList')
    setCartList(list ? JSON.parse(list) : [])
  }, [])

  const changeTheme = () => {
    setDarkTheme(prevTheme => !prevTheme)
  }

  const updateCartList = useCallback(productDetails => {
    let newList = []
    setCartList(prevList => {
      if (productDetails === undefined) {
        newList = []
      } else if (productDetails.removeId) {
        newList = prevList.filter(
          eachItem => eachItem.id !== productDetails.removeId,
        )
      } else {
        const isContain = prevList.find(
          eachItem => eachItem.id === productDetails.id,
        )
        if (isContain) {
          if (productDetails.decrementItemBy1) {
            newList = prevList.map(eachItem => {
              if (eachItem.id === productDetails.id) {
                const itemCount =
                  eachItem.itemCount - productDetails.decrementItemBy1
                return {...eachItem, itemCount}
              }
              return {...eachItem}
            })
          } else if (productDetails.incrementItemBy1) {
            newList = prevList.map(eachItem => {
              if (eachItem.id === productDetails.id) {
                const itemCount =
                  eachItem.itemCount + productDetails.incrementItemBy1
                return {...eachItem, itemCount}
              }
              return {...eachItem}
            })
          } else {
            newList = prevList.map(eachItem => {
              if (eachItem.id === productDetails.id) {
                const itemCount = eachItem.itemCount + productDetails.itemCount
                return {...eachItem, itemCount}
              }
              return {...eachItem}
            })
          }
        } else {
          newList = [...prevList, productDetails]
        }
      }
      localStorage.setItem('cartList', JSON.stringify(newList))
      return newList
    })
  }, [])

  return (
    <ShopForProductContext.Provider
      value={{
        fetchingStatusConstants,
        darkTheme,
        cartList,
        changeTheme,
        updateCartList,
      }}
    >
      <Suspense fallback={<LazyLoadingView />}>
        <Switch>
          <Route exact path="/login" component={Login} />

          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/productscart" component={Cart} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />

          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </ShopForProductContext.Provider>
  )
}

export default App
