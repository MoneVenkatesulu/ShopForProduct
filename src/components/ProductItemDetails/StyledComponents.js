import Styled from 'styled-components'

export const ProductContainer = Styled.div`
  background-color: ${props => (props.darkTheme ? '#3c3d40' : '#ffffff')};
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
    padding-top: 20px;
  }
  
  @media (max-width: 300px) {
    padding-left: 4px;
    padding-right: 4px;
  }
    
`

export const ProductTitle = Styled.h5`
  color: ${props => (props.darkTheme ? '#f7faf8' : '#202020')};
    
`

export const ProductDescription = Styled.p`
  color: ${props => (props.darkTheme ? '#f7faf8' : '#202020')};
  max-width: 300px;
  display: flex;
  align-items: center;
`

export const ItemCount = Styled.p`
  color: ${props => (props.darkTheme ? '#f7faf8' : '#202020')};
  font-weight: bold;
  font-size: 20px;
`
