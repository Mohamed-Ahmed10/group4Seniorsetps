import Reservation from "./components/controledComponents";
import HandlingEvents from "./components/handlingEvents";
import SignUpDialog from "./components/signUpDialiog";
import {useState} from "react";
import {CompareClass, CompareFunction} from "./components/compare";
import Name from "./components/nameComp";
import "./index.scss";
function App() {

    var [visible, setVisible] = useState(true);

    const changeVisible = () => {
        setVisible(!visible);
    };
    return (
        <div className="App">
            <HandlingEvents outside="Number one" />

            <hr />
            <Reservation />

            <hr />
            <SignUpDialog />

            <Name />

            <button onClick={changeVisible}>{visible ? "Hide" : "Show"}</button>
            {visible && (
                <>
                    <CompareFunction />
                    <hr />
                    <CompareClass />
                </>
            )}
        </div>
    );
}

export default App;
