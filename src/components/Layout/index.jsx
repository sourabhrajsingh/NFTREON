import NavBar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: "5rem" }}>{children}</div>
    </div>
  );
};

export default Layout;
