import React, {useState, useEffect}  from 'react'
import ProductList from './ProductsPage'
import OptionDropdown from '../components/OptionDropdown';
import api from '../api/services'
import {useLocation} from "react-router-dom";
import useSearch from '../hooks/useSearch'
import {Stack, Container} from 'react-bootstrap'


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

		<Container style={{'backgroundColor': 'white'}} className="p-4">
    {`${products.length} results for "${query}"`}
      <Stack direction="horizontal" gap={3}>
          Sort by: 
          <OptionDropdown 
            optionsArray={sortOptionsArray}  
            optionProp={[sortOption, setSortOption]}
          />
      </Stack>
      <ProductList products = {products}/>
    </Container>
  )
}

export default SearchPage