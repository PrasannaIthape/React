import react from "react";

class ErrMsg extends react.Component {
    state = {};
  render() {
    return (
      <div class="alert alert-danger" role="alert">
        This is a danger alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
    );
  }
}

export default ErrMsg;
