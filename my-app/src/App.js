import './App.css';

const title = 'React'

function App() {
  return (
    <div className="App">
      <h1>Hello {title}!</h1>

      <label htmlFor="search">Search:</label>
      <input type="text" id="search" placeholder="Search" />
    </div>
  );
}

export default App;
