import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLesson } from '../../../api/newCourses';
import { CourseLessons } from '../../../types/CourseLessons';
import { useAppSelector } from '../../../app/hooks';

export const UseActiveCourse = () => {
  const [activeCourse, setActiveCourse] = useState<CourseLessons | null>(null);
  const [error, setError] = useState<string>('');
  const { courses } = useAppSelector(state => state.courses);
  const location = useLocation();
  const activeCourseItem = courses.find(item => item.meta.slug === location.pathname.slice(9));

  useEffect(() => {
    const loadData = async () => {
      try {
        if (activeCourseItem) {
          const loadLessons = await getLesson(activeCourseItem.id);

          setActiveCourse(loadLessons);
        }
      } catch {
        setError('We can not load data.');
      }
    };

    loadData();
  }, [activeCourseItem]);

  if (!activeCourse) {
    return { error };
  }

  return { activeCourse };
};
