import React, { FormEventHandler } from "react";
import "./Search.css";

type Props = {
  onSearch: FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

function SearchForm(props: Props) {
  return (
    <form className="searchBar" onSubmit={props.onSearch}>
      {/* <input type="text" id="inpuText" onChange={props.handleChange} required /> */}
      <input
        type="text"
        id="inpuText"
        onChange={props.handleChange}
        placeholder="Search..."
        required
      />
      <button className="buttonSearch" type="submit" value="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;