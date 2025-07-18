import Styled from 'styled-components'

export const ProductItemTitle = Styled.h5`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  width: 100%;

  @media (max-width: 767px){
    font-size: 13px;
    font-weight: 500;
  }
`
export const ProductItemPrice = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const ProductItemRating = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
