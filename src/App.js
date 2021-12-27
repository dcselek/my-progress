import './App.css';
import {
  BrowserRouter as Router,
  Routes, // react-router-dom da bu fonksiyonun adı Switch'di fakat v6 ile beraber Routes oldu.
  Route,
  Link,
} from 'react-router-dom'
import Users from './components/Users';

const Home = () => <h1>Home</h1>

function App() {
  return (
    <Router>

      <div className="App">
        <h1>👁 Open your eyes, open your mind 👁</h1>

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Users">Users</Link>
            </li>
          </ul>
        </div>

      </div>

      <Routes>
        <Route path="/" element={<Home />} /> {/* v6 ile beraber exact kullanmamıza gerek kalmıyor en azından Home Page de.*/}
        <Route path="users" element={<Users />} />
      </Routes>

    </Router>
  );
}

export default App;
