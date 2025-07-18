import Styled from 'styled-components'

const LazyLoadingContainer = Styled.div`
  background-color: ${props => (props.darkTheme ? '#000000' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
`

export default LazyLoadingContainer
