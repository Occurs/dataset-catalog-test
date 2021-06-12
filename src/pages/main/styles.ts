import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        width: '100%',
        padding: '0 12px',
      },
    },
    form: {
      display: 'flex',
    },
    select: {
      width: '120px',
      marginLeft: '8px',
    },
    submit: {
      width: '97px',
      marginLeft: '8px',
    },
    cardsWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    count: {
      display: 'flex',
    },
    accentText: {
      marginLeft: '0.3rem',
    },
  }),
);
