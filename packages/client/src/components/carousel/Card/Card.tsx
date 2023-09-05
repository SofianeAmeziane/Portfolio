import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Grid } from '@mui/material';

interface IActionAreaCard {
  jobTitle: string;
  description: string;
  image: string;
  skills: string[];
}

const ActionAreaCard: FC<IActionAreaCard> = ({
  jobTitle,
  description,
  image,
  skills,
}) => {
  return (
    <Card sx={{ minHeight: '70vh' }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: '120px' }}
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ minHeight: '24vh' }}>
          <Typography gutterBottom variant="h5" component="div">
            {jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={1}
          p={2}
          alignItems="flex-end"
        >
          {skills.map((item: string) => (
            <Grid key={item} item xs={6} md={4}>
              <Chip
                label={item}
                sx={{
                  width: '100%',
                  bgcolor: '#2c3599',
                  color: '#ffffffbf',
                  fontFamily: 'Roboto Mono, sans-serif',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
