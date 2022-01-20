import React from "react";
import "./App.css";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "http://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "http://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Stories</h1>
      <Search onSearcher={handleSearch} search={searchTerm} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <hr />
      <List list={filteredStories} />
    </div>
  );
};

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={props.search}
        placeholder="Search"
        onChange={props.onSearcher}
      />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>{" "}
    </span>
    <span>{props.item.author}&nbsp;</span>
    <span>{props.item.num_comments + " "}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;
