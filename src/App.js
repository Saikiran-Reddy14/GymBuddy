import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Box width="480px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={ExerciseDetail} />
          {/* <Route path="*" Component={InvalidPage} /> */}
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
