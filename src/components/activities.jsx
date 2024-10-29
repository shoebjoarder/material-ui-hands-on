import React from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import activities from "../data/data";

export default function Activities() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Activities
      </Typography>
      <Grid container spacing={2}>
        {activities.map((activity, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <>
              {/* // * Task 5: Starts here */}

              {/* // * Task 5: Ends here */}
            </>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
