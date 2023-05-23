import React from 'react';
import { Loader } from 'app-firstnpmlibrary';
import { BackButton } from '../BackButton';
import { Error } from '../Error';
import { ActiveCourse } from '../ActiveCourse/ActiveCourse';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { UseActiveCourse } from './hooks/UseActiveCourse';

export const CoursePage: React.FC = () => {
  const { activeCourse, error } = UseActiveCourse();

  return (
    <div className="container">
      <>
        {!activeCourse && !error
          ? <Loader />
          : (
            <>
              {activeCourse && <Breadcrumbs activeCourseTitle={activeCourse.title} />}

              <BackButton />

              {error && <Error />}

              {activeCourse && (
                <ActiveCourse
                  lessons={activeCourse.lessons}
                  title={activeCourse.title}
                  description={activeCourse.description}
                />
              )}
            </>
          )}
      </>
    </div>
  );
};
