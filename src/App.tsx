import { ChangeEvent, Component } from "react";
import { getData } from "./utils/get-data";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

export interface Monster {
  id: string;
  name: string;
  email: string;
};

interface State {
  monsters: Monster[],
  searchField: string
};

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state= {
      monsters: [],
      searchField: "",
    };
  };

  componentDidMount() {
    const fetchMonsters = async () => {
      const monsters = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      this.setState({monsters: monsters});
    } 
    fetchMonsters();
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
