import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import AddCourse from "./AddCourse";
import UpdateCourse from "./UpdateCourse";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setcourse] = useState(null);
  console.log(course);
  const getCourse = async () => {
    const response = await fetch("http://localhost:3000/admin/courses/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();

    setcourse(data.course);
  };

  useEffect(() => {
    getCourse();
  }, []);
  const update = (course) => {
    console.log("Run");
    console.log(course);
    setcourse(course[0]);
  };
  return (
    <>
      <UpdateCourse data={id} setcourse={update} />

      <div className="flex mx-24 h-fit rounded-2xl shadow-lg border-2 border-cyan-500 mb-5">
        <img
          className="w-8/12 h-3/6 rounded-t-xl"
          src={course?.imageLink}
          alt="img"
        />
        <div className="p-4 text-4xl">
          <h3 className="font-semibold text-4xl">{course?.title}</h3>
          <h5 className="font-light text-gray-400">{course?.description}</h5>
          <h3>{course?.price}</h3>
          <button className="p-2 bg-blue-600 text-white rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
