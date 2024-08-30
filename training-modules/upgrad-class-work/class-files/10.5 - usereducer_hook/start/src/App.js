import React, {useState} from "react";
import CourseBuilder from "./components/CourseBuilder";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  const [showCourseBuilder, setShowCourseBuilder] = useState(false);
  const [course, setCourse] = useState({
    courseId: "crs-01",
    courseTitle: "Introduction to React.js",
    category: "JavaScript",
    lessonCount: 3,
    lessons: [
      {
        lessonId: "lss-01",
        title: "Pre-requisites",
        type: "text"
      },
      {
        lessonId: "lss-02",
        title: "Welcome to the course",
        type: "video"
      },
      {
        lessonId: "lss-03",
        title: "What is React.js?",
        type: "video"
      }
    ]
  });
  return (
    <div className="container">
      {showCourseBuilder ? (
        <CourseBuilder
          course={course}
          onCreate={c => {
            setCourse(c);
            setShowCourseBuilder(false);
          }}
          onCancel={() => setShowCourseBuilder(false)}
        />
      ) : (
        <CourseDetails
          course={course}
          createCourse={() => setShowCourseBuilder(true)}
          onEdit={() => setShowCourseBuilder(true)}
        />
      )}
    </div>
  );
};

export default App;
