import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaTruckArrowRight } from "react-icons/fa6";

const Feature = () => {
  return (
    <div>
      <>
  {/* Featurs Section Start */}
  <div className="container-fluid featurs py-5">
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="featurs-item text-center rounded bg-light p-4">
            <div className="featurs-icon btn-square rounded-circle p-5 bg-warning mb-5 mx-auto">
            
            <FaTruckArrowRight style={{fontSize:'60px'}} />
            </div>
            <div className="featurs-content text-center">
              <h5>Free Shipping</h5>
              <p className="mb-0">Order Above 25000</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="featurs-item text-center rounded bg-light p-4">
            <div className="featurs-icon btn-square  rounded-circle p-5 bg-warning  mb-5 mx-auto">
          
            <RiSecurePaymentLine  style={{fontSize:'60px'}}/>
            </div>
            <div className="featurs-content text-center">
              <h5>Protection </h5>
              <p className="mb-0">Purchase Protection</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="featurs-item text-center rounded bg-light p-4">
            <div className="featurs-icon btn-square  rounded-circle p-5 bg-warning  mb-5 mx-auto">
            <FaArrowRightArrowLeft style={{fontSize:'60px'}} />
            </div>
            <div className="featurs-content text-center">
              <h5> Sample </h5>
              <p className="mb-0">Sample Available</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="featurs-item text-center rounded bg-light p-4">
            <div className="featurs-icon btn-square  rounded-circle p-5 bg-warning mb-5 mx-auto">
          
            <IoMdCall style={{fontSize:'60px'}}/>
            </div>
            <div className="featurs-content text-center">
              <h5>24/7 Support</h5>
              <p className="mb-0">Support every time fast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Featurs Section End */}
</>

    </div>
  )
}

export default Feature
