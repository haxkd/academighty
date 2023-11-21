import React from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'
import { useEffect, useState } from "react";
import { query, orderBy, limit, collection, getDocs, getCountFromServer } from "firebase/firestore";
import { db } from "./includes/Config";
import { Link } from "react-router-dom";

const Courses = () => {
    const pagesize = 1;
    let [courses, setCourses] = useState();
    const [totalCount, setTotalcount] = useState(-1);
    const [buttonText, setButtonText] = useState('Load More');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    let [pagecount, setPagecount] = useState(pagesize);
    useEffect(() => {
        countPageSize();
    }, []);

    useEffect(() => {
        fetchCourses();
    }, [pagecount]);


    async function countPageSize() {
        const coll = collection(db, "courses");
        const snapshot = await getCountFromServer(coll);
        setTotalcount(snapshot.data().count);
    }

    async function fetchCourses() {
        const querySnapshot = await getDocs(
            query(collection(db, "courses"), limit(pagecount), orderBy("CourseDate", "desc"))
        );

        const coursesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setCourses(coursesData);

        if(totalCount<pagecount && totalCount != -1){
            setButtonText('All Course Loaded!');
            setButtonDisabled(true);
        }



    }

    function loadMore() {
        setPagecount(pagesize + pagecount);
    }

    return (
        <>
            <Header />

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center position-relative mb-5">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                                    Our Courses
                                </h6>
                                <h1 className="display-4">All Of Our Courses</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {courses &&
                            courses.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-md-6 pb-4">
                                        <Link
                                            className="courses-list-item position-relative d-block overflow-hidden mb-2"
                                            to={`/batch/${item.id}`}
                                        >
                                            <img className="img-fluid" src={item.CourseImage} alt="" style={{ height: "400px", width: "600px" }} />
                                            <div className="courses-text">
                                                <h4 className="text-center text-white px-3 mb-5">
                                                    {item.CourseName}
                                                </h4>

                                            </div>
                                        </Link>
                                    </div>);
                            })}

                        <div className="col-12 d-flex justify-content-center">
                            <button className='btn btn-outline-info' onClick={loadMore} disabled={isButtonDisabled}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Courses