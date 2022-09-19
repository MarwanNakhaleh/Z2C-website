import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>Copyright &copy; {date} | Made with &hearts; by Branson Solutions</Typography>
      <Typography className={classes.footerDate}>
        Template starter code provided by{' '}
        <Link href="https://appseed.us" target="_blank" underline="none">
          AppSeed
        </Link>
      </Typography>
      
    </Box>
  );
};

export default Footer;