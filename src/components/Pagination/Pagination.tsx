import React from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import { PaginationPages } from '../PaginationPages';
import './Pagination.scss';

type Props = {
  pages: number[];
};

export const Pagination: React.FC<Props> = ({ pages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page' || '');

  const updatePage = (newPage: string | null) => {
    return setSearchParams(getSearchWith(searchParams, {
      page: newPage,
    }));
  };

  const prevPage = () => {
    return updatePage(page && String(+page - 1));
  };

  const nextPage = () => {
    return updatePage(!page ? '2' : String(+page + 1));
  };

  return (
    <div data-cy="pagination" className="pagination">
      <button
        className={classNames(
          'pagination__button', {
            'pagination__button--disabled': !page || (page && page === '1'),
          },
        )}
        type="button"
        onClick={prevPage}
        disabled={!page || page === '1'}
        data-cy="paginationLeft"
      >
        {page && page !== '1'
          ? (<img src="./img/arrowLeft.svg" alt="prevPage" />)
          : (
            <img
              src="./img/arrowLeftDisabled.svg"
              alt="prevPageDisabled"
            />
          )}
      </button>

      <PaginationPages pages={pages} />

      <button
        className={classNames(
          'pagination__button', {
            'pagination__button--disabled': page && +page === pages.length,
          },
        )}
        type="button"
        onClick={nextPage}
        disabled={page !== null && +page === pages.length}
        data-cy="paginationRight"
      >
        {!page || +page !== pages.length
          ? (<img src="./img/arrowRight.svg" alt="nextPage" />)
          : (
            <img
              src="./img/arrowRightDisabled.svg"
              alt="nextPageDisabled"
            />
          )}
      </button>
    </div>
  );
};
