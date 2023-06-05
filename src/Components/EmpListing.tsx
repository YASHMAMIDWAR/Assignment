import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsFillPenFill,
  BsInfoCircle,
  BsPersonAdd,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { Employee } from "./Interfaces";


export const EmpListing = () => {
  const [empData, setEmpDataChange] = useState([]);

  const navigate = useNavigate();

  const LoadDetail = (id: number) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id: number) => {
    navigate("/employee/edit/" + id);
  };

  const RemoveFunction = (id: number) => {
    fetch("http://localhost:8000/employee/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        toast.success("Removed successfully.");
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setEmpDataChange(res);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  return (
    <motion.div
      className="container shadow bg-body-tertiary rounded-4"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="card bg-light rounded-4">
        <div className="card-title mx-auto mt-3">
          <h2>Employee Listing</h2>
        </div>

        <div className="card-body">
          <motion.div
            className="divbtn mb-2"
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
          >
            <Link to="employee/create" className="btn btn-success">
              Add New <BsPersonAdd size={24} />
            </Link>
          </motion.div>
          <table className="table table-hover">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>
                  {" "}
                  <MdEmail size={20} />
                  {"   "}Email
                </td>
                <td>
                  <BsFillTelephoneFill />
                  {"    "}
                  Phone
                </td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empData &&
                empData.map((item: Employee) => (
                  <motion.tr key={item.id} whileHover={{ scale: 1.1 }}>
                    <td>{item.id}</td>
                    <td data-testid="NameInMap">{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <motion.a
                        whileTap={{ scale: 0.8 }}
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit <BsFillPenFill />
                      </motion.a>
                      <DeleteConfirmModal
                        closeModal={RemoveFunction}
                        ID={item.id}
                      />
                      <motion.a
                        whileTap={{ scale: 0.8 }}
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details <BsInfoCircle />
                      </motion.a>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
