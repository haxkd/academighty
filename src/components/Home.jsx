import React from "react";
import { Link } from "react-router-dom";
import Header from "./includes/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="jumbotron jumbotron-fluid position-relative overlay-bottom"
        style={{ marginBottom: "90px" }}
      >
        <div className="container text-center my-5 py-5">
          <h1 className="text-white mt-4 mb-4">Learn From Home</h1>
          <h1 className="text-white display-1 mb-5">Education Courses</h1>
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Courses
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Courses 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Courses 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Courses 3
                  </a>
                </div>
              </div>
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px 25px" }}
                placeholder="Keyword"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary px-4 px-lg-5">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="/img/about.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  About Us
                </h6>
                <h1 className="display-4">
                  First Choice For Online Education Anywhere
                </h1>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
              <div className="row pt-3 mx-0">
                <div className="col-3 px-0">
                  <div className="bg-success text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Available<span className="d-block">Subjects</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-primary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Online<span className="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-secondary text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Skilled<span className="d-block">Instructors</span>
                    </h6>
                  </div>
                </div>
                <div className="col-3 px-0">
                  <div className="bg-warning text-center p-4">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">
                      Happy<span className="d-block">Students</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-image" style={{ margin: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 my-5 pt-5 pb-lg-5">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Why Choose Us?
                </h6>
                <h1 className="display-4">
                  Why You Should Start Learning with Us?
                </h1>
              </div>
              <p className="mb-4 pb-2">
                Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
                ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
                sadipscing et erat eirmod diam kasd labore clita est. Diam
                sanctus gubergren sit rebum clita amet.
              </p>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-primary mr-4">
                  <i className="fa fa-2x fa-graduation-cap text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Skilled Instructors</h4>
                  <p>
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-secondary mr-4">
                  <i className="fa fa-2x fa-certificate text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>International Certificate</h4>
                  <p>
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="btn-icon bg-warning mr-4">
                  <i className="fa fa-2x fa-book-reader text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Online classNamees</h4>
                  <p className="m-0">
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="/img/feature.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 py-5">
        <div className="row mx-0 justify-content-center pt-5">
          <div className="col-lg-6">
            <div className="section-title text-center position-relative mb-4">
              <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                Our Courses
              </h6>
              <h1 className="display-4">
                Checkout New Releases Of Our Courses
              </h1>
            </div>
          </div>
        </div>
        <div className="owl-carousel courses-carousel">
          <div className="courses-item position-relative">
            <img className="img-fluid" src="/img/courses-1.jpg" alt="" />
            <div className="courses-text">
              <h4 className="text-center text-white px-3">
                Web design & development courses for beginners
              </h4>
              <div className="border-top w-100 mt-3">
                <div className="d-flex justify-content-between p-4">
                  <span className="text-white">
                    <i className="fa fa-user mr-2"></i>Jhon Doe
                  </span>
                  <span className="text-white">
                    <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                  </span>
                </div>
              </div>
              <div className="w-100 bg-white text-center p-4">
                <a className="btn btn-primary" href="detail.html">
                  Course Detail
                </a>
              </div>
            </div>
          </div>
          <div className="courses-item position-relative">
            <img className="img-fluid" src="/img/courses-2.jpg" alt="" />
            <div className="courses-text">
              <h4 className="text-center text-white px-3">
                Web design & development courses for beginners
              </h4>
              <div className="border-top w-100 mt-3">
                <div className="d-flex justify-content-between p-4">
                  <span className="text-white">
                    <i className="fa fa-user mr-2"></i>Jhon Doe
                  </span>
                  <span className="text-white">
                    <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                  </span>
                </div>
              </div>
              <div className="w-100 bg-white text-center p-4">
                <a className="btn btn-primary" href="detail.html">
                  Course Detail
                </a>
              </div>
            </div>
          </div>
          <div className="courses-item position-relative">
            <img className="img-fluid" src="/img/courses-3.jpg" alt="" />
            <div className="courses-text">
              <h4 className="text-center text-white px-3">
                Web design & development courses for beginners
              </h4>
              <div className="border-top w-100 mt-3">
                <div className="d-flex justify-content-between p-4">
                  <span className="text-white">
                    <i className="fa fa-user mr-2"></i>Jhon Doe
                  </span>
                  <span className="text-white">
                    <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                  </span>
                </div>
              </div>
              <div className="w-100 bg-white text-center p-4">
                <a className="btn btn-primary" href="detail.html">
                  Course Detail
                </a>
              </div>
            </div>
          </div>
          <div className="courses-item position-relative">
            <img className="img-fluid" src="/img/courses-4.jpg" alt="" />
            <div className="courses-text">
              <h4 className="text-center text-white px-3">
                Web design & development courses for beginners
              </h4>
              <div className="border-top w-100 mt-3">
                <div className="d-flex justify-content-between p-4">
                  <span className="text-white">
                    <i className="fa fa-user mr-2"></i>Jhon Doe
                  </span>
                  <span className="text-white">
                    <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                  </span>
                </div>
              </div>
              <div className="w-100 bg-white text-center p-4">
                <a className="btn btn-primary" href="detail.html">
                  Course Detail
                </a>
              </div>
            </div>
          </div>
          <div className="courses-item position-relative">
            <img className="img-fluid" src="/img/courses-5.jpg" alt="" />
            <div className="courses-text">
              <h4 className="text-center text-white px-3">
                Web design & development courses for beginners
              </h4>
              <div className="border-top w-100 mt-3">
                <div className="d-flex justify-content-between p-4">
                  <span className="text-white">
                    <i className="fa fa-user mr-2"></i>Jhon Doe
                  </span>
                  <span className="text-white">
                    <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                  </span>
                </div>
              </div>
              <div className="w-100 bg-white text-center p-4">
                <a className="btn btn-primary" href="detail.html">
                  Course Detail
                </a>
              </div>
            </div>
          </div>
          <div className="courses-item position-relative">
            <img className="img-fluid" src="/img/courses-6.jpg" alt="" />
            <div className="courses-text">
              <h4 className="text-center text-white px-3">
                Web design & development courses for beginners
              </h4>
              <div className="border-top w-100 mt-3">
                <div className="d-flex justify-content-between p-4">
                  <span className="text-white">
                    <i className="fa fa-user mr-2"></i>Jhon Doe
                  </span>
                  <span className="text-white">
                    <i className="fa fa-star mr-2"></i>4.5 <small>(250)</small>
                  </span>
                </div>
              </div>
              <div className="w-100 bg-white text-center p-4">
                <a className="btn btn-primary" href="detail.html">
                  Course Detail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center bg-image mx-0 mb-5">
          <div className="col-lg-6 py-5">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4">30% Off For New Students</h1>
              <form>
                <div className="form-row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ padding: "30px 20px" }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ padding: "30px 20px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <select
                        className="custom-select bg-light border-0 px-3"
                        style={{ height: "60px" }}
                      >
                        <option defaultValue>Select A courses</option>
                        <option value="1">courses 1</option>
                        <option value="2">courses 1</option>
                        <option value="3">courses 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      style={{ height: "60px" }}
                    >
                      Sign Up Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="section-title text-center position-relative mb-5">
            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
              Instructors
            </h6>
            <h1 className="display-4">Meet Our Instructors</h1>
          </div>
          <div
            className="owl-carousel team-carousel position-relative"
            style={{ padding: "0 30px" }}
          >
            <div className="team-item">
              <img className="img-fluid w-100" src="/img/team-1.jpg" alt="" />
              <div className="bg-light text-center p-4">
                <h5 className="mb-3">Instructor Name</h5>
                <p className="mb-2">Web Design & Development</p>
                <div className="d-flex justify-content-center">
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="/img/team-2.jpg" alt="" />
              <div className="bg-light text-center p-4">
                <h5 className="mb-3">Instructor Name</h5>
                <p className="mb-2">Web Design & Development</p>
                <div className="d-flex justify-content-center">
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="/img/team-3.jpg" alt="" />
              <div className="bg-light text-center p-4">
                <h5 className="mb-3">Instructor Name</h5>
                <p className="mb-2">Web Design & Development</p>
                <div className="d-flex justify-content-center">
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="/img/team-4.jpg" alt="" />
              <div className="bg-light text-center p-4">
                <h5 className="mb-3">Instructor Name</h5>
                <p className="mb-2">Web Design & Development</p>
                <div className="d-flex justify-content-center">
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="mx-1 p-1" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-image py-5"
        style={{ margin: "90px 0" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Testimonial
                </h6>
                <h1 className="display-4">What Say Our Students</h1>
              </div>
              <p className="m-0">
                Dolor est dolores et nonumy sit labore dolores est sed rebum
                amet, justo duo ipsum sanctus dolore magna rebum sit et. Diam
                lorem ea sea at. Nonumy et at at sed justo est nonumy tempor.
                Vero sea ea eirmod, elitr ea amet diam ipsum at amet. Erat sed
                stet eos ipsum diam
              </p>
            </div>
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel">
                <div className="bg-white p-5">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <p>
                    Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit
                    est est ipsum eos clita est ipsum. Est nonumy tempor at
                    kasd. Sed at dolor duo ut dolor, et justo erat dolor magna
                    sed stet amet elitr duo lorem
                  </p>
                  <div className="d-flex flex-shrink-0 align-items-center mt-4">
                    <img
                      className="img-fluid mr-4"
                      src="/img/testimonial-2.jpg"
                      alt=""
                    />
                    <div>
                      <h5>Student Name</h5>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <p>
                    Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit
                    est est ipsum eos clita est ipsum. Est nonumy tempor at
                    kasd. Sed at dolor duo ut dolor, et justo erat dolor magna
                    sed stet amet elitr duo lorem
                  </p>
                  <div className="d-flex flex-shrink-0 align-items-center mt-4">
                    <img
                      className="img-fluid mr-4"
                      src="/img/testimonial-1.jpg"
                      alt=""
                    />
                    <div>
                      <h5>Student Name</h5>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div
                className="bg-light d-flex flex-column justify-content-center px-5"
                style={{ height: "450px" }}
              >
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-primary mr-4">
                    <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Our Location</h4>
                    <p className="m-0">123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div className="btn-icon bg-secondary mr-4">
                    <i className="fa fa-2x fa-phone-alt text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Call Us</h4>
                    <p className="m-0">+012 345 6789</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-icon bg-warning mr-4">
                    <i className="fa fa-2x fa-envelope text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Email Us</h4>
                    <p className="m-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Need Help?
                </h6>
                <h1 className="display-4">Send Us A Message</h1>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control border-top-0 border-right-0 border-left-0 p-0"
                      rows="5"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <a href="index.html" className="navbar-brand">
                <h1 className="mt-n2 text-uppercase text-white">
                  <i className="fa fa-book-reader mr-3"></i>Edukate
                </h1>
              </a>
              <p className="m-0">
                Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem
                at et diam est, tempor rebum ipsum sit ea tempor stet et
                consetetur dolores. Justo stet diam ipsum lorem vero clita diam
              </p>
            </div>
            <div className="col-md-6 mb-5">
              <h3 className="text-white mb-4">Newsletter</h3>
              <div className="w-100">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-light"
                    style={{ padding: "30px" }}
                    placeholder="Your Email Address"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New
                York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a className="text-white mr-4" href="#">
                  <i className="fab fa-2x fa-twitter"></i>
                </a>
                <a className="text-white mr-4" href="#">
                  <i className="fab fa-2x fa-facebook-f"></i>
                </a>
                <a className="text-white mr-4" href="#">
                  <i className="fab fa-2x fa-linkedin-in"></i>
                </a>
                <a className="text-white" href="#">
                  <i className="fab fa-2x fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Our Courses</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Web Design
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Apps Design
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Marketing
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Research
                </a>
                <a className="text-white-50" href="#">
                  <i className="fa fa-angle-right mr-2"></i>SEO
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Privacy Policy
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Terms & Condition
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Regular FAQs
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Help & Support
                </a>
                <a className="text-white-50" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white-50 border-top py-4"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">
                Copyright &copy;{" "}
                <a className="text-white" href="#">
                  Your Site Name
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">
                Designed by{" "}
                <a className="text-white" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
};

export default Home;
