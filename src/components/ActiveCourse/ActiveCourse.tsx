import classNames from 'classnames';
import React, { useState } from 'react';
import ReactHLS from 'react-hls';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as actualLessonActions } from '../../features/actualLesson';
import { Lesson } from '../../types/Lesson';
import './ActiveCourse.scss';

type Props = {
  lessons: Lesson[],
  title: string,
  description: string,
};

export const ActiveCourse: React.FC<Props> = (
  {
    lessons,
    title,
    description,
  },
) => {
  const [lockedMessage, setLockedMessage] = useState<boolean>(false);
  const [lockedLessonId, setLockedLesonId] = useState<string>('');
  const { actualLesson } = useAppSelector(state => state.actualLesson);
  const activeLesson = lessons.find(item => item.order === 1)?.link;
  const dispatch = useAppDispatch();

  const lockedLessonMessage = (lessonId: string): void => {
    setLockedMessage(true);
    setLockedLesonId(lessonId);

    setTimeout((): void => {
      setLockedLesonId('');
      setLockedMessage(false);
    }, 5000);
  };

  const checkVideo = (): string | null => {
    if (!actualLesson) {
      return null;
    }

    return lessons.some((item: Lesson): boolean => item.link === actualLesson.link)
      ? actualLesson.link
      : null;
  };

  return (
    <div className="activeCourse">
      {checkVideo() || activeLesson
        ? (
          <ReactHLS
            url={checkVideo() || activeLesson}
          />
        )
        : (
          <img
            className="activeCourse__image"
            src={(actualLesson && `${actualLesson?.previewImageLink}/lesson-${actualLesson?.order}.webp`) || `${lessons.find(item => item.order === 1)?.previewImageLink}/lesson-1.webp`}
            alt="previewImage"
          />
        )}

      <div className="activeCourse__info">
        <h1>{title}</h1>

        <p>{description}</p>

        <p>Lessons:</p>

        <ul className="activeCourse__lessons">
          {lessons.sort((a: Lesson, b: Lesson): number => a.order - b.order)
            .map((lesson: Lesson) => (
              <li className="activeCourse__lesson" key={lesson.id}>
                <button
                  className={classNames(
                    'activeCourse__button', {
                      'activeCourse__button--locked': lesson.status === 'locked',
                    },
                  )}
                  type="button"
                  onClick={() => {
                    return lesson.status === 'locked'
                      ? lockedLessonMessage(lesson.id)
                      : dispatch(actualLessonActions.setActualLesson(lesson));
                  }}
                >
                  {`${lesson.order}. ${lesson.title}`}

                  {lockedMessage && lockedLessonId === lesson.id && (
                    <div className="activeCourse__lockedMessage">
                      <p>
                        Complete all required and all optional quests on the topic to unlock video.
                      </p>
                    </div>
                  )}
                </button>

                {!checkVideo() && lesson.order === 1 && lesson.link && (
                  <img className="activeCourse__isPlaying" src="./img/play-button.svg" alt="play" />
                )}

                {actualLesson?.link && checkVideo() === lesson.link && (
                  <img className="activeCourse__isPlaying" src="./img/play-button.svg" alt="play" />
                )}

                {!lesson.link && actualLesson?.previewImageLink === lesson.previewImageLink && (
                  <img className="activeCourse__isPlaying" src="./img/play-button.svg" alt="play" />
                )}

                {actualLesson?.link && actualLesson?.link === lesson.link && (
                  <p className="activeCourse__activeLesson">Last video</p>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
