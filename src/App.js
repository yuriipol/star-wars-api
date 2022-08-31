import { useState } from "react";
import SerchBar from "./components/SearchBar/SerchBar";
import Gallary from "./components/Gallary/Gallary";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [hero, setHero] = useState(null);

  const onFormSubmit = (name) => setSearchName(name);

  const onClick = (hero) => setHero(hero);

  const onClose = () => setHero(null);

  if (hero) {
    const { name, gender, birth_year, hair_color, skin_color } = hero;
    return (
      <Modal onClose={onClose}>
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
      <SerchBar onFormSubmit={onFormSubmit} />

      <Gallary searchName={searchName} onClick={onClick} />
    </div>
  );
};

export default App;
