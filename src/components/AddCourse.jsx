/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./includes/Header";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import Footer from "./includes/Footer";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "./includes/Config";
import { toast } from "react-toastify";
import {
  uploadBytes,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "./includes/Config";
const AddCourse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("admin") == null) {
      navigate("/admin/login");
      toast.error("Please Login First", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  async function handleSave() {
    const storageRef = ref(storage, `courses/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          var CourseSlug =
            toSeoUrl(name) + "-" + Math.floor(Math.random() * 99999);
          var CourseDate = generateDate();
          const docRef = await setDoc(doc(db, "courses", CourseSlug), {
            CourseName: name,
            CoursePrice: price,
            CourseDescription: description,
            CourseImage: downloadURL,
            CourseDate: CourseDate,
          });
          toast.success("Course Added Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
      }
    );
  }

  function generateDate() {
    const newDate = new Date();
    const date = newDate
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/[^0-9]/g, "");
    const time = newDate.getTime().toString();
    return date + time;
  }

  function toSeoUrl(url) {
    return url
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace(/&/g, "-and-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-*/, "")
      .replace(/-*$/, "");
  }
  return (
    <>
      <Header />
      <div className="container-fluid px-0 py-5">
        <div className="row justify-content-center bg-image mx-0 mb-5">
          <div className="col-lg-6 py-5">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4"> Add new Course </h1>
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
                      <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                  </div>
                </div>

              </div>
              <div className="form-row">
                <div className="col-sm-12">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    style={{ height: "60px" }}
                    onClick={handleSave}
                  >
                    Add Course
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

export default AddCourse;
