import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDebounce } from '@features/hooks/useDebounce';
import { useRequest } from '@features/hooks/UseRequest';
import TextField from '@material-ui/core/TextField';

type TRequest = {
  count: number;
  total: number;
  items: Array<{
    identifier: string;
    title: string;
  }>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        width: '100%',
      },
    },
  }),
);

export const Main: FC = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const { data } = useRequest<TRequest>({
    url: search && (() => debouncedSearch) ? 'https://archive.org/services/search/v1/scrape' : undefined,
    params: { fields: 'title', q: search, count: '100' },
  });

  const classes = useStyles();
  return (
    <div>
      <form
        onSubmit={() => {
          console.log(search);
        }}
        className={classes.root}
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
          You search for: {search}, and get {data.total}
        </p>
      ) : (
        <p>No results</p>
      )}
      <div>
        {data?.items.map((item) => (
          <span key={item.identifier}>
            <p>{item.title}</p>
            <p>/data/{item.identifier}.csv</p>
          </span>
        ))}
      </div>
    </div>
  );
};
