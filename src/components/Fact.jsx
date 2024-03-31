import React from 'react';
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa";

const Fact = () => {
  return (
    <div>
        <>
  {/* Fact Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="bg-light p-5 rounded">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter bg-white rounded p-3">
            <center><FaUsers style={{fontSize:'70px',color:'orange'}} />
              <h3>Satisfied Customers</h3>
              <h2><CountUp end={16000} duration={5} />+</h2></center>  
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter bg-white rounded p-3">  
             <center> <FaUsers style={{fontSize:'70px',color:'orange'}}/>
              <h3>Quality Of Service</h3>
              <h2><CountUp end={100} duration={5} />%</h2></center>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter bg-white rounded p-3">
            <center> <FaUsers style={{fontSize:'70px',color:'orange'}}/>
              <h3>quality certificates</h3>
              <h2><CountUp end={12} duration={5} /></h2></center> 
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="counter bg-white rounded p-3">
             <center> <FaUsers style={{fontSize:'70px',color:'orange'}}/>
              <h3>Available Products</h3>
              <h2><CountUp end={500} duration={5} />+</h2></center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact Start */}
</>

      
    </div>
  )
}

export default Fact
