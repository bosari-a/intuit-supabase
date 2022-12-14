import NavBar from "./NavBar";
import { Box } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
