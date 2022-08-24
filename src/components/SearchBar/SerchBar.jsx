import { Component } from "react";
import style from "./SearchBar.module.css";

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
      <form onSubmit={this.onFormSearch} className={style.form}>
        <label>
          <input
            type="text"
            value={name}
            className={style.input}
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
