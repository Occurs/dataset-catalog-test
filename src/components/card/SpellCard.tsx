import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: '8px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    more: {
      height: '100%',
    },
    link: {
      height: '100%',
      textDecoration: 'none',
    },
  }),
);

type LayoutProps = {
  name: string;
  url: string;
  id: string;
};

export const SpellCard: FC<LayoutProps> = ({ name, url, id }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {url}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.link} to={`/${id}`}>
          <Button className={classes.more} size="small">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
