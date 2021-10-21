import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React'
}

function App() {
  return (
    <div className="App">
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor="search">Search:</label>
      <input type="text" id="search" placeholder="Search" />
    </div>
  );
}

export default App;
