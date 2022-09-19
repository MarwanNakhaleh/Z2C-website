import React from "react";
import { Grid, Typography, Button, Box, Link } from "@mui/material";
import myteam from "../images/myteam.jpg";
import useStyles from "../styles/styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Don't spend money learning to code.
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Forget about spending tens of thousands of dollars on a coding
            bootcamp only to teach yourself information you can find for free
            online.
          </Typography>
          {/* <Typography variant="h6" className={classes.subtitle}>
            We're going to give you a curated list of free courses and tutorials
            such that if you complete all of the given material, you will know
            enough to begin looking for your first high-paying software engineer
            job.
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            We're going to give you that information <b>for free</b>. Just
            provide us with your email address to receive the PDF of the curated
            learning material.
          </Typography> */}
          <Link href="#why-us" underline="none">
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "200px", fontSize: "16px" }}
            >
              Learn more
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myteam} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
