import Guest from "./guest";
import User from "./user";

const Rendering = () => {
    var isLogin = true;
    return (
        <div>
            {
                isLogin 
                ?
                    <User />
                :
                    <Guest />
            }
        </div>
    );
}

export default Rendering;