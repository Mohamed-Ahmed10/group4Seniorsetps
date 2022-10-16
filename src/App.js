import Navbar from "./components/nav";
import {Fragment} from "react/cjs/react.development";
import "./index.css";
import Footer from "./components/footer";
import User from "./components/user";
import Car from "./components/car";
function App() {
    return (
        <Fragment>
            <div className="App">
                <Navbar />
            </div>
            <div>Hello</div>
            <hr />
            

            <hr />
            <User
                name="Mohamed"
                title="frontend developer"
                description="desc one"
            />
            <User name="Khaled" title="Doctor" description="desc two" />
            <User name="Sayed" title="Full stack developer" description="Clever"/>

            <hr />
            <Car company="BMW" country="Germany"/>
            <br />
            <Car company="MG" country="USA"/>

            <hr />
            <Footer />
        </Fragment>
    );
}

export default App;
