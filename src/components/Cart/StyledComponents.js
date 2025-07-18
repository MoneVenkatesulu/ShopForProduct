import Styled from 'styled-components'

export const CartContent = Styled.div`
  background-color: ${props => (props.darkTheme ? '#3c3d40' : '#ffffff')};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 15px;

  @media (max-width: 400px) {
    padding-top: 5px;
  }

  @media (max-width: 350px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`

export const NoProductsHeading = Styled.h2`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const NoProductsDescription = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const TotalAmountHeading = Styled.h3`
  color: ${props => (props.darkTheme ? '#ffffff' : '#202020')};
`

export const TotalAmountDescription = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#202020')};
  font-size: 20px;
`
