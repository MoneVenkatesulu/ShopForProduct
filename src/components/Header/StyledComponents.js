import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = Styled.div`
    background-color: ${props => (props.darkTheme ? '#202020' : '#f7faf8')};
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 10%;
    padding-right: 10%;    

    @media (max-width: 350px) {
      padding-left: 4px;
      padding-right: 4px; 
    }
`
export const CartIconLink = Styled(Link)`
  color: ${props => (props.darkTheme ? '#f7faf8' : '#7b7a77')};
  font-size: 36px;

  @media (max-width: 767px) {
    font-size: 23px;
  }
`

export const ThemeButton = Styled.button`
    color: ${props => (props.darkTheme ? '#f7faf8' : '#0712ad')};
    background-color: transparent;
    padding: 0px;
    border: none;
    font-size: 30px;

    @media (max-width: 767px) {
        font-size: 23px;
    }
`
