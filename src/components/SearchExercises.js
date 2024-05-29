import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      console.log(bodyPartsData);

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
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
        <form onSubmit={handleSearch}>
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
            type="submit"
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
        </form>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
