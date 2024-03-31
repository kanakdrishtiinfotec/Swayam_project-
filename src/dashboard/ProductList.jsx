import React, { useEffect, useState } from 'react'
import "../dashboard/ProductList.css"

function ProductList() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    }, []);


  return (
    <div className='group m-0 p-0'>
        <ul className='list p-3' style={{listStyle:"none"}}>
            {
                product.map((item)=>{
                    return (
                        <li className='border p-1 d-flex justify-content-between'> <span className='col-5' >{item.name}</span>  <span><i class="icofont-edit" style={{color:"green"}}></i></span> <span><i class="icofont-delete-alt" style={{color:"red"}}></i></span></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ProductList