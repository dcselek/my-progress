import './App.css';
import {
  Link, Outlet,
} from 'react-router-dom'

function App() {
  return (
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
      <Outlet /> {/* Diğer sayfaları app altında göstermek adına Outlet kullanıyoruz */}
    </div>
  );
}

export default App;
