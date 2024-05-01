import {Link} from "react-router-dom"

const MainMenu = () => {
  return (
    <div className="h-screen">
      <h2 className="font-medium text-lg px-3 pt-6">Main Menu</h2>
      <div className="px-4 pt-3">
      <Link className="block font-light text-lg mb-6" to="/">Home</Link>
      <Link className="block font-light text-lg my-6" to="/">Course</Link>
      <Link className="block font-light text-lg my-6" to="/">Puchases</Link>
      <Link className="block font-light text-lg my-6" to="/">Settings</Link>
      <Link className="block font-light text-lg my-6" to="/signup">Logout</Link>
    </div>
    </div>
  );
};

export default MainMenu;
