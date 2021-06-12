import React, { FC, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useRequest } from '@hooks/UseRequest';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { SpellCard } from '@components/card/SpellCard';
import { Pagination } from '@components/pagination/Pagination';

import { prepareArrayToPagination } from '@utils/prepareArrayToPagination';

type TRequest = {
  count: number;
  results: Array<TResult>;
};

type TResult = {
  index: string;
  name: string;
  url: string;
};

type TViewData = Array<Array<TResult>> | null;

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
    cardsWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

const paginationLength = 7;

export const Main: FC = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [viewData, setViewData] = useState<TViewData>(null);
  const [pagination, setPagination] = useState({ page: 1, totalPageCount: 0 });
  const { data } = useRequest<TRequest>({
    url: query ? 'https://www.dnd5eapi.co/api/spells' : undefined,
    params: { name: query },
  });

  useEffect(() => {
    if (data && data.count > paginationLength) {
      const totalCount = Math.ceil(data.results.length / paginationLength);
      const res = prepareArrayToPagination(data.results, totalCount, paginationLength);
      setViewData(res);
      setPagination({ page: 1, totalPageCount: totalCount });
    }
  }, [data]);

  function setPage(page: number) {
    const updatePage = { ...pagination, page };
    setPagination(updatePage);
  }

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

      {data && data.count > paginationLength ? (
        <>
          <div className={classes.cardsWrapper}>
            {viewData !== null &&
              viewData[pagination.page - 1].map(({ index, name, url }: TResult) => (
                <SpellCard key={index} name={name} url={url} />
              ))}
          </div>
          <Pagination totalPageCount={pagination.totalPageCount} page={pagination.page} setPage={setPage} />
        </>
      ) : (
        <div className={classes.cardsWrapper}>
          {data?.results.map(({ index, name, url }) => (
            <SpellCard key={index} name={name} url={url} />
          ))}
        </div>
      )}
    </div>
  );
};
