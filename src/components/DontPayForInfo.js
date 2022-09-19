import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import learnToCode from '../images/learn-to-code.jpg';
import useStyles from '../styles/styles';

const DontPayForInfo = ({text}) => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer} id="why-us">
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img src={learnToCode} alt="My Team" className={classes.largeImage} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            {text["title"]}
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            {text["problems"]}
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            {text["costs"]}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            CONTACT US
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DontPayForInfo;