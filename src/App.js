import ViewCourse from "./components/courses";
import DisplayDetails from "./components/displayDetails";
import EditState from "./components/editState";
import Rendering from "./components/rendering";
import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTest from "./components/bootstrapTest";
import BootstrapTest2 from "./components/bootstrapTest2";
import ViewCourses from "./components/viewCourses";
function App() {
    let courses = ["HTML" , "CSS", "JS", "React"];
    return (
            <div className="App">
                <Rendering />
                <DisplayDetails />
                <hr />
                <EditState />
                <hr />
                <ViewCourse courses = {courses}/>

                <hr />
                SASS TEST
                <button className="btn btn-primary">Bootstrap</button>
                <BootstrapTest />
                <BootstrapTest2 />

                <hr />
                <ViewCourses />
            </div>
    );
}

export default App;
/*
- conditional rendering && class
- map on array & object
- State and setState
- add react bootstrap & sass
*/