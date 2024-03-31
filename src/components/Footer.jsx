import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
  <div className="container-fluid text-dark-50 footer pt-5 mt-5" style={{backgroundColor: "lightgrey"}}>
    <div className="container py-5">
      <div
        className="pb-4 mb-4"
        style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
      >
        <div className="row g-4">
          <div className="col-lg-3">
            <a href="#">
              <h4 className="text-dark  mb-0">SWAYAM Enterprises</h4>
              <p className="text-dark mb-0">
                T-Shirt Manufacturer &amp; Wholesaler
              </p>
            </a>
          </div>
          <div className="col-lg-6">
            <div className="position-relative mx-auto"></div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-end pt-3">
              <a
                className="btn  text-dark " style={{fontSize:"30px"}}
                href="https://x.com/Swetu1994?t=MW-Oaxa8Bok6rcOWxwqGbQ&s=09
                  "
              >
                <FaTwitter/>
              </a>
              <a
                className="btn text-dark " style={{fontSize:"30px"}}
                href=" https://www.facebook.com/SwayamEnt?mibextid=ZbWKwL
                  "
              >
                <FaFacebook/>
              </a>
              <a
                className="btn text-dark " style={{fontSize:"30px"}}
                href="https://youtube.com/@SwayamEnterprisesindore?si=PsviZXHlv3dAab9o
                  "
              >
               <FaYoutube/>
              </a>
              <a
               className="btn text-dark " style={{fontSize:"30px"}}
                href="https://www.instagram.com/swayamenterprisesindore?utm_source=qr&igsh=a3JjZWU0ZW5kZm04
                  "
              >
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="footer-item">
            <h4 className="text-dark mb-3">Why People Like us!</h4>
            <p className="mb-4 text-dark">
              At Swayam Enterprises, We believe that every t-shirt tells a
              story. Since 2015, we've been on a mission to create high-quality,
              comfortable, and stylish t-shirts that not only look good but also
              feel good to wear.
            </p>
            <a
              href="/aboutus.html"
              className="lab-btn border-secondary py-2 px-4 rounded-pill text-dark "
            >
              Read More
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 ">
          <div className="d-flex flex-column  footer-item">
            <h4 className="text-dark mb-3">Site Info</h4>
            <Link className="btn-link text-dark" to="/about">
              About Us
            </Link>
            <Link className="btn-link text-dark" to="/contact">
              Contact Us
            </Link>
            <Link className="btn-link text-dark" to="policy">
              Privacy Policy
            </Link>
            <Link className="btn-link text-dark" to="terms">
              Terms &amp; Condition
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="footer-item">
            <h4 className="text-dark mb-3">Contact</h4>
            <p className='text-dark'>
              Address: 7/2, Malharganj, Indore - 452002, Madhya Pradesh, India
            </p>
            <p  className='text-dark'>
              Email :{" "}
              <a className='text-dark' href="mailto:swayamenterprisessm@gmail.com">
                sales@swayamenterprises.com
              </a>
            </p>
            <p className='text-dark'>
              Whatsapp :{" "}
              <a className='text-dark' href="whatsapp://send?phone=98263 29200&text=Hello%20there!">
                +91 98263 29200
              </a>
            </p>
            <p className='text-dark'>
              Phone : <a className='text-dark' href="tel:+9199933 98683">+91 99933 98683</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Footer
