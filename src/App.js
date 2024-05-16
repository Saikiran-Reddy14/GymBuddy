import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <h1>hello</h1>
      </Box>
    </div>
  );
}

export default App;
