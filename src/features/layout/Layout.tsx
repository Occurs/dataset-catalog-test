import React, { FC, ReactNode } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      maxWidth: '1024px',
      margin: '0 auto',
    },
  }),
);

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
