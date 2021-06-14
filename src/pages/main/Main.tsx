import React, { FC, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { SpellCard } from '@components/card/SpellCard';
import { Pagination } from '@components/pagination/Pagination';

import { prepareArrayToPagination } from '@utils/prepareArrayToPagination';
import { ascSort, descSort } from '@utils/spellSort';

import { TRequest, TResult, TViewData } from './types';
import { getSpells } from './api';
import { useStyles } from './styles';

const paginationLength = 6;

export const Main: FC = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<TRequest | undefined>(undefined);
  const [viewData, setViewData] = useState<TViewData>(null);
  const [pagination, setPagination] = useState({ page: 1, totalPageCount: 0 });

  useEffect(() => {
    async function fetchSpells() {
      setLoading(true);
      try {
        const data = await getSpells(query);
        setData(data);
        setOrder('asc');
        updateData(data);
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      fetchSpells();
    }
  }, [query]);

  useEffect(() => {
    if (data) {
      updateData(data);
    }
  }, [order]);

  function updateData(data: TRequest): void {
    const totalCount = Math.ceil(data.results.length / paginationLength);
    const sortedRes = [...data?.results].sort(order === 'asc' ? ascSort : descSort);
    const res = prepareArrayToPagination(sortedRes, totalCount, paginationLength);
    setViewData(res);
    setPagination({ page: 1, totalPageCount: totalCount });
  }

  function setPage(page: number): void {
    const updatePage = { ...pagination, page };
    setPagination(updatePage);
  }

  function handleChangeOrder(event: React.ChangeEvent<{ value: unknown }>): void {
    setOrder(event.target.value as string);
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
      >
        <div className={classes.form}>
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            label="Search..."
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Select
            label="Order by..."
            className={classes.select}
            disabled={!data}
            value={order}
            onChange={handleChangeOrder}
          >
            <MenuItem value="asc">Ascend</MenuItem>
            <MenuItem value="desc">Descend</MenuItem>
          </Select>
          <Button className={classes.submit} size="large" type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      {isLoading && (
        <Typography component="span" color="primary">
          Loading
        </Typography>
      )}
      {data && !isLoading && (
        <>
          <Typography className={classes.count} color="textSecondary">
            You search for:{' '}
            <Typography component="span" className={classes.accentText} color="primary">
              {search}
            </Typography>
            , and find
            <Typography component="span" className={classes.accentText} color="primary">
              {data.count}
            </Typography>
          </Typography>
          <div className={classes.cardsWrapper}>
            {viewData !== null &&
              viewData[pagination.page - 1]?.map(({ index, name, url }: TResult) => (
                <SpellCard key={index} id={index} name={name} url={url} />
              ))}
          </div>
          {pagination.totalPageCount > 1 && (
            <Pagination totalPageCount={pagination.totalPageCount} page={pagination.page} setPage={setPage} />
          )}
        </>
      )}
      {!data && !isLoading && <Typography color="textSecondary">No results</Typography>}
    </div>
  );
};
