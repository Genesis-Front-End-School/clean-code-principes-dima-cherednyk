import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { getSearchWith } from '../../utils/searchHelper';
import './PaginationPages.scss';

type Props = {
  pages: number[];
};

export const PaginationPages: React.FC<Props> = ({ pages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page' || '');

  const setPage = (pageNumber: string): void => {
    setSearchParams(getSearchWith(searchParams, {
      page: pageNumber,
    }));
  };

  return (
    <div className="paginationPages">
      {pages.length < 5
        ? (
          <>
            <button
              type="button"
              className={classNames(
                'paginationPages__page', {
                  'paginationPages__page--isActive': !page || page === '1',
                },
              )}
              onClick={() => setPage('1')}
            >
              1
            </button>
            {
              (pages.slice(1)).map((n: number) => (
                <button
                  type="button"
                  className={classNames(
                    'paginationPages__page', {
                      'paginationPages__page--isActive': page && +page === n,
                    },
                  )}
                  key={n}
                  onClick={() => setPage(String(n))}
                >
                  {n}
                </button>
              ))
            }
          </>
        )
        : (
          <>
            <button
              type="button"
              className={classNames(
                'paginationPages__page', {
                  'paginationPages__page--isActive':
                  !page || (page && page === '1'),
                },
              )}
              onClick={() => setPage('1')}
            >
              1
            </button>

            {page && page !== '1' && page !== '2' && (
              <div
                className="paginationPages__dots"
              >
                ...
              </div>
            )}

            <button
              type="button"
              className={classNames(
                'paginationPages__page', {
                  'paginationPages__page--isActive':
                  page && page !== '1' && +page !== pages.length,
                },
              )}
              onClick={(e) => setPage(e.currentTarget.innerText)}
            >
              {(!page || page === '1') && (
                2
              )}

              {page && +page === pages.length && (
                pages.length - 1
              )}

              {page && (page && page !== '1' && +page !== pages.length) && (
                +page
              )}
            </button>

            {(!page || (page && +page !== pages.length
            && +page !== pages.length - 1)) && (
              <div
                className="paginationPages__dots"
              >
                ...
              </div>
            )}

            <button
              type="button"
              className={classNames(
                'paginationPages__page', {
                  'paginationPages__page--isActive':
                  page && +page === pages.length,
                },
              )}
              onClick={() => setPage(String(pages.length))}
            >
              {pages.length}
            </button>
          </>
        )}
    </div>
  );
};
