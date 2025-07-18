import Styled from 'styled-components'

export const FailureHeading = Styled.h2`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const FailureDescription = Styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
