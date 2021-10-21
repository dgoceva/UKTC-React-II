import './App.css';

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div className="App">
      <h1>Hello {getTitle('React')}</h1>

      <label htmlFor="search">Search:</label>
      <input type="text" id="search" placeholder="Search" />
    </div>
  );
}

export default App;
