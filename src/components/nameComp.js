import { useState } from "react";

const Name = () => {
    var [name ,setName] = useState("Mohamed")

    const changeName = () =>
    {
        setName("Ali");
        console.log(name)
    }
    return (
        <div>
            <div>{name}</div>
            <button onClick={changeName}>Change</button>
        </div>
    );
}

export default Name;