import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useRequest } from '@features/hooks/UseRequest';
import TextField from '@material-ui/core/TextField';

type TRequest = {
  count: number;
  results: Array<{
    index: string;
    name: string;
    url: string;
  }>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        width: '100%',
        padding: '0 12px',
      },
    },
  }),
);

export const Main: FC = () => {
  const [search, setSearch] = useState('');
  const { data } = useRequest<TRequest>({
    url: search ? 'https://www.dnd5eapi.co/api/spells' : undefined,
    params: { name: search },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(search);
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          label="Search..."
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      {data ? (
        <p>
          You search for: {search}, and get {data.count}
        </p>
      ) : (
        <p>No results</p>
      )}
      <div>
        {data?.results.map((item) => (
          <span key={item.index}>
            <p>{item.name}</p>
            <p>{item.url}</p>
          </span>
        ))}
      </div>
    </div>
  );
};
