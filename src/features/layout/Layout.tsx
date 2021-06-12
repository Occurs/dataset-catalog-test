import React, { FC, ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Logo from '@assets/logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: '100%',
      position: 'fixed',
      top: '0',
      backgroundColor: theme.palette.background.default,
      zIndex: 20,
      boxShadow: '0px -5px 5px -5px rgba(255, 255, 255, 0.6) inset',
    },
    headerContent: {
      display: 'flex',
      padding: '0 12px',
      maxWidth: '1024px',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px',
      margin: '0 auto 12px auto',
    },
    logo: {
      height: '60px',
      width: '60px',
    },
    root: {
      display: 'flex',
      maxWidth: '1024px',
      margin: '0 auto',
      paddingTop: '100px',
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
        <div className={classes.headerContent}>
          <img alt="logo" src={Logo} className={classes.logo} />
          <Typography variant="h4" component="h4">
            D&#38;D Spells
          </Typography>
        </div>
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
