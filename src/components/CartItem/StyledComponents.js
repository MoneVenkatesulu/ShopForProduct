import Styled from 'styled-components'

export const Title = Styled.h4`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
    font-weight: 500;

  @media (max-width: 350px) {
    font-size: 13px;
  }

`
export const CartItemDescription = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  min-width: 70px;

  @media (max-width: 350px) {
    min-width: 54px;
    font-size: 13px;
    font-weight: 400;
  }
`

export const ItemCount = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-wieght: bold;
`
