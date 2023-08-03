import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { useForm } from 'react-hook-form';

export const ContactMe = ({ scrollToContactMe }: any) => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);

  const form = useRef<any>();

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_rxni9zn',
        'template_4etsks6',
        form.current,
        '_oGhlsQQGJYDUIKbo',
      )
      .then(
        (result) => {
          console.log(result.text);
          handleOpen();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid
      ref={scrollToContactMe}
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item p={8} textAlign="center" xs={12} sm={8} md={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={4}>
          <Typography
            variant="h4"
            component="h4"
            textAlign="center"
            sx={{
              fontWeight: 'bold',
              letterSpacing: 4,
            }}
          >
            CONTACT
          </Typography>
        </Box>
        <Grid item p={4}>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <TextField
              {...register('Name')}
              type="text"
              variant="filled"
              color="secondary"
              label="Name"
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              {...register('email')}
              type="email"
              variant="filled"
              color="secondary"
              label="Email"
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              {...register('phoneNumber')}
              type="number"
              variant="filled"
              color="secondary"
              label="Phone Number"
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              {...register('message')}
              type="text"
              variant="filled"
              color="secondary"
              label="Message"
              fullWidth
              required
              sx={{ mb: 4 }}
              multiline
              rows={4}
            />
            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          </form>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Thank you, your submission has been sent.
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Grid>
  );
};
