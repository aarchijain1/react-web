import React from 'react'

function Project() {
  return (
    <section className="project-work">
    <div className="container headings text-center">
      <p className="text-center font-weight-bold">TILL NOW WHAT WE HAVE ACHIEVED</p>
    </div>
    <div className="container d-flex justify-content-around align-items-center text-center">
      <div>
        <h1 className="count" >1500</h1>
        <p>CMS Installation</p>
        <lord-icon src="https://cdn.lordicon.com/ssdupzsv.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '100px' }}>
        </lord-icon>
      </div>
      <div>
        <h1 className="count">2500</h1>
        <p>Awards Won</p>
        <lord-icon src="https://cdn.lordicon.com/cjieiyzp.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '100px' }}>
        </lord-icon>
      </div>
      <div>
        <h1 className="count">700</h1>
        <p>Happy Clients</p>
        <lord-icon src="https://cdn.lordicon.com/soseozvi.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '100px' }}>
        </lord-icon>
      </div>
      <div>
        <h1 className="count">500</h1>
        <p>Working On</p>
        <lord-icon src="https://cdn.lordicon.com/yyecauzv.json" trigger="loop" colors="primary:#3080e8,secondary:#08a88a" style={{ width: '120px', height: '100px' }}>
        </lord-icon>
      </div>
    </div>
  </section>
  )
}

export default Project