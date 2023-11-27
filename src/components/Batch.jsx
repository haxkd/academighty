import React, { useEffect, useState } from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "./includes/Config";


const Batch = () => {
  let params = useParams();
  let navigate = useNavigate();
  let [batch, setBatch] = useState();
  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getData() {
    const docRef = doc(db, "batches", params.id);
    const docSnap = await getDoc(docRef);
    const data = await docSnap.data();
    if (data === undefined) {
      navigate("/")
    }
    setBatch(docSnap.data());
    console.log(batch);
  }
  return (
    <>
      <Header />
      <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="mb-5">
            <div className="section-title position-relative mb-5">
              <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                Batch Detail
              </h6>
              <h1 className="display-4">
                {batch && batch.BatchName}
              </h1>
            </div>
            <img
              className="img-fluid rounded w-100 mb-4"
              src="/img/courses-4.jpg"
              alt="Images"
            />

          </div>
        
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="bg-primary mb-5 py-3">
            <h3 className="text-white py-3 px-4 m-0">Batch Features</h3>            
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Rating</h6>
              <h6 className="text-white my-3">
                4.5 <small>(250)</small>
              </h6>
            </div>
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Duration</h6>
              <h6 className="text-white my-3">2 Hrs</h6>
            </div>
            <div className="d-flex justify-content-between border-bottom px-4">
              <h6 className="text-white my-3">Skill level</h6>
              <h6 className="text-white my-3">All Level</h6>
            </div>
            <div className="d-flex justify-content-between px-4">
              <h6 className="text-white my-3">Language</h6>
              <h6 className="text-white my-3">English</h6>
            </div>
            <div className="py-3 px-4">
              <Link className="btn btn-block btn-secondary py-3 px-5" to="/course">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Footer />
    </>
  )
}

export default Batch