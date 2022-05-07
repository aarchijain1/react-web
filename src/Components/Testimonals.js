import React from 'react'


function Testimonals() {
  return (
    
    <section className="happyclients">
    <div className="container headings text-center">
      <h1 className="text-center font-weight-bold"style={{color: 'white'}}>OUR CLIENTS</h1>
      <p className="text-center text-captalize pt-1">Our Satisfied Customer Says</p>
    </div>
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} className="active" />
        <li data-target="#demo" data-slide-to={1} />
        <li data-target="#demo" data-slide-to={2} />
      </ul>
      {/* The slideshow */}
      <div className="carousel-inner container">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box">
                <a href="#"><img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="img-fluid img-thumbnail" /></a>
                <p className="m-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h1>Lorem, ipsum.</h1>
                <h2>Web Developer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Left and right controls */}
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </section>
  )
}

export default Testimonals