import { Courses } from '../types/Courses';
import { CourseLessons } from '../types/CourseLessons';
import { client } from '../utils/fetchClient';

export const getCourses = async (): Promise<Courses> => {
  return client.get<Courses>('');
};

export const getLesson = async (lessonId: string): Promise<CourseLessons> => {
  return client.get<CourseLessons>(lessonId);
};
