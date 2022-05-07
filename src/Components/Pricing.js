import React from 'react'

function Pricing() {
  return (
      <>
       <h1 className="text-center font-weight-bold" style={{color: 'white'}}>TIMELINE</h1>
       <div className="container1">
        <div className="entry">
          <div className="indicator">
            <span />
          </div>
          <p className="content">
            <span>Header</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et corrupti, animi rem nobis voluptatum?
          </p>
          <div className="time">2022</div>
        </div>
        <div className="entry">
          <div className="indicator">
            <span />
          </div>
          <p className="content">
            <span>Header</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque quae laboriosam veritatis quos, asperiores optio!
          </p>
          <div className="time">2021</div>
        </div>
        <div className="entry">
          <div className="indicator">
            <span />
          </div>
          <p className="content">
            <span>Header</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, dolores.
          </p>
          <div className="time">2020</div>
        </div>
        <div className="entry">
          <div className="indicator">
            <span />
          </div>
          <p className="content">
            <span>Header</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur.
          </p>
          <div className="time">2019</div>
        </div>
      </div>
    <section className="pricing" id="pricingdiv">
    <div className="container headings text-center ">
      <h1 className="text100nter font-weight-bold text-white">OUR BEST PRICING</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-12 ">
          <div className="card text-center">
            <div className="card-header" ><lord-icon src="https://cdn.lordicon.com/kdruzgxz.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '120px' }}>
          </lord-icon></div>
            <div className="card-body">
              <li>$<span className="money">40</span>/website</li>
              <li>Responsive Websites</li>
              <li>Domain Name Free</li>
              <li>Mobile Friendly</li>
              <li>Webmail Support</li>
              <li>Customer Support 24/7</li>
            </div>
            <div className="card-footer">
              <a href="#">Purchase</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 card-second">
          <div className="card text-center">
            <div className="card-header" ><lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '120px' }}>
          </lord-icon></div>
            <div className="card-body">
              <li>$<span className="money">60</span>/website</li>
              <li>Responsive Websites</li>
              <li>Domain Name Free</li>
              <li>Mobile Friendly</li>
              <li>Webmail Support</li>
              <li>Customer Support 24/7</li>
            </div>
            <div className="card-footer">
              <a href="#">Purchase</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12  card-third">
          <div className="card text-center ">
            <div className="card-header"><lord-icon src="https://cdn.lordicon.com/qjvxqdov.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '120px' }}>
          </lord-icon></div>
            <div className="card-body">
              <li>$<span className="money">20</span>/website</li>
              <li>Responsive Websites</li>
              <li>Domain Name Free</li>
              <li>Mobile Friendly</li>
              <li>Webmail Support</li>
              <li>Customer Support 24/7</li>
            </div>
            <div className="card-footer">
              <a href="#">Purchase</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Pricing