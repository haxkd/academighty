import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import { toast } from "react-toastify";
import { query, orderBy, collection, getDocs } from "firebase/firestore";
import { db } from "./includes/Config";
import { Link } from "react-router-dom";
const AdminHome = () => {
  let [courses, setCourses] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("admin") == null) {
      navigate("/admin/login");
      toast.error("Please Login First", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPost() {
    // const querySnapshot = await getDocs(collection(db, "courses"));
    const querySnapshot = await getDocs(
      query(collection(db, "courses"), orderBy("CourseDate", "desc"))
    );

    const coursesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCourses(coursesData);
  }

  return (
    <>
      <Header />
      <div className="container my-5">
        <div
          className="table-responsive shadow-lg rounded"
          style={{ maxHeight: "300px" }}
        >
          <table className="table table-bordered border-primary table-light table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses &&
                courses.map((doc, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{doc.CourseName}</td>
                      <td>{doc.CoursePrice}</td>
                      <td>
                        <img
                          src={doc.CourseImage}
                          alt="course images"
                          style={{ height: "50px", width: "100px" }}
                        />
                      </td>
                      <td
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        <Link
                          className="btn rounded btn-outline-success"
                          to={`/admin/course/${doc.id}`}
                        >
                          EDIT
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  {courses && courses.length === 0 && (
                    <>
                      <h1 className="text-center p-5">
                        {" "}
                        Sorry No Course Available...!
                      </h1>
                    </>
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <hr className="container" />

      <Footer />
    </>
  );
};

export default AdminHome;
