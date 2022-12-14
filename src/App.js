import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { StyledEngineProvider, styled } from "@mui/material";
import About from "./components/About";
import Contact from "./components/Contact";
import Workshops from "./components/Workshops";
import SignUp from "./components/SignUp";
import Quiz from "./components/Quiz";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <StyledEngineProvider>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </StyledEngineProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
