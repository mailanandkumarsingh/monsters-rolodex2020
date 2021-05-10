import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respons) => respons.json())
      .then((user) => {
        this.setState({
          monsters: user,
        });
      });
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monsters) =>
      monsters.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
