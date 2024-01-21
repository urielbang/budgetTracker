import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function NavBar() {
  const pages = ["budget", "Login"];
  const auth = getAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isSignIn, setIsSignIn] = useState(false);

  const handleClick = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // setIsSignIn(false);
        signOut(auth)
          .then(() => {
            console.log("Sign-out successful.");
          })
          .catch((error) => {
            console.log("An error happened.");
          });

        const uid = user.uid;
      } else {
        // setIsSignIn(true);
      }
    });
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignIn(true);
        const uid = user.uid;
      } else {
        setIsSignIn(false);
      }
    });
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">Budget</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
          <Typography onClick={handleClick} className="logOutBtn">
            {isSignIn ? "log out" : "Login"}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
