import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CourseItem } from '../CourseItem/CourseItem';
import { Error } from '../Error';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination';
import { Course } from '../../types/Course';
import './Courses.scss';
import { visibleCourses } from './visibleCourses';
import { UseCourses } from './hooks/UseCourses';

export const Courses: React.FC = () => {
  const [seachParams] = useSearchParams();
  const page = seachParams.get('page' || '');
  const { loading, courses, error } = UseCourses();

  return (
    <div className="courses">
      <h1 className="courses__title">Courses</h1>

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
