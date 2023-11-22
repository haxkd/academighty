import React from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'

const Course = () => {
  return (
    <>
    <Header/>

    <>
  {/* Detail Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="mb-5">
            <div className="section-title position-relative mb-5">
              <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                Course Detail
              </h6>
              <h1 className="display-4">
                Web design &amp; development courses for beginners
              </h1>
            </div>
            <img
              className="img-fluid rounded w-100 mb-4"
              src="/img/header.jpg"
              alt="Images"
            />
            <p>
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor consetetur takimata eirmod, dolores takimata consetetur
              invidunt magna dolores aliquyam dolores dolore. Amet erat amet et
              magna
            </p>
            <p>
              Sadipscing labore amet rebum est et justo gubergren. Et eirmod
              ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
              rebum et lorem magna kasd, stet amet magna accusam consetetur
              eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
              Ipsum sit gubergren dolores et, consetetur justo invidunt at et
              aliquyam ut et vero clita. Diam sea sea no sed dolores diam
              nonumy, gubergren sit stet no diam kasd vero.
            </p>
          </div>
        
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="bg-primary mb-5 py-3">
            <h3 className="text-white py-3 px-4 m-0">Course Features</h3>
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Instructor</h6>
              <h6 className="text-white my-3">John Doe</h6>
            </div>
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Rating</h6>
              <h6 className="text-white my-3">
                4.5 <small>(250)</small>
              </h6>
            </div>
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Lectures</h6>
              <h6 className="text-white my-3">15</h6>
            </div>
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Duration</h6>
              <h6 className="text-white my-3">10.00 Hrs</h6>
            </div>
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Skill level</h6>
              <h6 className="text-white my-3">All Level</h6>
            </div>
            <div className="d-flex justify-content-between px-4">
              <h6 className="text-white my-3">Language</h6>
              <h6 className="text-white my-3">English</h6>
            </div>
            <h5 className="text-white py-3 px-4 m-0">Course Price: $199</h5>
            <div className="py-3 px-4">
              <a className="btn btn-block btn-secondary py-3 px-5" href="">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Detail End */}
</>



    <Footer/>
    </>
  )
}

export default Course