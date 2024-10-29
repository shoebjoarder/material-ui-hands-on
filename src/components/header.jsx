import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Dialog,
  DialogContent,
  Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import socoLogo from "../assets/soco-logo.png";
import Login from "./login";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        // * Task 1: Starts here

        // * Task 1: Continues to A
      >
        <Toolbar>
          <Container>
            <>
              {/* // * Task 1: Continues here A */}

              {/* // * Task 1: Ends here */}
            </>
          </Container>
        </Toolbar>
      </AppBar>
      <>
        {/* // * Task 2: Starts here */}

        {/* // * Task 2: Ends here */}
      </>
    </>
  );
};

export default Header;
