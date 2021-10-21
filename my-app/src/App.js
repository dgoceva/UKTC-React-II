import './App.css';

const list=[
  {
    title: 'React',
    url: 'http://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'http://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

const numbers = [1,4,9,16];
const newNumbers = numbers.map(function(number){
  return number*2;
})

console.log(newNumbers)

function App() {
  return (
    <div className="App">
      <h1>My Stories</h1>

      <label htmlFor="search">Search:</label>
      <input type="text" id="search" placeholder="Search" />
      <hr/>
      <ul>
        {list.map(function(item){
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
