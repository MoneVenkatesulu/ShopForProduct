import Styled from 'styled-components'

export const FiltersHeading = Styled.h4`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  gap: 5px;
`

export const FilterLabels = Styled.label`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  padding-left: 5px;
`

export const ClearFiltersButton = Styled.button`
  background-color: ${props => (props.darkTheme ? '#ffffff' : 'transparent')};
  border: 1px solid #000000;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  cursor: pointer;
`
