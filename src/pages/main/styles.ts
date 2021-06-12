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
    submit: {
      margin: '0 0 0 4px',
    },
    cardsWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);
