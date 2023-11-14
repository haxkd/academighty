import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import { toast } from "react-toastify";
const AdminHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("admin") == null) {
      navigate("/admin/login");
      toast.error("Please Login First", {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
  });
  return (
    <>
    <Header/>
      <div className="container">
        <div className="table-responsive">
          <table className="my-5 table table-bordered border-primary table-light table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Car</th>
                <th>User</th>
                <th>Status</th>
                <th>View</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <>
                    <h1 className="text-center p-5">
                      Sorry No course Available...!
                    </h1>
                  </>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default AdminHome;
