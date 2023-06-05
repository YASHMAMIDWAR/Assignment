import { EmpListing } from "./EmpListing";
import { EmpCreate } from "./EmpCreate";
import { EmpEdit } from "./EmpEdit";
import { EmpDetails } from "./EmpDetails";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <ToastContainer />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<EmpListing />} />

        <Route path="/employee">
          <Route path="create" element={<EmpCreate />} />

          <Route path="detail/:empId" element={<EmpDetails />} />

          <Route path="edit/:empid" element={<EmpEdit />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
