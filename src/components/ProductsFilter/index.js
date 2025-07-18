import {useContext} from 'react'

import {MdOutlineCategory} from 'react-icons/md'
import {FaSort} from 'react-icons/fa'
import {GrPowerReset} from 'react-icons/gr'

import ShopForProductContext from '../../context/ShopForProductContext'

import {
  FiltersHeading,
  FilterLabels,
  ClearFiltersButton,
} from './StyledComponents'
import './index.css'

const categoryList = [
  {
    id: 1,
    category: 'electronics',
    displayText: 'Electronics',
  },
  {
    id: 2,
    category: 'jewelery',
    displayText: 'Jewelery',
  },
  {
    id: 3,
    category: "men's clothing",
    displayText: "Men's clothing",
  },
  {
    id: 4,
    category: "women's clothing",
    displayText: "Women's clothing",
  },
]

const ProductsFilter = props => {
  const {darkTheme} = useContext(ShopForProductContext)

  const {
    updateCategoryList,
    sortProducts,
    resetFilters,
    selectedCategories,
    sortBy,
  } = props

  const onChangeCategory = category => {
    updateCategoryList(category)
  }
  const onChangeSortInput = event => {
    sortProducts(event.target.value)
  }
  const onClickResetFiltersButton = () => {
    resetFilters()
  }

  return (
    <div>
      <FiltersHeading darkTheme={darkTheme}>
        <MdOutlineCategory />
        Categories
      </FiltersHeading>
      <ul className="category-list">
        {categoryList.map(eachItem => (
          <li key={eachItem.id} className="filtering-items">
            <div>
              <input
                type="checkbox"
                id={`category-${eachItem.id}`}
                checked={selectedCategories.includes(eachItem.category)}
                onChange={() => onChangeCategory(eachItem.category)}
              />
              <FilterLabels
                htmlFor={`category-${eachItem.id}`}
                darkTheme={darkTheme}
              >
                {eachItem.displayText}
              </FilterLabels>
            </div>
          </li>
        ))}
      </ul>
      <FiltersHeading darkTheme={darkTheme}>
        <FaSort />
        Sort
      </FiltersHeading>
      <div className="filtering-items">
        <input
          type="radio"
          id="LOWTOHIGH"
          name="sort"
          value="PriceLowToHigh"
          checked={sortBy === 'PriceLowToHigh'}
          onChange={onChangeSortInput}
        />
        <FilterLabels htmlFor="LOWTOHIGH" darkTheme={darkTheme}>
          Low {'-->'} High
        </FilterLabels>
      </div>
      <div className="filtering-items">
        <input
          type="radio"
          id="HIGHTOLOW"
          name="sort"
          value="PriceHighToLow"
          checked={sortBy === 'PriceHighToLow'}
          onChange={onChangeSortInput}
        />
        <FilterLabels htmlFor="HIGHTOLOW" darkTheme={darkTheme}>
          High {'-->'} Low
        </FilterLabels>
      </div>
      <div className="filtering-items">
        <input
          type="radio"
          id="RATING"
          name="sort"
          value="RatingHighToLow"
          checked={sortBy === 'RatingHighToLow'}
          onChange={onChangeSortInput}
        />
        <FilterLabels htmlFor="RATING" darkTheme={darkTheme}>
          Rating: High {'-->'} Low
        </FilterLabels>
      </div>
      <ClearFiltersButton
        type="button"
        onClick={onClickResetFiltersButton}
        darkTheme={darkTheme}
      >
        <GrPowerReset />
        Reset All
      </ClearFiltersButton>
    </div>
  )
}

export default ProductsFilter
