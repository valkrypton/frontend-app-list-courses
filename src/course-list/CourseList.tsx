import {
  Alert, Card, CardGrid, Container, Spinner,
} from '@openedx/paragon';
import { useCourseList } from './data/hooks';

export const CourseList = () => {
  const { data: courses, isLoading, isError } = useCourseList();
  if (isLoading) {
    return (
      <Container className="py-5 d-flex justify-content-center">
        <Spinner animation="border" screenReaderText="loading courses" />
      </Container>
    );
  }
  if (isError) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Something went wrong while loading your courses.</Alert>
      </Container>
    );
  }
  if (!courses?.length) {
    return (
      <Container className="py-5">
        <Alert variant="info">You aren&apos;tt enrolled in any courses yet.</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <CardGrid columnSizes={{ xs: 12, sm: 6, lg: 4 }}>
        {courses.map((course) => (
          <Card key={course.courseId} isCickable>
            <Card.Header title={course.title} />
            <Card.Body>
              {course.description}
              {/* <Card.Section> */}
              {/*   {course.courseUrl && ( */}
              {/*     <Card.Footer> */}
              {/*       <a href={course.courseUrl}>View course</a> */}
              {/*     </Card.Footer> */}
              {/*   )} */}
              {/* </Card.Section> */}
            </Card.Body>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};
