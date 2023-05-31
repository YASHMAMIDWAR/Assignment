import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HiUserCircle, HiArrowLeft } from "react-icons/hi";
import { BsFillPenFill } from "react-icons/bs";
import { motion } from "framer-motion";

export const EmpDetails = () => {
  const { empId } = useParams();

  const [empdata, empDataChange] = useState({});

  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const LoadListing = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empId)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        empDataChange(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empId]);

  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 mt-5 pt-5 ">
          <div className="row z-depth-3">
            <div className="col-sm-4 bg-info rounded-left">
              <div className="card-block text-center text-white">
                <HiUserCircle size={120} />
                <h2 className="font-weight-bold mt-4">{empdata.name}</h2>
                <motion.a
                  onClick={() => {
                    LoadEdit(empdata.id);
                  }}
                  className="btn btn-success mb-2"
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                >
                  Edit <BsFillPenFill />
                </motion.a>
              </div>
            </div>
            <div className="col-sm-8 bg-white rounded-right">
              <h3 className="mt-3 text-center">Employee Details</h3>
              <hr className="badge-primary pt-20 "></hr>
              <div className="row">
                <div className="col-sm-6">
                  <p className="font-weight-bold">Email:</p>
                  <h6 className="text0muted">{empdata.email}</h6>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight-bold">Phone:</p>
                  <h6 className="text0muted">{empdata.phone}</h6>
                </div>
              </div>
              <motion.div className="row justify-content-center pt-5 mb-2">
                <motion.a
                  className="btn btn-danger col-4"
                  onClick={LoadListing}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <HiArrowLeft size={22} />
                  {"    "}
                  Back to Listing
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
