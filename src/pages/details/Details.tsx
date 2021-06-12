import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from '@hooks/UseRequest';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

type ParamTypes = {
  id: string;
};

export const Details: FC = () => {
  const { id } = useParams<ParamTypes>();
  const { data } = useRequest({
    url: `https://www.dnd5eapi.co/api/spells/${id}`,
  });

  const classes = useStyles();
  return <div className={classes.root}>{JSON.stringify(data)}</div>;
};
