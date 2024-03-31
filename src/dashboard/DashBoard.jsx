import React from 'react';
import "../dashboard/DashBoard.css";
import { Link, Outlet } from 'react-router-dom';

function DashBoard() {
  return (
    <div className='dashboard_container container row m-0 p-1'>
        
        <div className='col-lg-3 m-0 p-0'>
                    <Link  style={{display:"block"}} to="add-category">
                <h6 className='dashboard_items'>
                    Add Category
                    </h6>
                    </Link>
                <Link style={{display:"block"}} to="add-product">
                <h6 className='dashboard_items'>
                Add Product
                </h6>
                    </Link>
                {/* <Link style={{display:"block"}} to="add-latest-product">
                <h6 className='dashboard_items'>
                Add Latest Product
                </h6>
                    </Link> */}
                <Link style={{display:"block"}} to="order-history">
                <h6 className='dashboard_items'>
                View Order History
                    </h6>
                    </Link>
                <Link style={{display:"block"}} to="all-products">
                <h6 className='dashboard_items'>
                    All Products List
                    </h6>
                    </Link>
        </div>
        <div className='col-lg-9 m-0 p-0 ' style={{border:"1px solid black"}}>
            <h5 className='mt-3 mx-3'>Dashboard</h5>
            <hr />
            <div className=' d-flex justify-content-center w-100'>
            <Outlet />
            </div>
            
        </div>
    </div>
  )
}

export default DashBoard