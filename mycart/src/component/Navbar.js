import react from "react";

class Navbar extends react.Component {
  state = {};
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            MyCart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
