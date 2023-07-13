import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "../Pages/UsersList";
import UserDetails from "../Pages/UserDetails";
import AddUpdate from "../Pages/AddUpdate";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/addorupdate" element={<AddUpdate/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
