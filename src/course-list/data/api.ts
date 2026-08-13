import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import { Course } from './types';

export async function getCourseList(): Promise<Course[]> {
  const courses = await getAuthenticatedHttpClient()
    .get(`${getConfig().LMS_BASE_URL}/api/list_courses/courses/`);
  return courses.data.results;
}
