const Navbar = () => {

    var counter = 0 ;

    var sayHello = () =>
    {
        console.log(counter++)
    }

    return (
        <div>This is Nav
            <button onClick={sayHello}>Click me</button>
        </div>
    );
}

export default Navbar;