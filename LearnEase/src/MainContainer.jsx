import Course from "./Course"
import MainMenu from "./MainMenu"

const MainContainer = () => {
  return (
    <div className="flex h-screen">
        <div className="w-2/12"><MainMenu /></div>
        <div className="w-10/12"><Course /></div>
    </div>
  )
}

export default MainContainer