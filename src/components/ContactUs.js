import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import useStyles from '../styles/styles';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, firstName });
  };

  return (
    <Box sx={{flexGrow: 1}} className={classes.formContainer}>
      <Typography variant="h4" className={classes.formHeading}>
        Get a free curated curriculum emailed to you
      </Typography>
      <Box
        className={classes.form}
        component="form"
        noValidate
        autoComplete="off"
        container display='flex' alignItems='center' justifyContent="center" flexDirection='column'
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: '200px', fontSize: '16px' }}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;