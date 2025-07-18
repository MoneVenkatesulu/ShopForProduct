import {useContext} from 'react'

import ShopForProductContext from '../../context/ShopForProductContext'

import LazyLoadingContainer from './StyledComponents'

const LazyLoadingView = () => {
  const {darkTheme} = useContext(ShopForProductContext)
  return (
    <LazyLoadingContainer darkTheme={darkTheme}>
      <h2>Loading...</h2>
    </LazyLoadingContainer>
  )
}

export default LazyLoadingView
