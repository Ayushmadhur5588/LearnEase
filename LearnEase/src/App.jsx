import Signup from "./Signup";
import AppBar from "./AppBar";
import Courses from "./Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <Routes>
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/courses"} element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
