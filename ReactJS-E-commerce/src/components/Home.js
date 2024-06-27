import React from 'react'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../features/categorySlice';
import Categories from './CategoriesButton';


function Home() {
  const {data: products} = useSelector((state) => state.product);
  const categories = ['all', ...new Set(products.map(product => product.category))];
  const dispatch = useDispatch();

  const filterItems = (category) => {
    if(category === 'all') {
      dispatch(setCategory('all'));
    }
    dispatch(setCategory(category));
  }

  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-900 p-4">
    <div className='bg-gray-100 p-10 md-p-20'>
        <h1 className='text-2xl font-bold m-2 flex justify-center text-center'>Welcome to the store</h1>
        <div>
            <div className='w-full'>
              <Categories categories={categories} filterItems={filterItems}/>
            </div>
            <h2 className='text-2xl font-bold m-5' style={{color: '#9f2089'}}>Products</h2>
            <Products/>
        </div>
    </div>
    
  </div>
  <footer className="mt-10 p-4 bg-gray-200 text-center rounded-md">
    <p>&copy; 2024 DigitalStore. All rights reserved.</p>
    <p>Contact: support@digitalstore.com</p>
  </footer>
    </>
    
  )
}

export default Home