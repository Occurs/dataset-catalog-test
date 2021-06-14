import React, { FC } from 'react';
import { Link as RLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { routes } from '@features/router/routes';

import { useSpellDetails } from './api';
import { useStyles } from './styles';

type ParamTypes = {
  id: string;
};

export const Details: FC = () => {
  const classes = useStyles();
  const { id } = useParams<ParamTypes>();
  const { data, error } = useSpellDetails(id);
  const isLoading = !data && !error;

  if (isLoading) {
    return (
      <div className={classes.root}>
        <Typography component="span" color="primary">
          Loading
        </Typography>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className={classes.root}>
      <RLink className={classes.link} to={routes.main}>
        <Typography component="span" color="primary">
          Main page
        </Typography>
      </RLink>
      <Typography variant="h2" component="h2">
        {data?.name}
      </Typography>
      <Typography>{data?.desc.map((text) => text)}</Typography>
      <Typography>{data?.higher_level.map((text) => text)}</Typography>
      <Typography>Range - {data?.range}</Typography>
      <Typography>Duration - {data?.duration}</Typography>
      <Typography>School - {data?.school.name}</Typography>
      <Typography>
        Classes -{' '}
        {data?.classes.map((cl, index) => {
          if (index === 0) {
            return cl.name;
          }
          return `, ${cl.name}`;
        })}
      </Typography>
    </div>
  );
};
