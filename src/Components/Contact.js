import React from 'react'

function Contact() {
  return (
      <>
      <index/>
    <section className="contactus" id="contactdiv">
    <div className="container headings text-center">
      <h1 className="text-center font-weight-bold" style={{color: 'white'}}>CONTACT US</h1>
      <p className="text-center text-captalize pt-1">We're here to help and answer any question you might have. we look forward to hearing from you.</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
          <form action="/action_page.php">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Your Name" id="username" autoComplete="off" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Enter Email" id="email" autoComplete="off" required />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" placeholder="Enter Mobile Number" id="mobile" autoComplete="off" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows={4} placeholder="Enter Your Message" id="comment" defaultValue={""} />
            </div>
            <div className="d-flex justify-content-center form-button">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
 
  <section className="newsletter" id="newsletterdiv">
    <div className="container headings text-center">
      <h1 className="text-center font-weight-bold"style={{color: 'white'}}>SUBSCRIBE TO OUR NEWS LETTER</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-12 ">
          <div className="input-group mb-3">
            <input type="text" className="form-control newsletter-input" placeholder="Your Email" />
            <div className="input-group-append">
              <span className="input-group-text">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  </> 
  )
}

export default Contact