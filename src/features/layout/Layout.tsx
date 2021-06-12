import React, { FC, ReactNode } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Logo from '@assets/logo.png';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      display: 'flex',
      maxWidth: '1024px',
      margin: '0 auto 12px auto',
      height: '60px',
      padding: '0 12px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      height: '60px',
      width: '60px',
    },
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
    <>
      <header className={classes.header}>
        <img alt="logo" src={Logo} className={classes.logo} />
        <Typography variant="h4" component="h4">
          D&#38;D Spells
        </Typography>
      </header>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </div>
    </>
  );
};
