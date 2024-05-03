import { Link } from "react-router-dom";
const CourseCard = (props) => {
  const { title, description, price, imageLink } = props.data;

  return (
    <Link to={`./courses/${props.data.id}`}>
      <div className="h-fit rounded-2xl shadow-lg border-2 border-cyan-500 mb-5">
        <img className="w-80 h-48 rounded-t-xl" src={imageLink} alt="img" />
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <h5 className="font-light text-gray-400">{description}</h5>
          <h3>{price}</h3>
          <button className="p-2 bg-blue-600 text-white rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
