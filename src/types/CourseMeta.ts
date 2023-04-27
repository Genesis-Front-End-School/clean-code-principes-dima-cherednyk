export interface CourseMeta {
  slug: string,
  skills: string[],
  courseVideoPreview: {
    link: string,
    duration: number,
    previewImageLink: string,
  }
}
