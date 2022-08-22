import { Component } from "react";
import SerchBar from "./components/SearchBar/SerchBar";
import Gallary from "./components/Gallary/Gallary";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    searchName: "",
    hero: null,
  };
  onFormSubmit = (name) => {
    this.setState({
      searchName: name,
    });
  };
  onClick = (hero) => {
    this.setState({
      hero,
    });
  };
  onClose = () => {
    this.setState({
      hero: null,
    });
  };
  render() {
    if (this.state.hero) {
      const { name, gender, birth_year, hair_color, skin_color } =
        this.state.hero;
      return (
        <Modal onClose={this.onClose}>
          <span>{name}</span>
          <span>{gender}</span>
          <span>{birth_year}</span>
          <span>{hair_color}</span>
          <span>{skin_color}</span>
        </Modal>
      );
    }
    return (
      <div>
        <SerchBar onFormSubmit={this.onFormSubmit} />

        <Gallary searchName={this.state.searchName} onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
