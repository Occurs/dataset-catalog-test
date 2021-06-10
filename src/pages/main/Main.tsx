import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useRequest } from '@features/hooks/UseRequest';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { SpellCard } from '@components/card/SpellCard';

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
    form: {
      display: 'flex',
    },
    submit: {
      margin: '0 0 0 4px',
    },
  }),
);

export const Main: FC = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const { data } = useRequest<TRequest>({
    url: query ? 'https://www.dnd5eapi.co/api/spells' : undefined,
    params: { name: query },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(search);
        }}
        noValidate
        autoComplete="off"
        className={classes.form}
      >
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          label="Spells Search..."
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className={classes.submit} size="large" type="submit" variant="contained" color="primary">
          Submit
        </Button>
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
          <SpellCard key={item.index} name={item.name} url={item.url} />
          // <span key={item.index}>
          //   <p>{item.name}</p>
          //   <p>{item.url}</p>
          // </span>
        ))}
      </div>
    </div>
  );
};
