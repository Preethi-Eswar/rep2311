
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Remote Repository</h1>
    <p> ---> A remote URL is Git's fancy way of saying "the place where your code is stored." That URL could be your repository on GitHub, or another user's fork, or even on a completely different server.</p>
   <p className="p1">You can only push to two types of URL addresses:</p>
    <ul>
    <li>An HTTPS URL like     https://github.com/user/repo.git</li>
  <li>An SSH URL, like        git@github.com:user/repo.git</li>
    </ul>
    <p> ---> Git associates a remote URL with a name, and your default remote is usually called <ins> origin</ins>.</p>
    
    </div>
  );
}

export default App;
