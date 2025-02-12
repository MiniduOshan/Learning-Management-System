import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-4 text-xl font-semibold">{course.title}</h3>
      <p className="mt-2 text-gray-600">{course.description}</p>
      <Link to={`/course/${course.id}`} className="mt-4 inline-block text-blue-600">Learn More</Link>
    </div>
  );
}

export default CourseCard;
