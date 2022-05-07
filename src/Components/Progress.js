import React from 'react'

function Progress() {
  return (
    <section className="serviceoffers" id="servicediv">
    <div className="container headings text-center">
      <h1 className="text-center font-weight-bold" style={{color: 'white'}}>WHAT DO WE OFFER</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-10 offset-lg-0 offset-1">
          <div className="names my-3">
            <h1 style={{color: 'white'}}>HTML</h1>
            <div className="progress w-75">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%',color: 'black'}}>100%</div>
            </div>
          </div>
          <div className="names my-3">
            <h1 style={{color: 'white'}}>CSS</h1>
            <div className="progress w-75">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info " role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%',color: 'black'}}>90%</div>
            </div>
          </div>
          <div className="names my-3">
            <h1 style={{color: 'white'}}>JAVASCRIPT</h1>
            <div className="progress w-75">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info " role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%',color: 'black'}}>80%</div>
            </div>
          </div>
          <div className="names my-3">
            <h1 style={{color: 'white'}}>REACTJS</h1>
            <div className="progress w-75">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%',color: 'black'}}>50%</div>
            </div>
          </div>
          <div className="names my-3">
            <h1 style={{color: 'white'}}>NODEJS</h1>
            <div className="progress w-75">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%',color: 'black'}}>40%</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 servicediv">
          <div className="row">
            <div className="col-lg-2 col-2 service-icons">
            <lord-icon src="https://cdn.lordicon.com/qhgmphtg.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '120px' }}></lord-icon>  
            </div>
            <div className="col-lg-10 col-10">
              <h2>Website Development</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-2 service-icons">
            <lord-icon src="https://cdn.lordicon.com/qhgmphtg.json" trigger="loop"colors="primary:#3080e8,secondary:#08a88a"  style={{ width: '120px', height: '120px' }}>
          </lord-icon>
            </div>
            <div className="col-lg-10 col-10">
              <h2>Digital Marketing</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-2 service-icons">
            <lord-icon src="https://cdn.lordicon.com/cnbtojmk.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '120px' }}>
          </lord-icon>
            </div>
            <div className="col-lg-10 col-10">
              <h2>Support 24/7</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Progress