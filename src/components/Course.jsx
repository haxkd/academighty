import React, { useEffect, useState } from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "./includes/Config";

const Course = () => {
    let params = useParams();
    let navigate = useNavigate();
    let [course,setCourse] = useState();
    useEffect(()=>{
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function getData(){
        const docRef = doc(db, "courses", params.id);
        const docSnap = await getDoc(docRef);
        const data = await docSnap.data();
        if(data===undefined){
            navigate("/")
        }
        setCourse(docSnap.data());
        console.log(course);
    }
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
                {course && course.CourseName}
              </h1>
            </div>
            <img
              className="img-fluid rounded w-100 mb-4"
              src={course && course.CourseImage}
              alt="Images"
            />
            <div dangerouslySetInnerHTML={{ __html: course && course.CourseDescription }}/>
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
            <h5 className="text-white py-3 px-4 m-0">Course Price: ${course && course.CoursePrice}</h5>
            <div className="py-3 px-4">
              <a className="btn btn-block btn-secondary py-3 px-5" href="#top">
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