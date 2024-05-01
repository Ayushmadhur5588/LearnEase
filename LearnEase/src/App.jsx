import Signup from "./Signup";
import AppBar from "./AppBar";
import Course from "./Course";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <Routes>
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/course"} element={<Course />} />
          <Route path={"/"} element={<MainContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
