import { useEffect } from 'react';
import * as coursesActions from '../../../features/courses';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

export const UseCourses = () => {
  const dispatch = useAppDispatch();
  const { courses, loading, error } = useAppSelector(state => state.courses);

  useEffect(() => {
    dispatch(coursesActions.init());
  }, []);

  return { courses, loading, error };
};
