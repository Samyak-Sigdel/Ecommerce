import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cros.jpg'

export const ListProduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo =async ()=> {
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct_format_main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <div key={index} className="listproduct-format-main listproduct-format" >
              <img src={product.image} alt="" className="listproduct-producticon" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img src={cross_icon} alt="" className="listproduct-remove-icon" />

          </div>
        })}

      </div>

      
      
       </div>
  )
}
