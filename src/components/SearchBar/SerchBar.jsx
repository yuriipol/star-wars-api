import { Component } from "react";

class SerchBar extends Component {
  state = {
    name: "",
  };
  onFormSearch = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.name);
    this.setState({
      name: "",
    });
  };
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.onFormSearch}>
        <label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
        </label>
      </form>
    );
  }
}

export default SerchBar;
