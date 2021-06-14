import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

type TPagination = {
  totalPageCount: number;
  page: number;
  setPage: (page: number) => void;
};

export const Pagination = ({ totalPageCount, page, setPage }: TPagination): JSX.Element => {
  const onPageChangeHandler = (page: number) => () => {
    setPage(page);
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around" width="70%" margin="24px auto 0 auto">
      <Button size="small" color="primary" disabled={page === 1} onClick={onPageChangeHandler(1)}>
        First
      </Button>
      <Button size="small" color="primary" disabled={page === 1} onClick={onPageChangeHandler(page - 1)}>
        Previous
      </Button>
      <Typography>
        <Box component="span" margin="0 12px" fontSize="12px" width="100%">
          {`Page ${page} of ${totalPageCount}`}
        </Box>
      </Typography>
      <Button size="small" color="primary" disabled={page === totalPageCount} onClick={onPageChangeHandler(page + 1)}>
        Next
      </Button>
      <Button
        size="small"
        color="primary"
        disabled={page === totalPageCount}
        onClick={onPageChangeHandler(totalPageCount)}
      >
        Last
      </Button>
    </Box>
  );
};
