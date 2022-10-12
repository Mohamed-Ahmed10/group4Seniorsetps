const User = ({name , title , description}) => {
    let check = () =>
    {
        alert("Hello " + name)
    }
    return (
        <div>
            <h2>{name}</h2>
            <div>{title}</div>
            <span>{description}</span>
            <button onClick={check}>Go</button>
        </div>
    );
}

export default User;