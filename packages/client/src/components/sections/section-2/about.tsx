import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import React, { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));
export const About = () => {
  const [moreSkills, setMoreSkills] = useState(false);
  return (
    <Box p={8}>
      <Container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              border: 8,
              p: '30px 80px',
              width: '20%',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
              About Me
            </Typography>
          </Box>
          <Typography variant="body1" mt={8} pt={3} align="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an{' '}
          </Typography>
          <Typography
            variant="h5"
            pt={3}
            mt={5}
            sx={{
              borderRight: 3,
              borderLeft: 3,
              p: '10px 20px',
            }}
          >
            EXPLORE
          </Typography>
          <Grid mt={10} mb={4} container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" mb={2}>
                Design
              </Typography>
              <Typography
                component="div"
                variant="body1"
                color="text.secondary"
              >
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" mb={2}>
                Developement
              </Typography>
              <Typography
                component="div"
                variant="body1"
                color="text.secondary"
              >
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley
              </Typography>
            </Grid>
          </Grid>
          <Grid
            width={{ sx: '100%', md: '50%' }}
            mt={{ md: 10 }}
            mb={{ md: 10, sx: 4 }}
          >
            <Typography variant="h4" mb={2}>
              Maintenance
            </Typography>
            <Typography component="div" variant="body1" color="text.secondary">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </Typography>
          </Grid>
          <Box
            mt={{ md: 6 }}
            mb={{ md: 10 }}
            sx={{
              border: 8,
              p: '30px 80px',
              width: '20%',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
              Skills
            </Typography>
          </Box>
          <Grid container mt={4}>
            <Grid item xs={12}>
              <Grid item md={3} sm={6} xs={12}>
                <Typography textAlign="center" variant="h4" mb={6}>
                  Using Now:
                </Typography>
              </Grid>
              <Grid container rowSpacing={6} spacing={4}>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Html'}
                    src={'/about-icons/icons8-html.svg'}
                  />
                  <Typography variant="h5">HTML</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Css'}
                    src={'/about-icons/icons8-css.svg'}
                  />
                  <Typography variant="h5">CSS</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Sass'}
                    src={'/about-icons/icons8-sass.svg'}
                  />
                  <Typography variant="h5">SASS</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Zenika'}
                    src={'/about-icons/icons8-javascript.svg'}
                  />
                  <Typography variant="h5">JAVASCRIPT</Typography>
                </Grid>

                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Typescript'}
                    src={'/about-icons/icons8-typescript.svg'}
                  />
                  <Typography variant="h5">TYPESCRIPT</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Zenika'}
                    src={'/about-icons/icons8-react.svg'}
                  />
                  <Typography variant="h5">React</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Zenika'}
                    src={'/about-icons/icons8-node-js.svg'}
                  />
                  <Typography variant="h5">NODE JS</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Zenika'}
                    src={'/about-icons/icons8-material-ui.svg'}
                  />
                  <Typography variant="h5">MATERIAL Ui</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button
                    size="large"
                    onClick={() => {
                      setMoreSkills(!moreSkills);
                    }}
                  >
                    {moreSkills ? 'Close' : 'READ MORE'}
                  </Button>
                </Grid>

                {moreSkills && (
                  <>
                    <Grid item md={3} sm={6} xs={12} textAlign="center">
                      <Box
                        textAlign="center"
                        component="img"
                        alt={'logo MongoDb'}
                        src={'/about-icons/icons8-mongodb.svg'}
                      />
                      <Typography variant="h5">MONGO DB</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} textAlign="center">
                      <Box
                        textAlign="center"
                        component="img"
                        alt={'logo MySql'}
                        src={'/about-icons/icons8-mysql.svg'}
                      />
                      <Typography variant="h5">MY SQL</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} textAlign="center">
                      <Box
                        textAlign="center"
                        component="img"
                        alt={'logo Git'}
                        src={'/about-icons/icons8-git.svg'}
                      />
                      <Typography variant="h5">GIT</Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} textAlign="center">
                      <Box
                        textAlign="center"
                        component="img"
                        alt={'logo Npm'}
                        src={'/about-icons/icons8-npm.svg'}
                      />
                      <Typography variant="h5">NPM</Typography>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
            <Grid item mt={6} xs={12}>
              <Grid item md={3} sm={6} xs={12}>
                <Typography textAlign="center" variant="h4" mb={6}>
                  Learning:
                </Typography>
              </Grid>
              <Grid container rowSpacing={6} spacing={4}>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo dOCKER'}
                    src={'/about-icons/icons8-docker.svg'}
                  />
                  <Typography variant="h5">DOCKER</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo kUBERNETES'}
                    src={'/about-icons/icons8-kubernetes.svg'}
                  />
                  <Typography variant="h5">KUBERNETES</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Zenika'}
                    src={'/about-icons/icons8-aws.svg'}
                  />
                  <Typography variant="h5">AWS</Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign="center">
                  <Box
                    textAlign="center"
                    component="img"
                    alt={'logo Gcp'}
                    src={'/about-icons/icons8-google-cloud.svg'}
                  />
                  <Typography variant="h5">GCP</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
