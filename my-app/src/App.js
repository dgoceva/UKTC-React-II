import './App.css';

function getTitle() {
  return 'React';
}

function App() {
  return (
    <div className="App">
      <h1>Hello {getTitle()}</h1>

      <label htmlFor="search">Search:</label>
      <input type="text" id="search" placeholder="Search" />
    </div>
  );
}

export default App;
