import React from "react";
import LessonBuilder from "./LessonBuilder";
import FormFieldLayout from "./FormFieldLayout";

const CourseBuilder = ({course, onCreate, onCancel}) => {
  return (
    <div className="course-builder">
      <div className="crs-title">Course Builder</div>
      <FormFieldLayout title="Title">
        <input
          type="text"
          value={"Introduction to React.js"}
          onChange={e => {}}
        />
      </FormFieldLayout>
      <FormFieldLayout title="Category">
        <select value={"JavaScript"} onChange={e => {}}>
          <option>UI/UX</option>
          <option>JavaScript</option>
          <option>PHP</option>
          <option>Database</option>
          <option>Node.js</option>
        </select>
      </FormFieldLayout>
      <LessonBuilder
        lessons={[]}
        onAdd={lesson => {}}
        onRemove={lessonId => {}}
      />
      <button className="course-action-btn" onClick={() => {}}>
        Done
      </button>
      <button className="course-action-btn" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default CourseBuilder;
