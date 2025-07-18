import Styled from 'styled-components'

export const HomeContentContainer = Styled.div`
  background-color: ${props => (props.darkTheme ? '#3c3d40' : '#ffffff')};
  flex-grow: 1;
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 300px) {
    padding-left: 4px;
    padding-right: 4px;
  }
  
`

export const HomeFilterButtonSM = Styled.button`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  border: 1px solid ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  background-color: transparent;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

`

export const FilterPopupContainer = Styled.div`
    background-color: ${props => (props.darkTheme ? '#202020' : '#ffffff')};
    width: 80vw;
    box-shadow: 0px 4px 16px 0px #c9c9c7;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  `

export const FilterPopupCloseButton = Styled.button`
    color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
    border: none;
    background-color: transparent;
    padding: 0px;
    font-size: 20px;
    cursor: pointer;
    align-self: flex-end;
  `

export const HomeProductsFilterContainer = Styled.div`
  background-color: ${props => (props.darkTheme ? '#202020' : '#f7faf8')};
  flex-shrink: 0;
  padding-left: 10%;
  padding-right: 5px;
  @media (max-width: 767px) {
    display: none;
  }
  
  @media (max-width: 300px) {
    padding-left: 4px; 
  }
  `

export const HomeContent = Styled.div`
  flex-grow: 1;
  padding-left: 20px;
  height: 90vh;
  overflow: auto;
  padding-right: 10%;

  @media (max-width: 767px) {
    padding-left: 0px;
  }
  
  @media (max-width: 300px) {
    padding-right: 4px; 
  }
`

export const ContentHeading = Styled.h2`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-weight: bold;
`

export const FailureHeading = Styled.h2`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const FailureDescription = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
