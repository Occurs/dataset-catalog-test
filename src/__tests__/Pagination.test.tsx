import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { Pagination } from '../components/pagination/Pagination';

describe('Paginator Component', () => {
  const props = {
    totalPageCount: 100,
    page: 5,
    setPage: jest.fn(),
  };

  test('snapshot', () => {
    const component = renderer.create(<Pagination {...props} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render', () => {
    const { getByText } = render(<Pagination {...props} />);
    getByText('Page 5 of 100');
  });

  test('render with small itemsLength', () => {
    const propsForCurrentTest = {
      ...props,
      totalPageCount: 8,
    };
    const { getByText } = render(<Pagination {...propsForCurrentTest} />);
    getByText('Page 5 of 8');
  });

  test('render last page', async () => {
    const { getByText } = render(<Pagination {...props} page={7} />);
    getByText('Page 7 of 100');
  });

  test('click on previous page button', () => {
    const { getByText } = render(<Pagination {...props} />);
    const previous = getByText('Previous');
    fireEvent.click(previous);
    expect(props.setPage).toHaveBeenCalledTimes(1);
    expect(props.setPage).toHaveBeenCalledWith(4);
  });

  test('click on next page button', () => {
    const { getByText } = render(<Pagination {...props} />);
    const next = getByText('Next');
    fireEvent.click(next);
    expect(props.setPage).toHaveBeenCalledTimes(2);
    expect(props.setPage).toHaveBeenCalledWith(6);
  });

  test('click on first page button', () => {
    const { getByText } = render(<Pagination {...props} />);
    const first = getByText('First');
    fireEvent.click(first);
    expect(props.setPage).toHaveBeenCalledTimes(3);
    expect(props.setPage).toHaveBeenCalledWith(1);
  });

  test('click on last page button', () => {
    const { getByText } = render(<Pagination {...props} />);
    const last = getByText('Last');
    fireEvent.click(last);
    expect(props.setPage).toHaveBeenCalledTimes(4);
    expect(props.setPage).toHaveBeenCalledWith(100);
  });
});
