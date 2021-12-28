import './App.css';
import {
  Link, Outlet, NavLink
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
            <NavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  fontSize: isActive ? 32 : 16,
                  color: isActive ? "red" : ""
                }
              }}
              to="Users"
            >
              Users
            </NavLink> {/* NavLink denemesi */}
          </li>
        </ul>
      </div>
      <Outlet /> {/* Diğer sayfaları app altında göstermek adına Outlet kullanıyoruz */}
    </div>
  );
}

export default App;
