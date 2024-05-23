import React, { useState } from "react";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default HomePage;
