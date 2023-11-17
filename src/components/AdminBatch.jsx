import React, { useState, useEffect } from "react";
import Header from "./includes/Header";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./includes/Footer";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "./includes/Config";
import { toast } from "react-toastify";
import { storage } from "./includes/Config";
const AdminBatch = () => {
    const [name, setName] = useState("");
    const [timing, setTiming] = useState("");
    let param = useParams();
    const navigate = useNavigate();
    async function fetchData() {
        const docRef = doc(db, "batches", param.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setName(docSnap.data().BatchName);
            setTiming(docSnap.data().BatchTiming);
        } else {
            // docSnap.data() will be undefined in this case
            toast.error("Batch Not Found", {
                position: toast.POSITION.TOP_RIGHT,
            });
            navigate("/admin/");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleSave() {
        const mydoc = doc(db, "batches", param.id);
        let updatedDoc = {
            BatchName: name,
            BatchTiming: timing
        };
        await updateDoc(mydoc, updatedDoc);
        toast.success("Course Updated Successfully", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }

    async function handleDelete() {
        let choice = window.confirm("are your sure want to delete ?");
        if (choice) {
            await deleteDoc(doc(db, "batches", param.id));
            toast.success("Batch Deleted Successfully", {
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
                            <h1 className="text-center mb-4"> Update Batch </h1>
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
    )
}

export default AdminBatch