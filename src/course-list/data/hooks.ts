import { useQuery } from '@tanstack/react-query';
import { getCourseList } from './api';

export const useCourseList = () => useQuery({
  queryKey: ['course-list'],
  queryFn: getCourseList,
});
