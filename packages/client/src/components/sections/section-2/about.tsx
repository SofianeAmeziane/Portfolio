import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const skillsList = ['html', 'css', 'sass', 'javascript', 'typescript', 'react'];
const moreSkillsList = ['mongodb', 'mysql', 'git', 'npm'];
const learningList = ['docker', 'kubernetes', 'aws', 'gcp'];

const Item = ({ title }: { title: string }) => {
  return (
    <Grid item md={3} sm={6} xs={12} textAlign="center">
      <Box
        textAlign="center"
        component="img"
        alt={`logo ${title.toUpperCase()}`}
        src={`/about-icons/icons8-${title}.svg`}
      />
      <Typography variant="h5">{title.toUpperCase()}</Typography>
    </Grid>
  );
};

const Description = ({ title, children }: { title: string; children: any }) => {
  return (
    <>
      <Typography variant="h4" mb={2}>
        {title}
      </Typography>
      <Typography component="div" variant="body1" color="text.secondary">
        {children}
      </Typography>
    </>
  );
};

export const About = () => {
  const [moreSkills, setMoreSkills] = useState(false);
  return (
    <Box p={8}>
      <Container>
        <Grid
          container
          spacing={6}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: 'bold',
                border: 8,
                p: '30px 80px',
                textAlign: 'center',
              }}
            >
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center">
              Having a master's degree in computer science and more than 4 years
              of experience as a Full Stack developer. I had the opportunity to
              work with the JAVA ecosystem before specializing in JavaScript
              technologies, particularly with ReactJS, NextJS and NodeJs.
              Curious and passionate about programming and problem solving, I am
              always ready for new challenges and new technologies to discover.
            </Typography>
          </Grid>
          <Grid item mb={10}>
            <Typography
              variant="h5"
              sx={{
                borderRight: 3,
                borderLeft: 3,
                p: '10px 20px',
              }}
            >
              EXPLORE
            </Typography>
          </Grid>

          <Grid mb={4} container spacing={4}>
            <Grid item xs={12} md={6}>
              <Description title="Design">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley
              </Description>
            </Grid>
            <Grid item xs={12} md={6}>
              <Description title="Developement">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley
              </Description>
            </Grid>
          </Grid>
          <Grid
            width={{ sx: '100%', md: '50%' }}
            mt={{ md: 10 }}
            mb={{ md: 10, sx: 4 }}
          >
            <Description title="Maintenance">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </Description>
          </Grid>
          <Grid item mb={4}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: 'bold',
                border: 8,
                p: '30px 80px',
                textAlign: 'center',
              }}
            >
              Skills
            </Typography>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Grid item md={3} sm={6} xs={12}>
                <Typography textAlign="center" variant="h4" mb={6}>
                  Using Now:
                </Typography>
              </Grid>
              <Grid container rowSpacing={6} spacing={4}>
                {skillsList.map((title: string) => {
                  return <Item title={title} />;
                })}

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
                    {moreSkillsList.map((title: string) => {
                      return <Item title={title} />;
                    })}
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
                {learningList.map((title: string) => {
                  return <Item title={title} />;
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
