import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="page">
      <NavBar />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
