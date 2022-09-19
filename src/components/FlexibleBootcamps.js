import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import frustration from "../images/frustration.jpg";
import useStyles from "../styles/styles";

const FlexibleBootcamps = ({ text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer} id="why-us">
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            {text["title"]}
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            {text["intro"]}
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            {text["firstProblem"]}
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            {text["secondProblem"]}
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            {text["thirdProblem"]}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            CONTACT US
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          {/* Photo by Tim Gouw: https://www.pexels.com/photo/man-in-white-shirt-using-macbook-pro-52608/ */}
          <img src={frustration} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlexibleBootcamps;
