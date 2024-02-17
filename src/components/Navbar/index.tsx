import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar bg-primary navbar-area">
      <div className="container-fluid">
        <Link to="/">
          <h4>Github API</h4>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
