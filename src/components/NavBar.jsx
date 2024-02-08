import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { RxHamburgerMenu } from "react-icons/rx";

import img from "../assets/expense.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function NavBar() {
  const pages = ["budget", "Login"];
  const auth = getAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isSignIn, setIsSignIn] = useState(false);

  //!click in Log in or log out
  const handleClick = () => {
    if (isSignIn) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //! checking if has a user loged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignIn(true);
      } else {
        setIsSignIn(false);
      }
    });
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className="navBar" disableGutters>
          <img className="iconNavbar" src={img} alt="pic" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">Budget</Link>
          </Typography>

          <Box
            className="buttonLinks"
            sx={{ flexGrow: 1, display: { md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          <Typography
            onClick={handleClick}
            className="logOutBtn"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {isSignIn ? "log out" : "Login"}
          </Typography>

          <Typography
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <RxHamburgerMenu className="hamburgerIcon" />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
