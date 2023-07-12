import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersList from "../Pages/UsersList";
import AddUser from "../Pages/AddUser";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
