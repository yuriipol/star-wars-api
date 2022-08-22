import { Component } from "react";

class Gallary extends Component {
  state = {
    heroes: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      this.fetchHeros();
    }
  }
  fetchHeros() {
    fetch(`https://swapi.py4e.com/api/people/?search=${this.props.searchName}`)
      .then((result) => result.json())
      .then((data) => data.results)
      .then((heroes) =>
        this.setState({
          heroes: heroes,
        })
      );
  }
  render() {
    const { heroes } = this.state;
    return (
      <ol>
        {heroes.map((item) => (
          <li key={item.name} onClick={() => this.props.onClick(item)}>
            {item.name} - {item.gender}
          </li>
        ))}
      </ol>
    );
  }
}

export default Gallary;
