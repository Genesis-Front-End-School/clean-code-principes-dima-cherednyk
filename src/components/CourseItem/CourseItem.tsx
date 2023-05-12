import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as actualCourseActions } from '../../features/actualCourse';
import { CourseMeta } from '../../types/CourseMeta';
import './CourseItem.scss';

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
  const { darkMode } = useAppSelector(state => state.darkMode);
  const actualCourse = useAppSelector(state => state.actualCourse);
  const dispatch = useAppDispatch();

  return (
    <div className="courseItem">
      <img className="courseItem__image" src={`${previewImageLink}/cover.webp`} alt="product" />

      <h4
        className={
          classNames(
            'courseItem__name', {
              darkMode,
            },
          )
        }
      >
        {title}
      </h4>

      <div
        className={
          classNames(
            'courseItem__info', {
              darkMode,
            },
          )
        }
      >
        <p>{`Lessons: ${lessonsCount}`}</p>
        <p>{`Rating: ${rating}/5`}</p>
      </div>

      {meta.skills
        ? (
          <>
            <p
              className={
                classNames(
                  'courseItem__skills', {
                    darkMode,
                  },
                )
              }
            >
              Skills:
            </p>

            <ul
              className={
                classNames(
                  'courseItem__skillsList', {
                    darkMode,
                  },
                )
              }
            >
              {meta.skills.map((skill: string) => (
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
