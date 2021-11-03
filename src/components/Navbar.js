import { Link } from 'react-router-dom';

// import styles
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Home</h1>
        </Link>
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
}
