import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { FC, MutableRefObject, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

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

interface IDescription {
  title: string;
  children: ReactNode;
  icon: string;
}

const Description = ({ title, children, icon }: IDescription) => {
  return (
    <Box textAlign="center">
      <Box
        width="64px"
        p={1}
        sx={{ bgcolor: '#5f7eed', borderRadius: 10 }}
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

interface IAbout {
  scrollToAbout: MutableRefObject<HTMLDivElement | null>;
  scrollToSkills: MutableRefObject<HTMLDivElement | null>;
}

export const About: FC<IAbout> = ({ scrollToAbout, scrollToSkills }) => {
  const [moreSkills, setMoreSkills] = useState(false);
  const { t } = useTranslation();

  return (
    <Container ref={scrollToAbout}>
      <Grid p={8} alignItems="center" justifyContent="center">
        <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={8}>
          <Typography
            variant="h4"
            component="h4"
            textAlign="center"
            sx={{
              fontWeight: 'bold',
              letterSpacing: 4,
            }}
          >
            {t('aboutPage:title-1')}
          </Typography>
        </Box>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            {t('aboutPage:aboutMeText')}
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
            {t('aboutPage:explore')}
          </Typography>
        </Box>

        <Grid mb={4} container spacing={4}>
          <Grid item xs={12} md={6}>
            <Description title={t('aboutPage:design')} icon="design">
              {t('aboutPage:designText')}
            </Description>
          </Grid>
          <Grid item xs={12} md={6}>
            <Description title={t('aboutPage:developement')} icon="dev">
              {t('aboutPage:developementText')}
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
            <Description title={t('aboutPage:maintenance')} icon="maintenance">
              {t('aboutPage:maintenanceText')}
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
                  letterSpacing: 4,
                }}
              >
                {t('aboutPage:skills-title')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid item md={3} sm={6} xs={12}>
              <Typography textAlign="center" variant="h4" mb={6}>
                {t('aboutPage:using-now')}
              </Typography>
            </Grid>
            <Grid container rowSpacing={6} spacing={4}>
              {skillsList.map((title: string) => {
                return <Item key={title} title={title} />;
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
                  {moreSkills ? t('aboutPage:close') : t('aboutPage:readMore')}
                </Button>
              </Grid>

              {moreSkills && (
                <>
                  {moreSkillsList.map((title: string) => {
                    return <Item key={title} title={title} />;
                  })}
                </>
              )}
            </Grid>
          </Grid>
          <Grid item mt={6} xs={12}>
            <Grid item md={3} sm={6} xs={12}>
              <Typography textAlign="center" variant="h4" mb={6}>
                {t('aboutPage:learning')}
              </Typography>
            </Grid>
            <Grid container rowSpacing={6} spacing={4}>
              {learningList.map((title: string) => {
                return <Item key={title} title={title} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
