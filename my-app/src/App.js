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

const Search = ({ search, onSearcher }) => (
  <div>
    <label htmlFor="search">Search:</label>
    <input
      type="text"
      id="search"
      value={search}
      placeholder="Search"
      onChange={onSearcher}
    />
  </div>
);

const List = ({list}) => (
  <ul>
    {list.map(({objectID,...item}) => (
      <Item key={objectID} {...item} />
    ))}
  </ul>
);

const Item = ({title,url,author,num_comments,points}) => (
  <li>
    <span>
      <a href={url}>{title}</a>{" "}
    </span>
    <span>{author}&nbsp;</span>
    <span>{num_comments + " "}</span>
    <span>{points}</span>
  </li>
);

export default App;
