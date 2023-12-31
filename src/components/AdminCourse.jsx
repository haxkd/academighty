/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import Header from "./includes/Header";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./includes/Footer";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "./includes/Config";
import { toast } from "react-toastify";
import { storage } from "./includes/Config";
const AdminCourse = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  let param = useParams();
  const navigate = useNavigate();
  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const docRef = doc(db, "courses", param.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setName(docSnap.data().CourseName);
      setPrice(docSnap.data().CoursePrice);
      setDescription(docSnap.data().CourseDescription);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      toast.error("Course Not Found", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/admin/");
    }
  }
  async function handleSave() {
    const mydoc = doc(db, "courses", param.id);
    if (image) {
      const storageRef = ref(storage, `courses/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      await uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            let updatedDoc = {
              CourseDescription: description,
              CourseName: name,
              CoursePrice: price,
              CourseImage: downloadURL,
            };
            await updateDoc(mydoc, updatedDoc);
          });
        }
      );
    } else {
      let updatedDoc = {
        CourseDescription: description,
        CourseName: name,
        CoursePrice: price,
      };
      await updateDoc(mydoc, updatedDoc);
    }
    toast.success("Course Updated Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  async function handleDelete() {
    let choice = window.confirm("are your sure want to delete?");
    if (choice) {
      await deleteDoc(doc(db, "courses", param.id));
      toast.success("Course Deleted Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/admin/");
    }
  }
  return (
    <>
      <Header />
      <div className="container-fluid px-0 py-5">
        <div className="row justify-content-center bg-image mx-0 mb-5">
          <div className="col-lg-6 py-5">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4"> Update Course </h1>
              <div className="form-row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      name="name"
                      placeholder="Course Name"
                      style={{ padding: "30px 20px" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      name="price"
                      placeholder="Course Price"
                      style={{ padding: "30px 20px" }}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <ReactQuill
                      className="form-control bg-light border-0"
                      placeholder="Course Description"
                      style={{
                        padding: "20px 20px",
                        paddingBottom: "60px",
                        height: "300px",
                      }}
                      value={description}
                      onChange={(value) => setDescription(value)}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        accept="Image/*"
                        name="image"
                        onChange={handleImageChange}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile01"
                      >
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-12 d-flex justify-content-around">
                  <button
                    className="btn btn-primary "
                    type="submit"
                    style={{ height: "60px" }}
                    onClick={handleSave}
                  >
                    Update Course
                  </button>
                  <button
                    className="btn btn-danger"
                    type="submit"
                    style={{ height: "60px" }}
                    onClick={handleDelete}
                  >
                    Delete Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminCourse;
