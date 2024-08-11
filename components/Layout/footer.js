import React from 'react';
import {Col, Row} from "react-bootstrap";
import Link from "next/link";

function Footer(props) {
  return (
    <section className="section">
      <footer className="footer">
        <div className="container">
          <Row className="g-3">
            <Col xl={6} lg={5} md={6}>
              <div className="h-100 px-0 px-lg-5">
                <img style={{width: '90%', maxWidth: '180px'}} src={`${props.path}images/logo.png`} alt="logo"
                     className="footer-logo"/>
                <div className="separator opacity-25 mt-md-5"></div>
                <p className={`fs-16px fw-500 text-cs-black mt-4`}>Sign up for our newsletter</p>
                <div className="d-flex justify-content-between">
                  <input className="form-control newsletter-input" type="email" placeholder="Enter your email"/>
                  <div className="newsletter-btn-wrapper">
                    <button className="btn btn-primary">
                      <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={2} md={6}>
              <p className="fs-16px fw-600 text-cs-black mb-4">Navigation</p>
              <ul className="ps-0">
                <li className="mb-2"><Link className="fs-16px fw-600 text-cs-secondary text-decoration-none"
                                        href="#">Home</Link></li>
                <li className="mb-2"><Link className="fs-16px fw-600 text-cs-secondary text-decoration-none" href="#">About Us</Link></li>
                <li className="mb-2"><Link className="fs-16px fw-600 text-cs-secondary text-decoration-none" href="#">Legal</Link></li>
              </ul>
            </Col>
            <Col xl={2} lg={3} md={6}>
              <p className="fs-16px fw-600 text-cs-black mb-4">Title
              </p>
              <ul className="ps-0">
                <li className="mb-2"><Link className="fs-16px fw-600 text-cs-secondary text-decoration-none" href="#">Link</Link></li>
              </ul>
            </Col>
            <Col  lg={2} md={6}>
              <p className="fs-16px fw-600 text-cs-black">Find us</p>
              <div className="d-flex">
                <Link href="#"><img width="20px" className="me-2 opacity-50" src={`${props.path}images/icon/x.svg`} alt="X"/></Link>
                <Link href="#"><img width="20px" className="me-2 opacity-50" src={`${props.path}images/icon/fb.svg`} alt="Facebook"/></Link>
                <Link href="#"> <img width="20px" className="me-2 opacity-50" src={`${props.path}images/icon/insta.svg`}
                                 alt="Instagram"/></Link>
                <Link href="#"><img width="20px" className="me-2 opacity-50" src={`${props.path}images/icon/linkedin.svg`}
                                alt="Linkedin"/></Link>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </section>
  );
}

export default Footer;