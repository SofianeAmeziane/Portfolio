import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Chip, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PlaceIcon from '@mui/icons-material/Place';
export default function ControlledAccordions() {
  const [panel, setPanel] = React.useState<number>();

  const handleChange = (value: number) => {
    if (panel !== value) {
      setPanel(value);
    } else {
      setPanel(0);
    }
  };

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Grid key={1} item xs={12} sm={6} md={7}>
        <Grid
          container
          mb={1}
          sx={{ borderRadius: 1, p: 1, pl: 2, bgcolor: '#740cdc' }}
          alignItems="center"
          onClick={() => handleChange(1)}
        >
          <Grid xs={9} textAlign="start">
            <Typography
              sx={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Software Engineer @ Saimon Global Ltd
            </Typography>
          </Grid>
          <Grid
            xs={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              2020 - 2021
            </Typography>
            <IconButton aria-label="Github.com">
              <AddIcon color="action" fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>
        {panel === 1 && (
          <Grid
            container
            alignItems={{ xs: 'start', md: 'center' }}
            direction={{ xs: 'column-reverse', md: 'row' }}
            justifyContent="space-between"
            p={2}
            sx={{ borderRadius: 1, bgcolor: '#241d41' }}
          >
            <Grid item xs={9}>
              <Box>
                <Typography
                  sx={{
                    color: '#ffffffbf',
                    display: 'flex',
                  }}
                >
                  <PlaceIcon sx={{ color: '#ffffffbf' }} fontSize="medium" />{' '}
                  Dhaka, Bangladesh
                </Typography>
              </Box>
              <Typography component="body" color="white">
                Developing front-end and mobile app solutions (B2C, B2B) in
                Travel Tech on React/Next.js framework and Flutter SDK.
              </Typography>
              <Grid container mt={2} rowSpacing={1} columnSpacing={1}>
                <Grid item>
                  <Chip
                    label="Javascript"
                    sx={{
                      bgcolor: '#2c3599',
                      color: '#ffffffbf',
                      fontFamily: 'Roboto Mono, sans-serif',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label="Javascript"
                    sx={{
                      bgcolor: '#2c3599',
                      color: '#ffffffbf',
                      fontFamily: 'Roboto Mono, sans-serif',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label="Javascript"
                    sx={{
                      bgcolor: '#2c3599',
                      color: '#ffffffbf',
                      fontFamily: 'Roboto Mono, sans-serif',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label="Javascript"
                    sx={{
                      bgcolor: '#2c3599',
                      color: '#ffffffbf',
                      fontFamily: 'Roboto Mono, sans-serif',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label="Javascript"
                    sx={{
                      bgcolor: '#2c3599',
                      color: '#ffffffbf',
                      fontFamily: 'Roboto Mono, sans-serif',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label="Javascript"
                    sx={{
                      bgcolor: '#2c3599',
                      color: '#ffffffbf',
                      fontFamily: 'Roboto Mono, sans-serif',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Chip
                    label="Javascript"
                    sx={{
                      bgcolor: '#2c3599',
                      color: '#ffffffbf',
                      fontFamily: 'Roboto Mono, sans-serif',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Box
                textAlign="center"
                component="img"
                alt={`log`}
                src={`/about-icons/icons8-npm.svg`}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
