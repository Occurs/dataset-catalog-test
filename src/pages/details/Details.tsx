import React, { FC } from 'react';
import Link from '@material-ui/core/Link';
import { Link as RLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useRequest } from '@hooks/UseRequest';
import Typography from '@material-ui/core/Typography';
import { TRequest } from './types';

import { useStyles } from './styles';

type ParamTypes = {
  id: string;
};

export const Details: FC = () => {
  const classes = useStyles();
  const { id } = useParams<ParamTypes>();
  const { data } = useRequest<TRequest>({
    url: `https://www.dnd5eapi.co/api/spells/${id}`,
  });

  if (!data) return null;

  return (
    <div className={classes.root}>
      <RLink to="/">
        <Link href="#">Main page</Link>
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
