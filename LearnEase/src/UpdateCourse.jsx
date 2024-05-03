import { useRef } from "react";

const UpdateCourse = (props) => {
    
  const title = useRef(null);
  const description = useRef(null);
  const price = useRef(null);
  const imageLink = useRef(null);

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:3000/admin/courses/" + props.data,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title: title.current.value,
          description: description.current.value,
          imageLink: imageLink.current.value,
          price: price.current.value,
        }),
      }
    );
    const data = await response.json();
    props.setcourse(data.course);

  };

  return (
    <div className="w-1/2 h-fit mb-20 mx-auto mt-6">
      <h2 className="text-center text-4xl font-light font-sans my-5">
        Update Course{" "}
      </h2>
      <div className="w-1/2 mx-auto mt-20">
        <input
          ref={title}
          className="bg-gray-200 block mb-4 w-full p-3 rounded-md"
          type="text"
          placeholder="title"
        />
        <input
          ref={description}
          className="bg-gray-200 block mb-4 w-full p-3 rounded-md"
          type="text"
          placeholder="description"
        />
        <input
          ref={imageLink}
          className="bg-gray-200 block mb-4 w-full p-3 rounded-md"
          type="text"
          placeholder="imageLink"
        />
        <input
          ref={price}
          className="bg-gray-200 block mb-4 w-full p-3 rounded-md"
          type="text"
          placeholder="price"
        />

        <button
          className="p-3 rounded-md bg-blue-500 text-white font-normal text-lg mx-auto w-full"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default UpdateCourse;
