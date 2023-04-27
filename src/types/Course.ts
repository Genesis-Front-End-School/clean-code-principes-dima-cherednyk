import { CourseMeta } from './CourseMeta';

export interface Course {
  id: string,
  title: string,
  tags: string[],
  launchDate: Date,
  status: string,
  description: string,
  duration: number,
  lessonsCount: number,
  containsLockedLessons: boolean,
  previewImageLink: string,
  rating: number,
  meta: CourseMeta,
}
