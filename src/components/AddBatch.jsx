import React, { useState, useEffect } from "react";
import Header from "./includes/Header";
import { useNavigate } from "react-router-dom";
import Footer from "./includes/Footer";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./includes/Config";
import { toast } from "react-toastify";
const AddBatch = () => {
  let [name, setName] = useState("");
  let [timing, setTiming] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("admin") == null) {
      navigate("/admin/login");
      toast.error("Please Login First", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });
  async function handleSave() {
    var CourseSlug = toSeoUrl(name) + "-" + Math.floor(Math.random() * 99999);
    var BatchDate = generateDate();
    await setDoc(doc(db, "batches", CourseSlug), {
      BatchName: name,
      BatchDate: BatchDate,
      BatchTiming: timing,
    });
    toast.success("Batch Added Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setName("");
    setTiming("");
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
  return (
    <>
      <Header />
      <div className="container-fluid px-0 py-5">
        <div className="row justify-content-center bg-image mx-0 mb-5">
          <div className="col-lg-6 py-5">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4"> Add new Batch </h1>
              <div className="form-row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      name="name"
                      placeholder="Batch Name"
                      style={{ padding: "30px 20px" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="datetime-local"
                      className="form-control bg-light border-0"
                      name="price"
                      placeholder="Batch Timing"
                      style={{ padding: "30px 20px" }}
                      value={timing}
                      onChange={(e) => setTiming(e.target.value)}
                    />
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
                    Add Batch
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

export default AddBatch;
