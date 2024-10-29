import React from "react";
import {
  Avatar,
  CardHeader,
  Paper,
  Typography,
  Tooltip,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import people from "../data/people";

export default function Team() {
  return (
    <>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          People
        </Typography>
        <Grid container>
          {people.map((member, index) => {
            return (
              <Grid size={{ sm: 6, md: 12 }} key={index}>
                <>
                  {/* // * Task 6: Starts here */}
                  
                  {/* // * Task 6: Ends here */}
                </>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
}
