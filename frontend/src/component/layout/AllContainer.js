import { Container } from "@mui/system";
import React from "react";

const AllContainer = ({ children }) => {
  return <Container sx={{ margin: "auto" }}>{children}</Container>;
};

export default AllContainer;
