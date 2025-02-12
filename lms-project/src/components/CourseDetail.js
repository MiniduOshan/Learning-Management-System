import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course data by ID (e.g., from an API)
    fetch(`/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-4">{course.description}</p>
      <div className="mt-4">
        {/* Render course content */}
      </div>
    </div>
  );
}

export default CourseDetail;
