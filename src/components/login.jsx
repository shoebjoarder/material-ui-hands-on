import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

export default function Login(props) {
  const { handleToggleOpen } = props;
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    setLoggedIn(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setTimeout(() => handleToggleOpen(), 2000);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ p: 1 }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Login</Typography>
        <Grid size="grow" component="form" onSubmit={handleSubmit} noValidate>
          <>
            {/* // * Task 3: Starts here */}

            {/* // * Task 3: Ends here */}
          </>
          <Grid container justifyContent="space-between">
            <Grid>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <>
        {/* // * Task 4: Starts here */}

        {/* // * Task 4: Ends here */}
      </>
    </>
  );
}
