import { Component } from "react";
import { ChangeEvent } from "react";
import "./search-box.styles.css";

interface SearchBoxProps {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

class SearchBox extends Component<SearchBoxProps> {
  render() {
    return (
      <input
        type="search"
        className= {`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
