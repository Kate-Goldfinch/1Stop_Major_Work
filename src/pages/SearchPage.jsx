import React, {useState, useEffect}  from 'react'
import ProductList from '../components/ProductList'
import api from '../api/services'
import {useLocation} from "react-router-dom";
import useSearch from '../hooks/useSearch'
import Stack from 'react-bootstrap/Stack'
import OptionDropdown from '../components/OptionDropdown';

const SearchPage = () => {
  const search = useSearch();

  const {query} = useLocation().state
  const sortOptionsArray = ['Low to High', 'High to Low']

  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState(sortOptionsArray[0]);

    useEffect(() => {
      let params = {query, sort: sortOption}
      api.searchProducts(params)
      .then(response =>{
        setProducts(response)
      })
    }, [query, sortOption])

  return (
    <>
    {`${products.length} results for "${query}"`}
      <Stack direction="horizontal" gap={3}>
          Sort by: 
          <OptionDropdown 
            optionsArray={sortOptionsArray}  
            optionProp={[sortOption, setSortOption]}
          />
      </Stack>
      <ProductList products = {products}/>
    </>
  )
}

export default SearchPage