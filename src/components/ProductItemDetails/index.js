import {useContext, useState, useCallback, useEffect} from 'react'

import {IoStarHalfSharp} from 'react-icons/io5'
import {FaDollarSign} from 'react-icons/fa'

import Header from '../Header'
import ShopForProductContext from '../../context/ShopForProductContext'
import FetchFailureView from '../FetchFailureView'
import LoadingView from '../LoadingView'

import {
  ProductContainer,
  ProductTitle,
  ProductDescription,
  ItemCount,
} from './StyledComponents'
import './index.css'

const ProductItemDetails = props => {
  const {darkTheme, fetchingStatusConstants, updateCartList} = useContext(
    ShopForProductContext,
  )
  const [productDetials, setProduct] = useState({})
  const [fetchStatus, setFetchStatus] = useState(
    fetchingStatusConstants.inProgress,
  )
  const [itemCount, setItemCount] = useState(1)

  const getProductData = useCallback(async () => {
    setFetchStatus(fetchingStatusConstants.inProgress)
    const {match} = props
    const {params} = match
    const {id} = params

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      if (!response.ok) throw new Error('Fetch failed')
      const fetchedProduct = await response.json()
      setProduct(fetchedProduct)
      setFetchStatus(fetchingStatusConstants.success)
    } catch (error) {
      setFetchStatus(fetchingStatusConstants.failure)
    }
  }, [props, setProduct, fetchingStatusConstants])

  useEffect(() => {
    getProductData()
  }, [getProductData])

  const onClickRetryButton = () => {
    getProductData()
  }

  const onClickDecrement = () => {
    setItemCount(prevCount => prevCount - 1)
  }

  const onClickIncrement = () => {
    setItemCount(prevCount => prevCount + 1)
  }

  const renderFetchedData = () => {
    const {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    } = productDetials
    const {rate, count} = rating

    const onClicItemsAddtoCart = () => {
      const productDetails = {id, title, price, image, itemCount}
      updateCartList(productDetails)
      setItemCount(1)
    }

    return (
      <ProductContainer darkTheme={darkTheme}>
        <img src={image} alt={title} className="product-details-img" />
        <div>
          <ProductTitle darkTheme={darkTheme}>{title}</ProductTitle>
          <ProductDescription darkTheme={darkTheme}>
            {description}
          </ProductDescription>
          <ProductDescription darkTheme={darkTheme}>
            <p className="category-heading">Category &nbsp; : &nbsp;</p>
            {category}
          </ProductDescription>
          <ProductDescription darkTheme={darkTheme}>
            <FaDollarSign className="product-details-icons" />
            {price}
          </ProductDescription>
          <ProductDescription darkTheme={darkTheme}>
            <IoStarHalfSharp className="product-details-icons" />
            {`${rate} / ${count}`}
          </ProductDescription>
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
              disabled={itemCount === 10}
            >
              +
            </button>
          </div>
          {itemCount === 10 && (
            <p className="items-limit-msg">
              *Max limit reached, you cann&#39;t add more than 10 prodcuts at a
              time.
            </p>
          )}
          <button
            type="button"
            className="add-cart-button"
            onClick={onClicItemsAddtoCart}
          >
            Add Cart
          </button>
        </div>
      </ProductContainer>
    )
  }

  const renderResponsiveView = () => {
    switch (fetchStatus) {
      case fetchingStatusConstants.success:
        return renderFetchedData()
      case fetchingStatusConstants.failure:
        return <FetchFailureView onClickRetryButton={onClickRetryButton} />
      case fetchingStatusConstants.inProgress:
        return <LoadingView />
      default:
        return null
    }
  }

  return (
    <div className="product-main-container">
      <Header />
      <div className="product-details-contianer">{renderResponsiveView()}</div>
    </div>
  )
}

export default ProductItemDetails
