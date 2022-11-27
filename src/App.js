import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { StyledEngineProvider, Box, styled } from "@mui/material";
import About from "./components/About";
import Contact from "./components/Contact";
import Workshops from "./components/Workshops";
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
          <Layout>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                paddingTop: 3,
                paddingLeft: 1,
                paddingRight: 1,
                paddingBottom: 3,
              }}
            >
              <DrawerHeader />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="workshops" element={<Workshops />} />
              </Routes>
            </Box>
          </Layout>
        </StyledEngineProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
