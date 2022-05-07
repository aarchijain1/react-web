import React from 'react'

function Footer() {
  return (

    <footer className="footersection"style={{ backgroundColor: '#040023' }} id="footerdiv">
    <hr  style={{ Color: '#50c1d0' }}/>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 footer-div">
          <div>
            <h3>LOREM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto soluta earum ipsa ab animi hic itaque repudiandae eum laboriosam veniam.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 footer-div">
          <div className="footer-navlinks">
            <h3>NAVIGATION LINKS</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Price</a></li>
            <li><a href="#">About</a></li>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12 footer-div">
          <div>
            <h3>NEWSLETTER</h3>
            <p>For business professionals caught between high OEM price and mediocre print and graphic output.</p>
            <div className="container newsletter-main">
              <div className="row">
                <div className="col-lg-12 col-12 ">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control newsletter-input" placeholder="Your Email" />
                    <div className="input-group-append">
                      <span className="input-group-text">Subscribe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scrolltop float-right">
        <i className="fa fa-arrow-up" onclick="topFunction()" id="myBtn" />
      </div>
    </div>
  </footer>
  )
}

export default Footer