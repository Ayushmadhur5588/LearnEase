import { useState } from "react";
import { useEffect } from "react";
import CourseCard from "./CourseCard";

const Course = () => {
  const [course, setcourse] = useState([]);
  const getCourses = async () => {
    const response = await fetch("http://localhost:3000/admin/courses", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    setcourse(data.courses);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="flex flex-wrap h-screen mt-10 justify-between mx-8">
      {course.map((c) => (
        <CourseCard key={c.id} data={c} />
      ))}
    </div>
  );
};

export default Course;
