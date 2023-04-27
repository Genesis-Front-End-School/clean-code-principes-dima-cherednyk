import { Course } from '../../types/Course';

export const coursesPerPage = 10;

export const visibleCourses = (courses: Course[], page: string | null) => {
  return courses.slice(
    (!page
      ? 0
      : (+page - 1) * coursesPerPage),
    (coursesPerPage * (!page ? 1 : +page)),
  );
};
