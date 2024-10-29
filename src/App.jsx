import React, { useRef } from "react";
import { Container, CssBaseline, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Activities from "./components/activities";
import Team from "./components/team";
import Courses from "./components/courses";

export default function App() {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CssBaseline />

      <Header />
      <Banner scrollToTarget={scrollToTarget} />

      <Container maxWidth="lg" sx={{ p: 2 }} ref={targetRef}>
        <Grid container direction="column" spacing={4}>
          <Grid>
            <Activities />
          </Grid>
          <Grid>
            <Divider />
          </Grid>
          <Grid container>
            <Grid size={{ xs: 12, md: 4 }}>
              <Team />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Courses />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Footer />
    </>
  );
}
