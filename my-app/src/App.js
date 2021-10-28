import "./App.css";

const list = [
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

const App = () => (
  <div>
    <h1>My Stories</h1>
    <Search />
    <hr />
    <List />
  </div>
);

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>{" "}
        </span>
        <span>{item.author}&nbsp;</span>
        <span>{item.num_comments + " "}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

export default App;
