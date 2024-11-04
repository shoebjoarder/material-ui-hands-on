import React from "react";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Grid from "@mui/material/Grid2";
import socoLogo from "../assets/soco-logo-white.png";

export default function Banner(props) {
  const { scrollToTarget } = props;

  let header = "Social Computing Group";
  let welcomeMessage = "Welcome to our homepage!";
  let description = `At the intersection of computer science and cognitive science, we conduct applied research into human-centered explainable AI and intelligent data-intensive systems and their application in technology-enhanced learning and knowledge management domains. Headed by Prof. Dr. Mohamed Amine Chatti, we take an interdisciplinary approach in designing and developing trustworthy human-centered AI technologies and novel analytics-driven methods and visualizations for tomorrow’s smart learning and working environments. We offer lectures, seminars, and practical courses in learning technologies, web technologies, data science, visual analytics, and human-AI interaction following a technology-enhanced, student-centered learning approach.`;

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundImage: "url(src/assets/soco-background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          height: "100vh",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Container maxWidth="md">
            <Paper
              elevation={0}
              sx={{
                p: 5,
                color: "white",
                background: "rgba(255,255,255,0.18)",
              }}
            >
              <Grid container direction="column" alignItems="center">
                <Box
                  component="img"
                  src={socoLogo}
                  sx={{ height: 94, mb: 2 }}
                />
                <>
                  {/* // * Task 7: Starts here */}
                  <Typography variant="h4" gutterBottom>
                    {header}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    {welcomeMessage}
                  </Typography>

                  <Typography variant="body1" gutterBottom align="center">
                    {description}
                  </Typography>
                  {/* // * Task 7: Ends here */}
                </>
                <>
                  {/* // * Task 8: Starts here */}
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={scrollToTarget}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  {/* // * Task 8: Ends here */}
                </>
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </Container>
    </>
  );
}
