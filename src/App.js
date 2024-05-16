import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ExerciseDetail from "./components/ExerciseDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={ExerciseDetail} />
            {/* <Route path="*" Component={InvalidPage} /> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
