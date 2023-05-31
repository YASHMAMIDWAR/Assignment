import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiArrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export const EmpEdit = () => {
  const { empid } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () =>
      await fetch("http://localhost:8000/employee/" + empid).then((res) =>
        res.json()
      ),
  });

  const navigate = useNavigate();

  const submitHandler = (employeeDetails) => {
    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(employeeDetails),
    })
      .then((res) => {
        toast.success("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const backfunction = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container " onSubmit={handleSubmit(submitHandler)}>
            <div
              className="card rounded-4 bg-light shadow"
              style={{ textAlign: "left" }}
            >
              <div className="card-title mx-auto mt-2">
                <h2>Employee Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        disabled="disabled"
                        className="form-control"
                        {...register("id")}
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        {...register("name", {
                          required: "Name is Required",
                          pattern: {
                            value: /^[a-z ,.'-]+$/i,
                            message: "Please Enter a valid Name",
                          },
                        })}
                      ></input>
                      <p className="text-danger">{errors.name?.message}</p>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                            message: "This is not a valid Email",
                          },
                        })}
                      ></input>
                      <p className="text-danger">{errors.email?.message}</p>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        className="form-control"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[6789]\d{9}$/,
                            message: "This is not a valid phone number",
                          },
                        })}
                      ></input>
                      <p className="text-danger">{errors.phone?.message}</p>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        {...register("active")}
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <motion.a
                        className="btn btn-danger"
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.2 }}
                        onClick={backfunction}
                      >
                        <HiArrowLeft /> Back
                      </motion.a>

                      <motion.button
                        className="btn btn-success"
                        type="submit"
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        Save
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default EmpEdit;
