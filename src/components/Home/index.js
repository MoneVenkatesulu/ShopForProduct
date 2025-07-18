import {useContext, useState, useEffect, useMemo, useCallback} from 'react'

import Popup from 'reactjs-popup'
import {MdCloseFullscreen} from 'react-icons/md'

import Header from '../Header'
import ShopForProductContext from '../../context/ShopForProductContext'
import ProductItem from '../ProductItem'
import ProductsFilter from '../ProductsFilter'

import FetchFailureView from '../FetchFailureView'
import LoadingView from '../LoadingView'

import {
  HomeContentContainer,
  HomeFilterButtonSM,
  FilterPopupContainer,
  FilterPopupCloseButton,
  HomeProductsFilterContainer,
  HomeContent,
  ContentHeading,
  FailureHeading,
  FailureDescription,
} from './StyledComponents'
import './index.css'

const Home = () => {
  const {darkTheme, fetchingStatusConstants} = useContext(ShopForProductContext)
  const [productsList, setProductsList] = useState([])
  const [fetchStatus, setFetchStatus] = useState(
    fetchingStatusConstants.inProgress,
  )
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortBy, setSortBy] = useState('')

  const getProductsData = useCallback(async () => {
    setFetchStatus(fetchingStatusConstants.inProgress)
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (!response.ok) throw new Error('Fetch failed')
      const fetchedList = await response.json()
      setProductsList(fetchedList)
      setFetchStatus(fetchingStatusConstants.success)
    } catch (error) {
      setFetchStatus(fetchingStatusConstants.failure)
    }
  }, [fetchingStatusConstants])

  useEffect(() => {
    getProductsData()
  }, [getProductsData])

  const onClickRetryButton = () => {
    getProductsData()
  }

  const updateCategoryList = useCallback(category => {
    setSelectedCategories(prevState => {
      if (prevState.includes(category)) {
        return prevState.filter(eachItem => eachItem !== category)
      }
      return [...prevState, category]
    })
  }, [])

  const sortProducts = useCallback(sortValue => {
    setSortBy(sortValue)
  }, [])

  const resetFilters = () => {
    setSelectedCategories([])
    setSortBy('')
  }

  const processedProducts = useMemo(() => {
    let updatedProducts = [...productsList]

    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter(eachItem =>
        selectedCategories.includes(eachItem.category),
      )
    }

    switch (sortBy) {
      case 'PriceLowToHigh':
        updatedProducts.sort((a, b) => a.price - b.price)
        break
      case 'PriceHighToLow':
        updatedProducts.sort((a, b) => b.price - a.price)
        break
      case 'RatingHighToLow':
        updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate)
        break
      default:
        break
    }

    return updatedProducts
  }, [productsList, selectedCategories, sortBy])

  const filtersComponent = () => (
    <ProductsFilter
      selectedCategories={selectedCategories}
      sortBy={sortBy}
      updateCategoryList={updateCategoryList}
      sortProducts={sortProducts}
      resetFilters={resetFilters}
    />
  )

  const renderFetchedData = () => {
    if (processedProducts.length === 0) {
      return (
        <div className="failure-container">
          <img
            src="https://res.cloudinary.com/dmlk7cxkm/image/upload/Screenshot_2025-07-13_200451_akfe4m.png"
            alt="No products"
            className="failure-img"
          />
          <FailureHeading darkTheme={darkTheme}>
            No Products Found
          </FailureHeading>
          <FailureDescription darkTheme={darkTheme}>
            Products not found. Please reset filters.
          </FailureDescription>
        </div>
      )
    }
    return (
      <ul className="products-list">
        {processedProducts.map(eachItem => (
          <ProductItem key={eachItem.id} eachProduct={eachItem} />
        ))}
      </ul>
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
    <div className="window-container">
      <Header />
      <HomeContentContainer darkTheme={darkTheme}>
        <Popup trigger={<HomeFilterButtonSM>Filters</HomeFilterButtonSM>} modal>
          {close => (
            <FilterPopupContainer darkTheme={darkTheme}>
              <FilterPopupCloseButton
                type="button"
                onClick={close}
                darkTheme={darkTheme}
              >
                <MdCloseFullscreen />
              </FilterPopupCloseButton>
              {filtersComponent()}
            </FilterPopupContainer>
          )}
        </Popup>
        <HomeProductsFilterContainer darkTheme={darkTheme}>
          {filtersComponent()}
        </HomeProductsFilterContainer>
        <HomeContent darkTheme={darkTheme}>
          <ContentHeading darkTheme={darkTheme}>Products</ContentHeading>
          {renderResponsiveView()}
        </HomeContent>
      </HomeContentContainer>
    </div>
  )
}
export default Home
