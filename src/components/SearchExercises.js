import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData();
    }
  };

  return (
    <Stack
      alignItems={"center"}
      marginTop={"37px"}
      justifyContent={"center"}
      padding={"20px"}
    >
      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        marginBottom={"50px"}
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} marginBottom={"72px"}>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "310px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "100px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;

// 46min
