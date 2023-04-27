import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as actualCourseActions } from '../../features/actualCourse';
import './CourseItem.scss';
import { CourseMeta } from '../../types/CourseMeta';

type Props = {
  title: string,
  lessonsCount: number,
  previewImageLink: string,
  rating: number,
  meta: CourseMeta,
  id: string,
};

export const CourseItem: React.FC<Props> = (
  {
    title,
    lessonsCount,
    previewImageLink,
    rating,
    meta,
    id,
  },
) => {
  const actualCourse = useAppSelector(state => state.actualCourse);
  const dispatch = useAppDispatch();

  return (
    <div className="courseItem">
      <img className="courseItem__image" src={`${previewImageLink}/cover.webp`} alt="product" />

      <h4 className="courseItem__name">{title}</h4>

      <div className="courseItem__info">
        <p>{`Lessons: ${lessonsCount}`}</p>
        <p>{`Rating: ${rating}/5`}</p>
      </div>

      {meta.skills
        ? (
          <>
            <p className="courseItem__skills">Skills:</p>

            <ul className="courseItem__skillsList">
              {meta.skills.map(skill => (
                <li className="courseItem__skillItem" key={skill}>{skill}</li>
              ))}
            </ul>
          </>
        )
        : ''}

      <Link
        className={classNames(
          'courseItem__button', {
            'courseItem__button--added': id === actualCourse,
          },
        )}
        to={`/courses/${meta.slug}`}
        onClick={() => dispatch(actualCourseActions.setActualCourse(id))}
      >
        {id === actualCourse
          ? 'Continue'
          : 'Start Course'}
      </Link>
    </div>
  );
};
