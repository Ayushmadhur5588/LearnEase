import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("./Signup");
  };

  const handleClickHome = () => {
    navigate("./AppBar");
  };

  return (
    <div>
    <div className="flex justify-between bg-sky-50">
      <img
        className="p-2 w-24 h-20"
        src="https://www.langoly.com/wp-content/uploads/2021/09/coursera-logo.png"
        alt="logo"
      />
      <div className="p-4 font-normal text-white text-lg ">
        <button
          className="mr-6 p-3 rounded-3xl bg-blue-600"
          onClick={handleClickHome}
        >
          Home
        </button>
        <button
          className="mr-6 p-3 rounded-3xl bg-blue-600"
          onClick={handleClick}
        >
          Signup
        </button>
        <button
          className="mr-6 p-3 rounded-3xl bg-blue-600"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
     
    </div>
    <div className="w-6/12 mx-auto text-3xl">
    <h2 className="mx-40 mt-16 font-normal">Welcome to LearnEase</h2>
    </div>
    </div>
  );
};

export default AppBar;
