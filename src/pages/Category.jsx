import React from 'react'
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { ProductData } from '../json/ProductData';


export const Category = () => {
    const {categoryId} = useParams();


const filter = ProductData.filter((item) => item.categories === categoryId);

  return (
  <ItemListContainer ProductData={filter}/>
  )
}
export default Category