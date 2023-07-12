import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        style={{
          backgroundColor: "RGB(0 86 215)",
          display: "flex",
          justifyContent: "space-evenly",
          gap: "50px",
          padding: "25px",
        }}
      >
        <Button
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            padding: "30px 50px",
            fontSize: "20px",
          }}
          _hover={{
            bg: "RGB(160 198 255)",
            color: "white",
          }}
          onClick={() => navigate("/adduser")}
        >
          Add User
        </Button>
      </Box>
    </>
  );
};

export default Navbar;
