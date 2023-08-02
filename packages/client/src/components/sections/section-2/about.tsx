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

const Description = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: any;
  icon: string;
}) => {
  return (
    <Box textAlign="center">
      <Box
        width="64px"
        p={1}
        sx={{ bgcolor: '#2ECEA3', borderRadius: 10 }}
        textAlign="center"
        component="img"
        alt={'logo Zenika'}
        src={`/about-icons/web-${icon}.svg`}
      />
      <Typography variant="h4" mb={2}>
        {title}
      </Typography>
      <Typography component="div" variant="body1" color="text.secondary">
        {children}
      </Typography>
    </Box>
  );
};

export const About = ({ scrollToAbout, scrollToSkills }: any) => {
  const [moreSkills, setMoreSkills] = useState(false);
  return (
    <Container ref={scrollToAbout}>
      <Grid
        p={8}
        spacing={6}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={8}>
          <Typography
            variant="h4"
            component="h4"
            textAlign="center"
            sx={{
              fontWeight: 'bold',
              border: 6,
              p: '15px 70px',
              letterSpacing: 8,
            }}
          >
            ABOUT ME
          </Typography>
        </Box>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Having a master's degree in computer science and more than 4 years
            of experience as a Full Stack developer. I had the opportunity to
            work with the JAVA ecosystem before specializing in JavaScript
            technologies, particularly with ReactJS, NextJS and NodeJs. Curious
            and passionate about programming and problem solving, I am always
            ready for new challenges and new technologies to discover.
          </Typography>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={8} mt={6}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              borderRight: 3,
              borderLeft: 3,
              p: '10px 30px',
              letterSpacing: 1,
            }}
          >
            EXPLORE
          </Typography>
        </Box>

        <Grid mb={4} container spacing={4}>
          <Grid item xs={12} md={6}>
            <Description title="Design" icon="design">
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me (~_^). I'm committed to creating fluent user
              experiences while staying fashionable.
            </Description>
          </Grid>
          <Grid item xs={12} md={6}>
            <Description title="Developement" icon="dev">
              In building JavaScript applications, I'm equipped with just the
              right tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale —
              performance and scalabilty are priorities on my radar.
            </Description>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid
            item
            width={{ sx: '100%', md: '50%' }}
            mt={{ md: 4 }}
            mb={{ md: 4 }}
          >
            <Description title="Maintenance" icon="maintenance">
              Your content strategy might be on point but it’s always a good
              idea to improve it by creating new types of content. Your web
              content also needs to be up to date. If you wrote a post that was
              published years ago, it might not be relevant right now and some
              of the information might need to be updated.
            </Description>
          </Grid>
        </Box>

        <Grid ref={scrollToSkills} container>
          <Grid pt={2} item xs={12}>
            <Box
              sx={{ display: 'flex', justifyContent: 'center' }}
              mb={8}
              mt={6}
            >
              <Typography
                variant="h4"
                component="h4"
                textAlign="center"
                sx={{
                  fontWeight: 'bold',
                  border: 6,
                  p: '15px 70px',
                  letterSpacing: 8,
                }}
              >
                SKILLS
              </Typography>
            </Box>
          </Grid>
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
  );
};
