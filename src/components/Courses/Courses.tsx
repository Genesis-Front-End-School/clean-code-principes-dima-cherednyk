import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { Loader } from 'app-firstnpmlibrary';
import { CourseItem } from '../CourseItem/CourseItem';
import { Error } from '../Error';
import { Pagination } from '../Pagination';
import { Course } from '../../types/Course';
import { visibleCourses } from './visibleCourses';
import { useAppSelector } from '../../app/hooks';
import { UseCourses } from './hooks/UseCourses';
import './Courses.scss';

export const Courses: React.FC = () => {
  const [seachParams] = useSearchParams();
  const page = seachParams.get('page' || '');
  const { loading, courses, error } = UseCourses();
  const { darkMode } = useAppSelector(state => state.darkMode);

  return (
    <div className="courses">
      <h1
        className={
          classNames(
            'courses__title', {
              darkMode,
            },
          )
        }
      >
        Courses
      </h1>

      {loading
        ? <Loader />
        : (
          <>
            {!loading && error
              ? <Error />
              : (
                <>
                  <div className="courses__main">
                    <ul className="courses__list">
                      {visibleCourses(courses, page).map((course: Course) => (
                        <li key={course.id}>
                          <CourseItem
                            title={course.title}
                            lessonsCount={course.lessonsCount}
                            previewImageLink={course.previewImageLink}
                            rating={course.rating}
                            meta={course.meta}
                            id={course.id}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Pagination coursesAmount={courses.length} />
                </>
              )}
          </>
        )}
    </div>
  );
};
