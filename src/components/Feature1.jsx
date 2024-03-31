import React from 'react';
import purefab from '../assets/images/pure/premium.jpeg'
import finishing from '../assets/images/pure/fabric.jpeg';
import material from '../assets/images/pure/quality.jpeg';
import '../assets/css/feature1.css'

const Feature1 = () => {
  return (
    <div>
        <>
  {/* Featurs Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-4">
          <a href="#">
            <div className="service-item  rounded border border-secondary" style={{backgroundColor:"red"}}>
              <img
                src={finishing}
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="px-4 rounded-bottom">
                <div className="service-content bg-warning text-center p-4 rounded">
                  <h5 className="text-white">Pure Fabric</h5>
                  <h4 className="mb-0">Affordable Price </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a href="#">
            <div className="service-item bg-secondary rounded border border-dark">
              <img
                src={purefab}
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="px-4 rounded-bottom">
                <div className="service-content bg-light text-center p-4 rounded">
                  <h5 className="text-danger">Premium Stitching</h5>
                  <h4 className="mb-0">Smooth Finishing </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a href="#">
            <div className="service-item  rounded border border-primary" style={{backgroundColor:"red"}}>
              <img
                src={material}
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="px-4 rounded-bottom">
                <div className="service-content bg-warning text-center p-4 rounded">
                  <h5 className="text-white">Great Quality</h5>
                  <h4 className="mb-0">Body Friendly Material</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Featurs End */}
</>

      
    </div>
  )
}

export default Feature1
