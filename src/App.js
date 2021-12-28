import './App.css';
import {
  Link, Outlet, NavLink
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>👁 dcselek's progress 👁</h1>

      <div>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Link to="/">Home</Link>
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'block',
                fontSize: isActive ? 32 : 16,
                color: isActive ? "red" : ""
              }
            }}
            to="users"
          >
            Users
          </NavLink> {/* NavLink denemesi */}
          <Link to="formik">Formik</Link>
        </nav>
      </div>
      <Outlet /> {/* Diğer sayfaları app altında göstermek adına Outlet kullanıyoruz */}
    </div>
  );
}

export default App;
