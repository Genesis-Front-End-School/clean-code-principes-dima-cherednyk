import React from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import { PaginationPages } from '../PaginationPages';
import { coursesPerPage } from '../Courses/visibleCourses';
import { useAppSelector } from '../../app/hooks';
import './Pagination.scss';

type Props = {
  coursesAmount: number;
};

export const Pagination: React.FC<Props> = ({ coursesAmount }) => {
  const { darkMode } = useAppSelector(state => state.darkMode);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page' || '');
  const pages = Array.from(Array(Math
    .ceil(coursesAmount
      / coursesPerPage) + 1)
    .keys()).slice(1);

  const updatePage = (newPage: string | null): void => {
    return setSearchParams(getSearchWith(searchParams, {
      page: newPage,
    }));
  };

  const prevPage = (): void => {
    return updatePage(page && String(+page - 1));
  };

  const nextPage = (): void => {
    return updatePage(!page ? '2' : String(+page + 1));
  };

  return (
    <div data-cy="pagination" className="pagination">
      <button
        className={classNames(
          'pagination__button', {
            'pagination__button--disabled': !page || (page && page === '1'),
            darkMode,
          },
        )}
        type="button"
        onClick={prevPage}
        disabled={!page || page === '1'}
        data-cy="paginationLeft"
      >
        {page && page !== '1'
          ? (<img src={darkMode ? './img/arrowLeftWhite.svg' : './img/arrowLeft.svg'} alt="prevPage" />)
          : (
            <img
              src={darkMode ? './img/arrowLeft.svg' : './img/arrowLeftDisabled.svg'}
              alt="prevPageDisabled"
            />
          )}
      </button>

      <PaginationPages pages={pages} />

      <button
        className={classNames(
          'pagination__button', {
            'pagination__button--disabled': page && +page === pages.length,
            darkMode,
          },
        )}
        type="button"
        onClick={nextPage}
        disabled={page !== null && +page === pages.length}
        data-cy="paginationRight"
      >
        {!page || +page !== pages.length
          ? (<img src={darkMode ? './img/arrowRightWhite.svg' : './img/arrowRight.svg'} alt="nextPage" />)
          : (
            <img
              src={darkMode ? './img/arrowRight.svg' : './img/arrowRightDisabled.svg'}
              alt="nextPageDisabled"
            />
          )}
      </button>
    </div>
  );
};
