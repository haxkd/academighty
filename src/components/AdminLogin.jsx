import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./includes/Header";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./includes/Config";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleLogin() {
    // const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        sessionStorage.setItem("admin",userCredential.user.uid);
        navigate("/admin/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/invalid-login-credentials" || errorCode==="auth/missing-password" ) {
            toast.error("Enter valid credentials", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } 
        else if(errorCode==="auth/invalid-email"){
            toast.error("Enter valid Email", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }else {
          toast.error("something went wrong try again later", {
            position: toast.POSITION.TOP_RIGHT,
        });
        }
      });
  }
  return (
    <>
      <Header />
      <div className="container-fluid px-0 py-5">
        <div className="row justify-content-center bg-image mx-0 mb-5">
          <div className="col-lg-6 py-5">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4">Admin Login</h1>

              <div className="form-row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      name="email"
                      placeholder="Email"
                      style={{ padding: "30px 20px" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control bg-light border-0"
                      name="password"
                      placeholder="password"
                      style={{ padding: "30px 20px" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
