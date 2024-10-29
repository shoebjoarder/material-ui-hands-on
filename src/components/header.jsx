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
        color="inherit"
        position="absolute"
        // * Task 1: Continues to A
      >
        <Toolbar>
          <Container>
            <>
              {/* // * Task 1: Continues here A */}
              <Grid container spacing={2} justifyContent="space-between">
                <Grid component="img" src={socoLogo} sx={{ height: 40 }} />
                <Grid>
                  <Button variant="contained" onClick={handleToggleOpen}>
                    Login
                  </Button>
                </Grid>
              </Grid>
              {/* // * Task 1: Ends here */}
            </>
          </Container>
        </Toolbar>
      </AppBar>
      <>
        {/* // * Task 2: Starts here */}
        <Dialog open={open} onClose={handleToggleOpen} maxWidth="sm">
          <DialogContent>
            <Login handleToggleOpen={handleToggleOpen} />
          </DialogContent>
        </Dialog>
        {/* // * Task 2: Ends here */}
      </>
    </>
  );
};

export default Header;
