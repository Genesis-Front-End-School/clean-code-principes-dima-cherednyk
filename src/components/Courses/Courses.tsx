import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CourseItem } from '../CourseItem/CourseItem';
import { Error } from '../Error';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination';
import { UseCourses } from './hooks/UseCourses';
import { visibleCourses } from './visibleCourses';
import { Course } from '../../types/Course';
import './Courses.scss';

export const Courses: React.FC = () => {
  const [seachParams] = useSearchParams();
  const page = seachParams.get('page' || '');
  const { courses, loading, error } = UseCourses();

  return (
    <div className="courses">
      {loading
        ? <Loader />
        : (
          <>
            {!loading && error
              ? <Error />
              : (
                <>
                  <h1 className="courses__title">Courses</h1>

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
